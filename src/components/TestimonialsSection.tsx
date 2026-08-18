'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    text: "Profissionais de altíssima competência. Resolveram todos meus problemas com transparência e objetividade. Indico de olhos fechados.",
    author: "Félix Amorim dos Santos",
    image: "/assets/felix.png"
  },
  {
    id: 2,
    text: "As melhores!",
    author: "Lazaro Andre.",
    image: "/assets/lazaro.png"
  },
  {
    id: 3,
    text: "Excelente",
    author: "francielly maria",
    image: "/assets/francieli.png"
  },
  {
    id: 4,
    text: "Profissionais incríveis com toda a atenção e dedicação ao nosso caso. Recomendo muito!",
    author: "Camila Ferreira Silva"
  },
  {
    id: 5,
    text: "As melhores Advogadas da cidade, muito profissionalismo e experiência!",
    author: "Jorge Leandro Lima",
    image: "/assets/jeorge.png"
  },
  {
    id: 6,
    text: "Excelente profissional. Parabéns pelo trabalho",
    author: "Mateus Boa Sorte"
  },
  {
    id: 7,
    text: "Parabéns ótimo trabalho",
    author: "Wil Paz",
    image: "/assets/wil.png"
  },
  {
    id: 8,
    text: "Sou cliente a anos, cuida dos meus interesses jurídicos com",
    author: "Gilda Cristiane",
    image: "/assets/gilda.png"
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

import FadeIn from './FadeIn';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsVisible(1);
      } else if (window.innerWidth <= 1024) {
        setCardsVisible(2);
      } else {
        setCardsVisible(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsVisible);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // Muda a cada 4 segundos
    return () => clearInterval(interval);
  }, [maxIndex, currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className={styles.testimonialsSection}>
      <FadeIn direction="up" width="100%" className={styles.header}>
        <a 
          href="https://share.google/R2v7qsmR5fYefIlSF" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.badgeWrapper}
          title="Ver avaliações no Google"
        >
          <Image src="/assets/selo.webp" alt="Selo de Avaliações" width={120} height={120} style={{ objectFit: 'contain' }} />
        </a>
        <div className={styles.headerText}>
          <span className={styles.subtitle}>NOTA MÁXIMA NAS AVALIAÇÕES</span>
          <h2 className={styles.title}>O que dizem nossos clientes</h2>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.2} width="100%" className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={prev} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className={styles.carouselWindow}>
          <div 
            className={styles.cardsWrapper}
            style={{ transform: `translateX(calc(-${currentIndex} * (100% + 1.5rem) / var(--cards-visible)))` }}
          >
          {testimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className={styles.card}>
              <StarRating />
              <p className={styles.cardText}>{testimonial.text}</p>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardFooter}>
                {testimonial.image ? (
                  <div className={styles.authorImage}>
                    <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} className={styles.avatar} />
                  </div>
                ) : (
                  <div className={styles.authorImagePlaceholder}>
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <p className={styles.cardAuthor}>{testimonial.author}</p>
              </div>
            </div>
          ))}
          </div>
        </div>

        <button className={styles.navButton} onClick={next} aria-label="Próximo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </FadeIn>

      <FadeIn direction="up" delay={0.3} className={styles.pagination}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </FadeIn>

      <div className={styles.googleCtaWrapper}>
        <a 
          href="https://share.google/R2v7qsmR5fYefIlSF" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.googleBadgeButton}
        >
          <div className={styles.googleIconWrapper}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
          </div>
          <div className={styles.googleButtonContent}>
            <div className={styles.googleButtonTop}>
              <span className={styles.googleRatingScore}>5,0</span>
              <div className={styles.googleStarsInline}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC04">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className={styles.googleButtonLabel}>Avaliações no Google</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
