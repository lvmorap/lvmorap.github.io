import { Card } from "@/components/ui/card";
import { Reveal, Stagger } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { work } from "@/lib/content";

type WorkItem = (typeof work)[number];

export function WorkSection({ items }: { items: WorkItem[] }) {
  return (
    <SectionWrapper
      id="work"
      title="Selected Work & Impact"
      description="A concise proof-of-work layer with problem-action-result framing."
      className="bg-white"
    >
      <Stagger className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Reveal key={item.title}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">Problem</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Action</dt>
                  <dd>{item.action}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Result</dt>
                  <dd>{item.result}</dd>
                </div>
              </dl>
            </Card>
          </Reveal>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
