import { ArrowUpRight, Link, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ContactSection({ email, linkedin }: { email: string; linkedin: string }) {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      description="Open to opportunities in data science, AI, and systems-focused product teams."
    >
      <Reveal className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Let’s build meaningful systems.</h3>
            <p className="mt-2 text-slate-600">Get in touch via email or LinkedIn.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-11 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-white">
              <a href={`mailto:${email}`}>
                <Mail size={16} /> Email
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-5">
              <a href={linkedin} target="_blank" rel="noreferrer">
                <Link size={16} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
