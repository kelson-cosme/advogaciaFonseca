import React from 'react';
import Image from 'next/image';
import styles from './InstagramBannerSection.module.css';

type Props = {
  leftBackgroundImage?: string;
};

const InstagramBannerSection = ({ leftBackgroundImage = "/assets/fundoEsquerda.webp" }: Props = {}) => {
  return (
    <section className={styles.section}>
      <div className={styles.lightBackground}>
        <Image 
          src={leftBackgroundImage} 
          alt="Fundo da seção esquerdo" 
          fill 
          style={{ objectFit: 'contain', objectPosition: 'left' }} 
        />
        <Image 
          src="/assets/fundoDireita.webp" 
          alt="Fundo da seção direito" 
          fill 
          style={{ objectFit: 'contain', objectPosition: 'right' }} 
        />
        <Image 
          src="/assets/luz.webp" 
          alt="Efeito de luz de fundo" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.4 }} 
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.subtitle}>Nosso Instagram</div>
          <h2 className={styles.title}>
            Acompanhe os conteúdos jurídicos produzidos pela nossa equipe.
          </h2>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.followButton}>
            Siga nosso perfil
          </a>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/instagram.webp"
            alt="Instagram Advocacia Fonseca"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramBannerSection;
