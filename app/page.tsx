import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Home",
  description: `${profile.title} at LexisNexis. ${profile.tagline}`,
};

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>
        <p className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {profile.shortBio}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
          <li>
            <Link
              href="/experience"
              className="font-medium text-foreground underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
            >
              View experience →
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium text-foreground underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
            >
              Get in touch →
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
