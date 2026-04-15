import { Code2, Link, Mail } from "lucide-react";

import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-900">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600">Economics, data, and intelligent systems.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <a className="link-underline inline-flex items-center gap-2 hover:text-blue-700" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Link size={16} /> LinkedIn
          </a>
          <a
            className="link-underline inline-flex items-center gap-2 hover:text-blue-700"
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={16} /> GitHub
          </a>
          <a className="link-underline inline-flex items-center gap-2 hover:text-blue-700" href={`mailto:${profile.email}`}>
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
