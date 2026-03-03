"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  className?: string;
  title: string | ReactNode;
  description: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  delay?: number;
}

export const BentoItem = ({
  className,
  title,
  description,
  header,
  icon,
  delay = 0,
}: BentoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`
                h-full rounded-3xl group/bento hover:shadow-2xl hover:shadow-blue-900/10 transition duration-200 
                p-6 bg-[#0F0F0F] border border-white/[0.05] flex flex-col justify-between space-y-4 
                ${className}
            `}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 flex-col items-center justify-center overflow-hidden border border-white/[0.02]">
        {header}
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-blue-500 mb-2 p-2 bg-blue-500/10 w-fit rounded-lg border border-blue-500/20">
          {icon}
        </div>
        <div className="font-bold text-neutral-200 mb-1 text-lg">{title}</div>
        <div className="font-normal text-neutral-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
