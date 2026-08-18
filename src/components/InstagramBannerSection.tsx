import React from 'react';
import Image from 'next/image';
import styles from './InstagramBannerSection.module.css';

type Props = {
  leftBackgroundImage?: string;
};

import FadeIn from './FadeIn';

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
        <FadeIn direction="right" className={styles.content}>
          <div className={styles.subtitle}>Nosso Instagram</div>
          <h2 className={styles.title}>
            Acompanhe os conteúdos jurídicos produzidos pela nossa equipe.
          </h2>
          <a href="https://www.instagram.com/advocaciafonseca.cf/" target="_blank" rel="noopener noreferrer" className={styles.followButton}>
            Siga nosso perfil
          </a>
        </FadeIn>

        <div className={styles.imageContainer}>
          <FadeIn direction="up" delay={0.2} width="100%" className={styles.imageFadeIn}>
            <Image
              src="/assets/instagram.webp"
              alt="Instagram Advocacia Fonseca"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              quality={100}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default InstagramBannerSection;
