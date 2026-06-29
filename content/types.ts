// Shared content types. Used across pages, components, and data files.

/**
 * A span of months, expressed as ISO-ish strings so they sort lexically.
 * `end: null` means the role is ongoing ("Present" in the rendered date range).
 */
export type DateRange = {
  start: string; // "YYYY-MM"
  end: string | null;
};

export type Role = {
  company: string;
  companyUrl?: string;
  title: string;
  location?: string;
  dates: DateRange;
  highlights: string[];
  stack?: string[];
};

/**
 * A single "Current Focus" item shown on the homepage — what I'm building,
 * learning, or exploring right now. `label` is the accent kicker.
 */
export type FocusItem = {
  label: string;
  title: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Education = {
  school: string;
  schoolUrl?: string;
  degree: string;
  field?: string;
  graduationYear: number;
};

export type TeamDevelopment = {
  engineerName: string;
  startLevel: string;
  endLevel: string;
  promotions: number;
  arc: string;
  approach: string;
  outcome: string;
};

export type Profile = {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location: string;
  email: string;
  linkedin: string;
  // Optional — when present, surfaces on /contact and in the footer.
  github?: string;
};