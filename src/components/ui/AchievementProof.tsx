"use client";

import Image from "next/image";
import type { Achievement } from "@/types";
import { cn } from "@/lib/utils";

interface AchievementProofProps {
  achievement: Achievement;
}

export function AchievementProof({ achievement }: AchievementProofProps) {
  const isPremier = achievement.tier === "premier";

  return (
    <article
      className={cn(
        "py-4",
        isPremier && "border-l-2 border-accent-blue/30 pl-4",
      )}
    >
      <h4
        className={cn(
          "font-medium text-text-primary",
          isPremier ? "text-[15px]" : "text-sm",
        )}
      >
        {achievement.title}
      </h4>
      {achievement.subtitle && (
        <p className="mt-1 text-[13px] text-text-muted">{achievement.subtitle}</p>
      )}
      {achievement.proofImage && (
        <div className="mt-3 overflow-hidden rounded-md ring-1 ring-border-subtle">
          <Image
            src={achievement.proofImage}
            alt={`${achievement.title} certificate`}
            width={480}
            height={320}
            className="h-auto w-full max-w-[220px] object-cover"
          />
        </div>
      )}
    </article>
  );
}

interface AchievementListProps {
  achievements: Achievement[];
}

export function AchievementList({ achievements }: AchievementListProps) {
  const premier = achievements.filter((a) => a.tier === "premier");
  const standard = achievements.filter((a) => a.tier === "standard");

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-1 divide-y divide-border-subtle">
        <p className="pb-3 text-[13px] font-medium text-text-muted">
          Major awards
        </p>
        {premier.map((achievement) => (
          <AchievementProof key={achievement.id} achievement={achievement} />
        ))}
      </div>
      <div className="space-y-1 divide-y divide-border-subtle">
        <p className="pb-3 text-[13px] font-medium text-text-muted">
          Certifications &amp; results
        </p>
        {standard.map((achievement) => (
          <AchievementProof key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
