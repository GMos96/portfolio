import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/app/_components/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work and case studies. Coming soon.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        kicker="Projects"
        title="Selected work"
        description="Case studies and side projects will live here."
      />
      <div className="mt-12 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        <p>
          Nothing published yet. In the meantime, my{" "}
          <a
            href="/experience"
            className="text-foreground underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
          >
            experience
          </a>{" "}
          has the closest thing to a portfolio — Vault, the document
          vectorization platform I lead at LexisNexis, is the main thing I&apos;d
          write up first.
        </p>
        <p>
          If you&apos;d like to talk shop in the meantime,{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
          >
            drop me a line
          </a>
          .
        </p>
      </div>
    </div>
  );
}