"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type MeteorStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;

  const [styles, setStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const newStyles = new Array(meteorCount).fill(true).map((_, idx) => ({
      left: `${idx * (800 / meteorCount) - 400}px`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.floor(Math.random() * 5) + 5}s`,
    }));

    setStyles(newStyles);
  }, [meteorCount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {styles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px",
            ...style,
          }}
        />
      ))}
    </motion.div>
  );
};