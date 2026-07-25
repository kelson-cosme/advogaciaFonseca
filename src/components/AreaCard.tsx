"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AreaCard.module.css';

export interface AreaData {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  iconSrc: string;
}

interface AreaCardProps {
  data: AreaData;
}

export default function AreaCard({ data }: AreaCardProps) {
  return (
    <motion.div 
      className={styles.card}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } }
      }}
    >
      {/* Background Image Container */}
      <div className={styles.bgImageWrapper}>
        <Image
          src={data.imageSrc}
          alt={data.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Floating Icon */}
      <div className={styles.floatingIcon}>
        <Image 
          src={data.iconSrc} 
          alt={`Ícone ${data.category}`}
          width={40}
          height={40}
          className={styles.iconImage}
        />
      </div>

      {/* Card Content */}
      <div className={styles.content}>
        <h4 className={styles.categoryTitle}>{data.category}</h4>
        <h3 className={styles.mainTitle}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        
        <div className={styles.tagsGrid}>
          {data.tags.map((tag, idx) => (
            <div key={idx} className={styles.tag}>
              <span className={styles.tagDot}></span>
              {tag}
            </div>
          ))}
        </div>

        {/* Ver mais Button (hidden initially, appears on hover) */}
        <motion.div 
          className={styles.verMaisContainer}
          variants={{
            initial: { opacity: 0, height: 0, marginTop: 0 },
            hover: { opacity: 1, height: "auto", marginTop: "1.5rem", transition: { duration: 0.3 } }
          }}
        >
          <button className={styles.verMaisButton}>
            Ver mais
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
