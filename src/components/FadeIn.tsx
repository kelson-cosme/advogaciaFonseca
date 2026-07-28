"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  width?: "auto" | "100%";
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  duration = 0.8,
  width = "auto"
}: FadeInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 }, // Vem da direita pra esquerda
    right: { x: -40, y: 0 }, // Vem da esquerda pra direita
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      className={className}
      style={{ width }}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}
