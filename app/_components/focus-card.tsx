import type { FocusItem } from "@/content/types";

type FocusCardProps = {
  item: FocusItem;
};

export function FocusCard({ item }: FocusCardProps) {
  return (
    <article className="group rounded-xl border border-[color:var(--border)] p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md hover:shadow-[color:var(--glow)]">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {item.label}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
    </article>
  );
}
