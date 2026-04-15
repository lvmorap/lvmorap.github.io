import dynamic from "next/dynamic";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { awards, education, experiences, profile, skills, work } from "@/lib/content";
import { HeroSection } from "@/sections/hero";

const AboutSection = dynamic(() => import("@/sections/about").then((mod) => mod.AboutSection));
const ExperienceSection = dynamic(() =>
  import("@/sections/experience").then((mod) => mod.ExperienceSection),
);
const EducationSection = dynamic(() => import("@/sections/education").then((mod) => mod.EducationSection));
const AwardsSection = dynamic(() => import("@/sections/awards").then((mod) => mod.AwardsSection));
const SkillsSection = dynamic(() => import("@/sections/skills").then((mod) => mod.SkillsSection));
const WorkSection = dynamic(() => import("@/sections/work").then((mod) => mod.WorkSection));
const ContactSection = dynamic(() => import("@/sections/contact").then((mod) => mod.ContactSection));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          name={profile.name}
          headline={profile.headline}
          positioning={profile.positioning}
          githubUsername={profile.githubUsername}
          cvUrl={profile.cvUrl}
        />
        <AboutSection paragraphs={profile.about} />
        <ExperienceSection items={experiences} />
        <EducationSection items={education} />
        <AwardsSection items={awards} />
        <SkillsSection items={skills} />
        <WorkSection items={work} />
        <ContactSection email={profile.email} linkedin={profile.linkedin} />
      </main>
      <Footer />
    </>
  );
}
