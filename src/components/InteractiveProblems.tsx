"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../app/advogada/[slug]/page.module.css';
import FadeIn from './FadeIn';

interface InteractiveProblemsProps {
  problems: string[];
  buttonText: string;
  buttonLink: string;
  isInteractive: boolean;
}

export default function InteractiveProblems({ problems, buttonText, buttonLink, isInteractive }: InteractiveProblemsProps) {
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    if (!isInteractive) return;
    const newSelected = new Set(selectedItems);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedItems(newSelected);
  };

  const showButton = !isInteractive || selectedItems.size > 0;

  return (
    <>
      <div className={styles.problemsGrid}>
        {problems?.map((problem, index) => {
          const isSelected = selectedItems.has(index);
          return (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <div 
                className={styles.problemItem}
                onClick={() => toggleItem(index)}
                style={{ 
                  cursor: isInteractive ? 'pointer' : 'default', 
                  transition: 'all 0.3s ease', 
                  backgroundColor: isSelected ? 'rgba(201, 168, 71, 0.1)' : 'transparent', 
                  border: isSelected ? '1px solid #c9a847' : '1px solid rgba(255,255,255,0.1)' 
                }}
              >
                {isInteractive ? (
                  <div className={styles.checkboxContainer} style={{ marginRight: '15px', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      border: '2px solid #c9a847',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isSelected ? '#c9a847' : 'transparent',
                      transition: 'all 0.2s ease'
                    }}>
                      {isSelected && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                ) : (
                  <svg className={styles.problemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                <p className={styles.problemText}>{problem}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {showButton && (
        <FadeIn direction="up" delay={0.2}>
          <div className={styles.problemsCtaBox}>
            <span className={styles.problemsCtaOverline}>ATENÇÃO AOS SEUS DIREITOS</span>
            <p className={styles.problemsCtaText}>
              Posso ajudar você a entender o melhor caminho para o seu caso.
            </p>
            <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className={styles.problemsButton} style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
              <svg className={styles.problemsButtonIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              {buttonText}
            </Link>
          </div>
        </FadeIn>
      )}
    </>
  );
}
