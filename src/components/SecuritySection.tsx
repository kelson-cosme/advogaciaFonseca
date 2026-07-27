import Image from 'next/image';
import styles from './SecuritySection.module.css';

export default function SecuritySection() {
  return (
    <section id="diferenciais" className={styles.securitySection}>
      <div className={styles.container}>
        {/* Left Text */}
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            Segurança jurídica para proteger <br />
            <span className={styles.highlight}>seu patrimônio, sua família e o seu futuro.</span>
          </h2>
        </div>

        {/* Image - will be relative on mobile to sit in the middle */}
        <div className={styles.absoluteImageContainer}>
          <Image 
            src="/assets/justica_new.webp" 
            alt="Dama da Justiça" 
            width={360} 
            height={540} 
            className={styles.justicaImage}
          />
        </div>

        {/* Right Text */}
        <div className={styles.rightContent}>
          <p className={styles.description}>
            Na Fonseca Advocacia, cada caso é conduzido com estratégia e responsabilidade, buscando soluções jurídicas que ofereçam segurança, tranquilidade e respaldo para cada decisão.
          </p>
        </div>

      </div>
    </section>
  );
}
