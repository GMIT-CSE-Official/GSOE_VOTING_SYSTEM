"use server";
import prisma from "@/db";

export const vote = async ({
  bestIdol,
  bestArtAndAmbience,
  bestConcept,
  userId,
}: {
  bestIdol?: string;
  bestArtAndAmbience?: string;
  bestConcept?: string;
  userId: string;
}) => {
  try {
    const vote = await prisma.vote.create({
      data: {
        bestIdol,
        bestArtAndAmbience,
        bestConcept,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    if (!vote) {
      return {
        success: false,
        message: `Failed to vote`,
      };
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
      },
    });

    return {
      success: true,
      message: `Thank you for voting ${user && user?.name}`,
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

export const getVoteByUserId = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return {
        error: "User not found",
      };
    }

    const vote = await prisma.vote.findFirst({
      where: {
        userId: user?.id,
      },
    });

    if (!vote) {
      return {
        success: false,
        message: `No vote found for user`,
      };
    }

    return {
      success: true,
      data: vote,
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
