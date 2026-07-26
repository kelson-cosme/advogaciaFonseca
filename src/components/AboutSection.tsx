import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} id="equipe">
      <div className={styles.lightBackground}>
        <Image 
          src="/assets/luz.webp" 
          alt="Efeito de luz de fundo" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>

      <div className={styles.header}>
        <span className={styles.subtitle}>NOSSO TIME</span>
        <h2 className={styles.title}>Especialistas prontas para te defender</h2>
      </div>

      <div className={styles.grid}>
        {/* Profile 1 */}
        <div className={styles.profileCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/cimone.webp" 
              alt="Dra. Cimone" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.name}>Dra. Cimone</h3>
            <span className={styles.oab}>OAB/MT 000.000</span>
            <p className={styles.bio}>
              Especialista com vasta experiência em demandas complexas. 
              Atua com foco estratégico para garantir segurança jurídica e 
              os melhores resultados para seus clientes. Dedicação, ética e 
              resultados são os pilares de sua atuação diária.
            </p>
            <a href="#" className={styles.seeMoreButton}>Ver mais</a>
          </div>
        </div>

        {/* Profile 2 */}
        <div className={styles.profileCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/carla.webp" 
              alt="Dra. Carla" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.name}>Dra. Carla</h3>
            <span className={styles.oab}>OAB/MT 000.000</span>
            <p className={styles.bio}>
              Profissional dedicada à excelência no atendimento e na construção de 
              soluções inovadoras para conflitos. Com sólida formação e foco 
              no atendimento humanizado, prioriza a proteção do patrimônio e dos 
              direitos de cada cliente.
            </p>
            <a href="#" className={styles.seeMoreButton}>Ver mais</a>
          </div>
        </div>
      </div>

      <div className={styles.leafLeft}>
        <Image 
          src="/assets/folha2.webp" 
          alt="Decoração de Folha Esquerda" 
          width={400} 
          height={600} 
          className={styles.leafImage}
        />
      </div>

      <div className={styles.leafTopRight}>
        <Image 
          src="/assets/folha3.webp" 
          alt="Decoração de Folha Topo" 
          width={400} 
          height={600} 
          className={styles.leafImage}
        />
      </div>

      <div className={styles.leafRight}>
        <Image 
          src="/assets/folha1.webp" 
          alt="Decoração de Folha Direita" 
          width={400} 
          height={600} 
          className={styles.leafImage}
        />
      </div>
    </section>
  );
}
