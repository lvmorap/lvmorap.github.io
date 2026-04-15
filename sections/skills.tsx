import { PillBadge } from "@/components/ui/pill-badge";
import { Reveal, Stagger } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function SkillsSection({ items }: { items: Record<string, string[]> }) {
  return (
    <SectionWrapper id="skills" title="Skills" description="Core capabilities grouped by domain.">
      <Stagger className="grid gap-6 md:grid-cols-2">
        {Object.entries(items).map(([group, entries]) => (
          <Reveal key={group} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {entries.map((skill) => (
                <PillBadge key={skill}>{skill}</PillBadge>
              ))}
            </div>
          </Reveal>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
