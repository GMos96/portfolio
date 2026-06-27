"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

// A path is "active" when it equals the current path, or when the current
// path is a descendant of it (so /experience highlights the Experience link
// and any future /experience/[slug] would too).
function isActive(currentPath: string, linkHref: string): boolean {
  if (linkHref === "/") return currentPath === "/";
  return currentPath === linkHref || currentPath.startsWith(`${linkHref}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          {profile.initials}
        </Link>
        <ul className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    "font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground " +
                    (active
                      ? "text-(--color-accent) dark:text-(--color-accent-dark)"
                      : "text-zinc-500 hover:text-foreground")
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
