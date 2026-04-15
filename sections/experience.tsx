import { Reveal } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Timeline } from "@/components/ui/timeline";
import type { experiences } from "@/lib/content";

type ExperienceItem = (typeof experiences)[number];

export function ExperienceSection({ items }: { items: ExperienceItem[] }) {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      description="Professional track record centered on quality, systems reliability, and data validation."
      className="bg-white"
    >
      <Reveal>
        <Timeline items={items} />
      </Reveal>
    </SectionWrapper>
  );
}
