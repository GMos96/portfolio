import { profile } from "@/content/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {profile.name}
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              LinkedIn
            </a>
          </li>
          {profile.github && (
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                GitHub
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
