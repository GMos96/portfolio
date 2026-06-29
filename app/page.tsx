import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { currentFocus } from "@/content/focus";
import Avatar from "@/app/_components/avatar";
import { SectionHeading } from "@/app/_components/section-heading";
import { FocusCard } from "@/app/_components/focus-card";

export const metadata: Metadata = {
  title: "Home",
  description: `${profile.title} at LexisNexis. ${profile.tagline}`,
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Faint, slow-panning grid backdrop — adds depth without distraction. */}
      <div
        className="bg-grid bg-grid-animated pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-8 sm:py-24 lg:max-w-5xl lg:py-32 2xl:max-w-6xl 2xl:py-40">
        <section className="grid items-center gap-10 sm:grid-cols-[1fr_auto] sm:gap-12 lg:gap-20">
          <div className="space-y-6 lg:space-y-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent lg:text-sm">
              {profile.title}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl 2xl:text-7xl">
              {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-accent">
                {profile.name.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted lg:text-lg lg:leading-8 2xl:text-xl 2xl:leading-9">
              {profile.shortBio}
            </p>
            <ul className="flex flex-wrap items-center gap-3 pt-2 text-sm lg:gap-4 lg:pt-4 lg:text-base">
              <li>
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-medium text-accent-foreground shadow-sm shadow-[color:var(--glow)] transition-transform hover:-translate-y-0.5 hover:shadow-md hover:shadow-[color:var(--glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View experience →
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] px-4 py-2 font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center sm:justify-end">
            {/* Scale the fixed-size avatar up on large displays. */}
            <div className="scale-100 lg:scale-125 2xl:scale-150">
              <Avatar size={200} />
            </div>
          </div>
        </section>

        <section className="mt-20 lg:mt-28 2xl:mt-32">
          <SectionHeading
            kicker="Now"
            title="Current focus"
            description="What I'm building, learning, and exploring at the moment."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10">
            {currentFocus.map((item) => (
              <FocusCard key={item.label} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
