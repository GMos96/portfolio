import type { DateRange } from "@/content/types";

type DateRangeProps = {
  dates: DateRange;
};

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function format(value: string | null): string {
  if (value === null) return "Present";
  // Expect "YYYY-MM" — convert to a Date anchored to the first of the month.
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return monthFormatter.format(new Date(year, month - 1, 1));
}

export function DateRange({ dates }: DateRangeProps) {
  return (
    <time className="text-sm text-zinc-500 dark:text-zinc-400">
      {format(dates.start)} – {format(dates.end)}
    </time>
  );
}