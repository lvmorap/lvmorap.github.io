import { Sparkles, Trophy } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Reveal, Stagger } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { awards } from "@/lib/content";
import { cn } from "@/lib/utils";

type AwardItem = (typeof awards)[number];

export function AwardsSection({ items }: { items: AwardItem[] }) {
  return (
    <SectionWrapper id="awards" title="Awards & Recognitions" description="Signals of execution quality, innovation, and leadership.">
      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((award) => (
          <Reveal key={award.title}>
            <Card
              className={cn(
                "h-full",
                award.featured
                  ? "border-blue-200 bg-gradient-to-br from-blue-50/70 to-white"
                  : "border-slate-200",
              )}
            >
              <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white p-2">
                {award.featured ? (
                  <Sparkles size={16} className="text-blue-600" />
                ) : (
                  <Trophy size={16} className="text-slate-500" />
                )}
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{award.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{award.impact}</p>
            </Card>
          </Reveal>
        ))}
      </Stagger>
    </SectionWrapper>
  );
}
