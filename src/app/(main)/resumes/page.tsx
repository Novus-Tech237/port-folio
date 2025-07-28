import { canCreateResume } from "@/lib/permissions";
import prisma from "@/lib/prisma";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import CreateResumeButton from "./CreateResumeButton";
import ResumeItem from "./ResumeItem";

export const metadata: Metadata = {
  title: "Your resumes",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount, subscriptionLevel] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
    getUserSubscriptionLevel(userId),
  ]);

  return (

    <main className="mx-auto w-full max-w-7xl space-y-12 px-3 py-6">
      <div className="flex flex-col gap-8">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">
              Your <span className="text-red-600">Resumes</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Total: {totalCount}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <CreateResumeButton
              canCreate={canCreateResume(subscriptionLevel, totalCount)}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}
