"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

interface AnimatedStatItemProps {
  stat: {
    value: string;
    label: string;
  };
  index: number;
  itemClassName: string;
  valueClassName: string;
  labelClassName: string;
}

export default function AnimatedStatItem({ 
  stat, 
  index, 
  itemClassName, 
  valueClassName, 
  labelClassName 
}: AnimatedStatItemProps) {
  // Cascata de delay (0s, 0.2s, 0.4s...)
  const delay = index * 0.2;

  return (
    <motion.div 
      className={itemClassName}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <h3 className={valueClassName}>
        <AnimatedNumber value={stat.value} delay={delay} />
      </h3>
      <p className={labelClassName}>{stat.label}</p>
    </motion.div>
  );
}
