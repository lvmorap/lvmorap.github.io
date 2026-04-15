import { Reveal } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function AboutSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <SectionWrapper id="about" title="About" description="Profile overview and technical direction.">
      <Reveal className="grid gap-5">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
            {paragraph}
          </p>
        ))}
      </Reveal>
    </SectionWrapper>
  );
}
