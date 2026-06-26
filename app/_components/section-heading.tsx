type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <header className="space-y-3">
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </header>
  );
}