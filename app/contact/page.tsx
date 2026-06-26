import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/app/_components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Christopher Garrett Moseley — email and LinkedIn.",
};

type ContactRow = {
  label: string; // shown in <dt>
  href: string;
  display: string; // shown in <dd>
  external: boolean;
};

export default function ContactPage() {
  const rows: ContactRow[] = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      display: profile.email,
      external: false,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      display: "linkedin.com/in/gmos96",
      external: true,
    },
  ];

  if (profile.github) {
    rows.push({
      label: "GitHub",
      href: profile.github,
      display: profile.github.replace(/^https?:\/\//, ""),
      external: true,
    });
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        kicker="Contact"
        title="Let's talk"
        description={`Based in ${profile.location}. The fastest way to reach me is email.`}
      />
      <dl className="mt-12 space-y-6 text-base">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-widest text-zinc-500">
              {row.label}
            </dt>
            <dd>
              <a
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noopener noreferrer" : undefined}
                className="text-foreground underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
              >
                {row.display}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}