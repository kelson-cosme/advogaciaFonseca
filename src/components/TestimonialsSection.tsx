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

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div className={styles.badgeWrapper}>
          <Image src="/assets/selo.webp" alt="Selo de Avaliações" width={120} height={120} style={{ objectFit: 'contain' }} />
        </div>
        <div className={styles.headerText}>
          <span className={styles.subtitle}>NOTA MÁXIMA NAS AVALIAÇÕES</span>
          <h2 className={styles.title}>O que dizem nossos clientes</h2>
        </div>
      </div>

      <div className={styles.carouselContainer}>
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
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
