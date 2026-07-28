"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  delay?: number;
}

export default function AnimatedNumber({ value, delay = 0 }: AnimatedNumberProps) {
  const [currentNum, setCurrentNum] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Ex: "R$50M+" -> prefix: "R$", num: 50, suffix: "M+"
  const { prefix, targetNumber, suffix, isValid } = useMemo(() => {
    const match = value.match(/^([^0-9]*)([0-9]+)([^0-9]*)$/);
    if (!match) return { prefix: "", targetNumber: 0, suffix: "", isValid: false };
    return {
      prefix: match[1],
      targetNumber: parseInt(match[2], 10),
      suffix: match[3],
      isValid: true
    };
  }, [value]);

  useEffect(() => {
    if (isInView && isValid) {
      let controls: any;
      const timeoutId = setTimeout(() => {
        controls = animate(0, targetNumber, {
          duration: 2.5, 
          ease: "circOut", // Deixa a rolagem do número mais suave no final (parecido com odômetro)
          onUpdate: (val) => {
            setCurrentNum(Math.floor(val));
          }
        });
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        if (controls) controls.stop();
      };
    }
  }, [isInView, isValid, targetNumber, delay]);

  if (!isValid) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {currentNum}
      {suffix}
    </span>
  );
}
