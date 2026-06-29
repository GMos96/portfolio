// components/.tsx
import React from "react";

interface AvatarProps {
  /** Rendered pixel size of the square avatar. Defaults to 200. */
  size?: number;
  className?: string;
}

/**
 * A coding-themed placeholder avatar: a stylized terminal window with a
 * prompt, a blinking cursor, and a couple of orbiting "node" accents.
 * Uses the site's muted-indigo accent token so it adapts to light/dark and
 * stays tasteful rather than loud. Swap for a real portrait later.
 */
const Avatar: React.FC<AvatarProps> = ({ size = 200, className = "" }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Soft glow halo behind the card */}
      <div
        className="absolute inset-0 rounded-2xl animate-pulse-soft"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, var(--glow), transparent 70%)",
          filter: "blur(14px)",
        }}
      />

      {/* Terminal card */}
      <div className="absolute inset-0 animate-float rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] shadow-lg shadow-[color:var(--glow)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 border-b border-[color:var(--border)] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] opacity-60" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] opacity-40" />
          <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] opacity-25" />
          <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-muted">
            ~/dev
          </span>
        </div>

        {/* Code body */}
        <div className="flex flex-col gap-1.5 px-4 py-3 font-mono text-[11px] leading-tight">
          <span className="text-muted">
            <span className="text-accent">const</span> dev = {"{"}
          </span>
          <span className="pl-3 text-muted">
            name: <span className="text-accent">&quot;CGM&quot;</span>,
          </span>
          <span className="pl-3 text-muted">
            role: <span className="text-accent">&quot;lead&quot;</span>,
          </span>
          <span className="pl-3 text-muted">
            ships: <span className="text-accent">true</span>,
          </span>
          <span className="text-muted">{"}"}</span>
          <span className="mt-1 flex items-center gap-1 text-accent">
            <span aria-hidden>▸</span>
            <span className="inline-block h-3 w-1.5 animate-blink bg-[color:var(--accent)]" />
          </span>
        </div>
      </div>

      {/* Orbiting accent nodes */}
      <span
        className="absolute -right-1.5 top-6 h-3 w-3 animate-float rounded-full bg-[color:var(--accent)] opacity-70"
        style={{ animationDelay: "-2s" }}
      />
      <span
        className="absolute -left-2 bottom-10 h-2 w-2 animate-float rounded-full bg-[color:var(--accent)] opacity-50"
        style={{ animationDelay: "-4s" }}
      />
    </div>
  );
};

export default Avatar;
