"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

import { sectionFadeUp, staggerContainer } from "@/lib/motion";

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

type RevealProps = MotionDivProps & { once?: boolean };

export function Reveal({ once = true, children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={sectionFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
