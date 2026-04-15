"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import type { experiences } from "@/lib/content";

type ExperienceItem = (typeof experiences)[number];

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute top-0 bottom-0 left-0 w-px bg-slate-200" aria-hidden="true" />
      <div className="space-y-5">
        {items.map((item) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="group relative"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="absolute top-7 -left-[1.59rem] h-3 w-3 rounded-full border-2 border-blue-600 bg-white" />
            <Card className="overflow-hidden border-slate-200/90 p-0">
              <div className="absolute inset-y-0 left-0 w-1 bg-transparent transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-blue-600 group-hover:to-indigo-500" />
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">{item.role}</h3>
                    <p className="text-sm text-slate-600">{item.company}</p>
                  </div>
                  <p className="text-sm font-medium text-blue-700">{item.period}</p>
                </div>
                <ul className="grid gap-2 text-sm leading-7 text-slate-600 md:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="pl-2 before:mr-2 before:text-blue-500 before:content-['•']">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
