"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Suavidade da rolagem (quanto menor, mais suave)
      duration: 1.5, // Duração
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2, // Acelera um pouco no touch pra não ficar pesado
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
