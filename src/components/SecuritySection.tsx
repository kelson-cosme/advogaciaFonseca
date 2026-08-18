import Image from 'next/image';
import styles from './SecuritySection.module.css';

import FadeIn from './FadeIn';

export default function SecuritySection() {
  return (
    <section id="diferenciais" className={styles.securitySection}>
      <div className={styles.container}>
        {/* Left Text */}
        <FadeIn direction="right" className={styles.leftContent}>
          <h2 className={styles.title}>
            Segurança jurídica para proteger <br />
            <span className={styles.highlight}>seu patrimônio, sua família e o seu futuro.</span>
          </h2>
        </FadeIn>

        {/* Image - will be relative on mobile to sit in the middle */}
        <div className={styles.absoluteImageContainer}>
          <FadeIn direction="up">
            <Image 
              src="/assets/justica_new.webp" 
              alt="Dama da Justiça" 
              width={360} 
              height={540} 
              className={styles.justicaImage}
            />
          </FadeIn>
        </div>

        {/* Right Text */}
        <FadeIn direction="left" className={styles.rightContent}>
          <p className={styles.description}>
            Na Fonseca Advocacia, cada caso é conduzido com excelência, buscando soluções jurídicas que ofereçam segurança, tranquilidade e respaldo para cada decisão.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
