import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { RoleCard } from "@/app/_components/role-card";
import { SectionHeading } from "@/app/_components/section-heading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career history — engineering leadership and platform work at LexisNexis across .NET 8, Java, Angular, and React.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        kicker="Experience"
        title="Where I've worked"
        description="Seven years across platform, product, and integration work at LexisNexis."
      />
      <div className="mt-12 space-y-12">
        {experience.map((role) => (
          <RoleCard
            key={`${role.company}-${role.title}-${role.dates.start}`}
            role={role}
          />
        ))}
      </div>
    </div>
  );
}
