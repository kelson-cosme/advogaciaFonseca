"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";
import pageStyles from "../../app/v2/page.module.css";

const slides = [
  {
    image: "/assets/hero1v2.webp",
    badge: "Atendimento presencial e online em todo o Brasil.",
    title: "Escritório de advocacia especializada em Cuiabá, Mato Grosso",
    subtitle: "Segurança jurídica para Direito Ambiental, Imobiliário, Família, Inventários e Previdenciário."
  },
  {
    image: "/assets/herancaV2.webp",
    badge: "HERANÇA E PATRIMÔNIO",
    title: "Proteja o patrimônio da sua família com segurança",
    subtitle: "Atuação especializada em Inventários judiciais e extrajudiciais, Testamentos e Planejamento Sucessório."
  },
  {
    image: "/assets/divorcioV2.webp",
    badge: "DIREITO DE FAMÍLIA E DIVÓRCIO",
    title: "Soluções jurídicas e proteção no Divórcio",
    subtitle: "Orientação especializada para garantir os seus direitos na partilha de bens, pensão alimentícia e guarda."
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
        >
          <Image
            src={slide.image}
            alt={`Banner Advocacia Fonseca ${index + 1}`}
            fill
            priority={index === 0}
            quality={100}
            unoptimized
            style={{ objectFit: "cover" }}
            className={styles.slideImage}
          />
          <div className={styles.overlay}></div>
          <div className={styles.slideContentWrapper}>
            <div className={pageStyles.heroContent}>
              <div className={pageStyles.badge}>
                {slide.badge}
              </div>
              <h1 className={pageStyles.heroTitle}>
                {slide.title}
              </h1>
              <p className={pageStyles.heroSubtitle}>
                {slide.subtitle}
              </p>
              <div className={pageStyles.heroActions}>
                <a 
                  href="https://wa.me/5565999467272?text=Olá! Vim pelo site e gostaria de agendar uma reunião com a Fonseca Advocacia." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={pageStyles.primaryButton}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.574-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.051 0C5.495 0 .16 5.333.158 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.005c6.556 0 11.89-5.333 11.893-11.893a11.812 11.812 0 00-3.48-8.413z" fill="currentColor" />
                  </svg>
                  AGENDAR UMA REUNIÃO
                </a>
                <a 
                  href="https://wa.me/5565999954884?text=Olá! Gostaria de saber mais sobre as áreas de atuação da Fonseca Advocacia." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={pageStyles.secondaryButton}
                >
                  CONHECER NOSSAS ÁREAS
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para o banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
