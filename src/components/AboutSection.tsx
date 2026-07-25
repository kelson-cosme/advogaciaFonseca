import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>NOSSO TIME</span>
        <h2 className={styles.title}>Especialistas prontas para te defender</h2>
      </div>

      <div className={styles.grid}>
        {/* Profile 1 */}
        <div className={styles.profileCard}>
          <div className={styles.imageWrapper}>
            {/* The background color acts as a placeholder until the image is provided */}
            <div style={{ width: '100%', height: '100%', backgroundColor: '#2a221f' }} />
            {/* 
              Uncomment and update src when ready:
              <Image 
                src="/assets/advogada1.webp" 
                alt="Dra. Nome da Advogada" 
                fill 
                style={{ objectFit: 'cover' }} 
              /> 
            */}
          </div>
          <h3 className={styles.name}>Dra. Nome da Advogada</h3>
          <span className={styles.oab}>OAB/MT 000.000</span>
          <p className={styles.bio}>
            Especialista com vasta experiência em demandas complexas. 
            Atua com foco estratégico para garantir segurança jurídica e 
            os melhores resultados para seus clientes. Dedicação, ética e 
            resultados são os pilares de sua atuação diária.
          </p>
        </div>

        {/* Profile 2 */}
        <div className={styles.profileCard}>
          <div className={styles.imageWrapper}>
             <div style={{ width: '100%', height: '100%', backgroundColor: '#2a221f' }} />
            {/* 
              Uncomment and update src when ready:
              <Image 
                src="/assets/advogada2.webp" 
                alt="Dra. Nome da Advogada" 
                fill 
                style={{ objectFit: 'cover' }} 
              /> 
            */}
          </div>
          <h3 className={styles.name}>Dra. Nome da Advogada</h3>
          <span className={styles.oab}>OAB/MT 000.000</span>
          <p className={styles.bio}>
            Profissional dedicada à excelência no atendimento e na construção de 
            soluções inovadoras para conflitos. Com sólida formação e foco 
            no atendimento humanizado, prioriza a proteção do patrimônio e dos 
            direitos de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
