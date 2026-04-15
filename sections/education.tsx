import { Card } from "@/components/ui/card";
import { Reveal, Stagger } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { education } from "@/lib/content";

type EducationItem = (typeof education)[number];

export function EducationSection({ items }: { items: EducationItem[] }) {
  return (
    <SectionWrapper id="education" title="Education" description="Academic foundation in economics, AI, and quantitative methods.">
      <Stagger className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Reveal key={item.degree}>
            <Card className="h-full">
              <p className="text-sm font-medium text-blue-700">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{item.degree}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.institution}</p>
              {item.coursework.length ? (
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  {item.coursework.map((course) => (
                    <li key={course} className="pl-2 before:mr-2 before:text-blue-500 before:content-['•']">
                      {course}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </Reveal>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
