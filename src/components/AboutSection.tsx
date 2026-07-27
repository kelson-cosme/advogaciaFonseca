import Image from 'next/image';
import styles from './AboutSection.module.css';
import cimoneImg from '../../public/assets/cimone.webp';
import carlaImg from '../../public/assets/carla.webp';

export default function AboutSection() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.lightBackground}>
        <Image 
          src="/assets/luz.webp" 
          alt="Efeito de luz de fundo" 
          fill 
          style={{ objectFit: 'cover' }} 
        />
      </div>

      <div className={styles.header}>
        <span className={styles.subtitle}>Nossa Equipe</span>
        <h2 className={styles.title}>Especialistas com formação sólida e experiência para a sua segurança jurídica.</h2>
      </div>

      <div className={styles.grid}>
        {/* Profile 1 */}
        <div className={styles.profileCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src={cimoneImg} 
              alt="Dra. Cimone" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.name}>Dra. Cimone Fonseca</h3>
            <span className={styles.infoText}>+10 anos de experiência</span>
            <span className={styles.infoText}>Especialista em Inventário</span>
            <span className={styles.oab}>OAB/MT 25561</span>
            <p className={styles.bio}>
              Atuação estratégica em inventários e questões patrimoniais, com segurança jurídica, sensibilidade e conhecimento nas áreas cível, familiar e ambiental.
            </p>
            <a href="#" className={styles.seeMoreButton}>CONHEÇA A ESPECIALISTA</a>
          </div>
        </div>

        {/* Profile 2 */}
        <div className={styles.profileCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src={carlaImg} 
              alt="Dra. Carla" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          <div className={styles.cardContent}>
            <span className={styles.oab}>OAB/MT nº 18972</span>
            <h3 className={styles.name}>Dra. Carla Fonseca</h3>
            <span className={styles.infoText}>+12 anos de experiência</span>
            <span className={styles.infoText}>Especialista em regularização Urbana, Fundiária e Ambiental</span>
            <p className={styles.bio}>
              Atuação estratégica na regularização urbana, fundiária e ambiental, com segurança jurídica para proteger imóveis, propriedades e patrimônios.
            </p>
            <a href="#" className={styles.seeMoreButton}>CONHEÇA A ESPECIALISTA</a>
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
