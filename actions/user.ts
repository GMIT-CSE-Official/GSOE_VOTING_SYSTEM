"use server";

import prisma from "@/db";
import jwt from "jsonwebtoken";

export const getUserByToken = async (token?: string) => {
  try {
    if (!token) {
      return {
        error: "Invalid user ID",
      };
    }

    const { email } = jwt.verify(token, process.env.JWT_SECRET!) as {
      email: string;
    };

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        vote: true,
      },
    });

    if (!user) {
      return {
        error: "User not found",
      };
    }

    return {
      success: true,
      data: user,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "An error occurred",
    };
  }
};

export const createUser = async ({
  name,
  email,
  phoneNumber,
  age,
  occupation,
  location,
}: {
  name: string;
  email: string;
  phoneNumber: string;
  age?: number;
  occupation?: string;
  location?: string;
}) => {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return {
        error: "Invalid email",
      };
    }

    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      return {
        error: "email already exists",
      };
    }

    if (name.length < 2 || name.length > 50) {
      return {
        error: "Name must be between 2 and 50 characters",
      };
    }

    if (phoneNumber.length !== 10) {
      return {
        error: "Invalid phone number",
      };
    }

    await prisma.user.create({
      data: {
        email,
        name,
        mobile: phoneNumber,
        age,
        occupation,
        location,
      },
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET!);

    return {
      success: true,
      token,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "An error occurred",
    };
  }
};
