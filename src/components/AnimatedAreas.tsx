"use client";

import React, { useRef, useState } from 'react';
import styles from '../app/advogada/[slug]/page.module.css';
import FadeIn from './FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedAreas({ lawyer }: { lawyer: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        color: "#e8c985",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (numberRefs.current[index]) {
      gsap.to(numberRefs.current[index], {
        color: "#c9a847",
        opacity: 0.4,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        color: "#c9a847",
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (numberRefs.current[index]) {
      gsap.to(numberRefs.current[index], {
        color: "#f5f5f5",
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  if (!lawyer.areasList) return null;

  return (
    <section className={styles.areasSection}>
      {lawyer.areasBackground && (
        <div className={styles.areasBackgroundWrapper}>
          <Image 
            src={lawyer.areasBackground}
            alt="Background"
            fill
            unoptimized={true}
            style={{ objectFit: 'cover', objectPosition: '75% top', transform: 'scale(1.35) translateX(6%)', transformOrigin: 'top center' }}
          />
          <div className={styles.areasOverlay}></div>
        </div>
      )}
      <div className={styles.leafTopRight}>
        <Image src="/assets/folhaVerde1.webp" alt="Detalhe folhagem" width={300} height={300} className={styles.leaf1Image} />
      </div>
      <div className={styles.leafBottomLeft}>
        <Image src="/assets/folhaVerde2.webp" alt="Detalhe folhagem" width={350} height={350} className={styles.leaf2Image} />
      </div>
      <div className={styles.areasContainer}>
        <FadeIn direction="up">
          <div className={styles.areasHeader}>
            <span className={styles.areasOverline}>{lawyer.areasOverline}</span>
            <h2 className={styles.areasTitle}>
              {lawyer.areasTitleNormal1}
              <span className={styles.areasTitleHighlight}>{lawyer.areasTitleHighlight}</span>
              {lawyer.areasTitleNormal2}
            </h2>
            <hr className={styles.areasDivider} />
          </div>
        </FadeIn>

        <div 
          className={styles.areasGrid}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {lawyer.areasList.map((area: any, index: number) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div 
                style={{ position: 'relative', height: '100%', display: 'block' }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                      transition={{ type: "tween", duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '10px',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(201, 168, 71, 0.3)',
                        boxShadow: '0 0 8px 1px rgba(201, 168, 71, 0.15), inset 0 0 4px rgba(201, 168, 71, 0.05)',
                        zIndex: 0,
                      }}
                    />
                  )}
                </AnimatePresence>

                <div 
                  className={styles.areaItem}
                  style={{ 
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    height: '100%'
                  }}
                >
                  <span 
                    className={styles.areaNumber}
                    ref={(el) => { numberRefs.current[index] = el; }}
                  >{area.number}</span>
                  <div className={styles.areaHeaderTop}>
                    <div 
                      className={styles.areaIconBox}
                      ref={(el) => { iconRefs.current[index] = el; }}
                      style={{ backgroundColor: 'transparent' }}
                    >
                      {area.icon}
                    </div>
                    <h3 className={styles.areaTitle}>{area.title}</h3>
                  </div>
                  <p className={styles.areaDescription}>{area.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className={styles.areasFooter}>
            <Link href="#contato" className={styles.areasButton}>
              <svg className={styles.areasButtonIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              {lawyer.areasButtonText}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
