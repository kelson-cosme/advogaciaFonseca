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
      {/* Icon Image */}
      <Image 
        src={data.iconSrc} 
        alt={`Ícone ${data.category}`}
        width={80}
        height={70}
        className={styles.iconImage}
      />

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
      </div>
    </motion.div>
  );
}
