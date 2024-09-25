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

    const { id } = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };

    const user = await prisma.user.findUnique({
      where: {
        id,
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
    return {
      error: "An error occurred",
    };
  }
};

export const createUser = async ({
  name,
  phoneNumber,
}: {
  name: string;
  phoneNumber: string;
}) => {
  try {
    const phoneExists = await prisma.user.findFirst({
      where: {
        mobile: phoneNumber,
      },
    });
    if (phoneExists) {
      return {
        error: "Phone number already exists",
      };
    }

    const userExists = await prisma.user.findFirst({
      where: {
        mobile: phoneNumber,
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

    if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      return {
        error: "Invalid phone number",
      };
    }

    const user = await prisma.user.create({
      data: {
        name,
        mobile: phoneNumber,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);

    return {
      success: true,
      token,
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
