import type { Metadata } from "next";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { teamDevelopment } from "@/content/mentorship";
import { SectionHeading } from "@/app/_components/section-heading";
import { SkillGroup } from "@/app/_components/skill-group";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, skills, and education for Christopher Garrett Moseley, Software Engineering Lead at LexisNexis.",
};

export default function AboutPage() {
  const bioParagraphs = profile.longBio.split("\n\n").filter(Boolean);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        kicker="About"
        title="A bit about me"
        description={`Based in ${profile.location}. ${profile.title} at LexisNexis.`}
      />

      <section className="mt-12 space-y-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {bioParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="mt-16 space-y-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Skills
        </h2>
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Education
        </h2>
        <ul className="space-y-4">
          {education.map((entry) => (
            <li
              key={`${entry.school}-${entry.graduationYear}`}
              className="space-y-1"
            >
              <p className="text-base font-medium text-foreground">
                {entry.schoolUrl ? (
                  <a
                    href={entry.schoolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
                  >
                    {entry.school}
                  </a>
                ) : (
                  entry.school
                )}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {entry.degree}
                {entry.field ? `, ${entry.field}` : ""} · {entry.graduationYear}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 space-y-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Team Development
        </h2>
        <div className="space-y-8">
          {teamDevelopment.map((entry) => (
            <div key={entry.engineerName} className="border-l border-zinc-200 pl-6 dark:border-zinc-800">
              <p className="text-base font-medium text-foreground">
                {entry.engineerName}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {entry.startLevel} → {entry.endLevel} ({entry.promotions} promotions)
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                <span className="font-medium">The arc:</span> {entry.arc}
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                <span className="font-medium">How I taught:</span> {entry.approach}
              </p>
              <p className="mt-3 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                <span className="font-medium">Where they are now:</span> {entry.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}