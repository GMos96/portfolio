import type { SkillGroup as SkillGroupType } from "@/content/types";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <section className="space-y-3">
      <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        {group.category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}