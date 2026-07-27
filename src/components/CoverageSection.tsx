import React from 'react';
import Image from 'next/image';
import styles from './CoverageSection.module.css';

const CoverageSection = () => {
  return (
    <section className={styles.coverageSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.subtitle}>ONDE VOCÊ ESTIVER</span>
            <h2 className={styles.title}>
              Atendimento em <span className={styles.highlight}>todo o Brasil</span>
            </h2>
          </div>
          
          <p className={styles.description}>
            A distância não é uma barreira. Reuniões, audiências e assinaturas de
            contratos acontecem de forma totalmente digital, com a mesma segurança
            do presencial.
          </p>

          <ul className={styles.benefitsList}>
            <li>
              <div className={styles.iconWrapper}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Reuniões online por videoconferência
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Acompanhamento processual em tempo real
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Assinatura digital de contratos com validade jurídica
            </li>
            <li>
              <div className={styles.iconWrapper}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              Atendimento ágil via WhatsApp
            </li>
          </ul>

          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              AGENDAR UMA REUNIÃO
            </button>
            <span className={styles.locationText}>
              ou visite-nos em Cuiabá, MT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoverageSection;
