import Image from 'next/image';
import styles from './SecuritySection.module.css';

export default function SecuritySection() {
  return (
    <section className={styles.securitySection}>
      {/* Absolute Image placed directly inside relative section */}
      <div className={styles.absoluteImageContainer}>
        <Image 
          src="/assets/justica.webp" 
          alt="Dama da Justiça" 
          width={400} 
          height={600} 
          className={styles.justicaImage}
        />
      </div>

      <div className={styles.container}>
        
        {/* Left Text */}
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            Segurança jurídica para proteger <span className={styles.highlight}>seu <br />
            patrimônio, sua família e o seu futuro.</span>
          </h2>
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
