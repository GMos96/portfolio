import type { Role } from "@/content/types";
import { BulletList } from "./bullet-list";
import { DateRange } from "./date-range";

type RoleCardProps = {
  role: Role;
};

export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="space-y-4">
      <header className="space-y-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {role.title}
          <span className="text-(--color-accent)"> · </span>{" "}
          {/* Applying accent to the separator */}
          {role.companyUrl ? (
            <a
              href={role.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-zinc-300 underline-offset-4 hover:decoration-foreground dark:decoration-zinc-700"
            >
              {role.company}
            </a>
          ) : (
            <span className="text-foreground">{role.company}</span>
          )}
        </h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
          <DateRange dates={role.dates} />
          {role.location ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{role.location}</span>
            </>
          ) : null}
        </div>
      </header>
      <BulletList items={role.highlights} />
      {role.stack && role.stack.length > 0 ? (
        <ul className="flex flex-wrap gap-2 pt-1">
          {role.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-zinc-200 px-2.5 py-0.5 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
