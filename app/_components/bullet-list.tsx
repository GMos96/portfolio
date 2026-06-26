type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-2 text-base leading-7 text-zinc-700 dark:text-zinc-300">
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.7rem] h-px w-3 bg-zinc-400 dark:bg-zinc-600"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}