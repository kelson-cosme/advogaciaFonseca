'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    text: "Fizeram a partilha dos imóveis da família sem aquele clima pesado de brigas. Conduziram tudo com muito equilíbrio e respeito.",
    author: "Larissa F."
  },
  {
    id: 2,
    text: "Precisei de ajuda com um despejo por falta de pagamento que estava travado há meses. Foi resolvido bem mais rápido do que eu esperava.",
    author: "Gustavo P."
  },
  {
    id: 3,
    text: "A escritura do meu imóvel estava com pendências antigas de registro. Regularizaram tudo e finalmente consigo dormir tranquila.",
    author: "Beatriz M."
  }
];

const StarRating = () => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c5a059" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
          <div className={styles.badgeWrapper}>
            <Image 
              src="/assets/selo.webp" 
              alt="Selo 5 estrelas do Google" 
              width={140} 
              height={140} 
              style={{ objectFit: 'contain' }}
            />
          </div>
        <div className={styles.headerText}>
          <span className={styles.subtitle}>NOTA MÁXIMA NAS AVALIAÇÕES</span>
          <h2 className={styles.title}>O que dizem nossos clientes</h2>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <button className={styles.navButton} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className={styles.cardsWrapper}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <StarRating />
              <p className={styles.cardText}>{testimonial.text}</p>
              <div className={styles.cardDivider}></div>
              <p className={styles.cardAuthor}>{testimonial.author}</p>
            </div>
          ))}
        </div>

        <button className={styles.navButton} aria-label="Próximo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className={styles.pagination}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.activeDot}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </section>
  );
};

export default TestimonialsSection;
