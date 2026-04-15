"use client";

import { motion } from "framer-motion";
import { Bot, Database, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { sectionFadeUp, staggerContainer } from "@/lib/motion";

type HeroSectionProps = {
  name: string;
  headline: string;
  positioning: string;
  githubUsername: string;
  cvUrl: string;
};

const badges = [
  { icon: Bot, label: "AI" },
  { icon: Database, label: "Data" },
  { icon: ShieldCheck, label: "QA" },
];

export function HeroSection({
  name,
  headline,
  positioning,
  githubUsername,
  cvUrl,
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24 px-6 pt-32 pb-20 md:px-10">
      <div className="hero-grid-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <motion.div
        className="relative mx-auto grid w-full max-w-6xl gap-10 rounded-3xl border border-slate-200/80 bg-white/72 p-8 backdrop-blur-sm md:grid-cols-[1.2fr_1fr] md:p-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionFadeUp} className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">{name}</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">{headline}</p>
          <p className="text-base leading-8 text-slate-600 md:text-lg">{positioning}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              asChild
              className="h-11 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-white transition hover:from-blue-500 hover:to-indigo-500"
            >
              <a href="#work">View Work</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full px-5">
              <a href={cvUrl} download>
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={sectionFadeUp}
          className="relative flex items-center justify-center rounded-2xl border border-slate-200 bg-white/75 p-7"
        >
          <div className="absolute -top-4 left-4 h-24 w-24 rounded-full bg-blue-200/45 blur-2xl" />
          <Image
            src={`https://github.com/${githubUsername}.png`}
            alt={`${name} GitHub profile image`}
            width={240}
            height={240}
            priority
            className="relative rounded-2xl border border-slate-200 object-cover shadow-xl"
          />
          <div className="absolute -right-3 -bottom-4 flex flex-col gap-2">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <Icon size={14} className="text-blue-600" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
