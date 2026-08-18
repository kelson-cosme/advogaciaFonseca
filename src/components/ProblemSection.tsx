import Image from 'next/image';
import styles from './ProblemSection.module.css';
import arquivosImg from '../../public/assets/arquivos.webp';

import FadeIn from './FadeIn';

export default function ProblemSection() {
  const problems = [
    <>Imóvel urbano ou rural com <strong>pendências na regularização</strong> documental.</>,
    <><strong>(CAR)</strong> com inconsistências ou necessidade de atualização.</>,
    <>Inventário que impede a transferência ou <strong>utilização do patrimônio.</strong></>,
    <><strong>Conflitos familiares</strong> envolvendo bens ou <strong>sucessão.</strong></>,
    <><strong>Benefício previdenciário negado</strong> ou em análise prolongada.</>,
    <>Necessidade de orientação jurídica: <strong>compra, venda ou regularização de um imóvel.</strong></>,
  ];

  return (
    <section className={styles.problemSection} id="sua-situacao">
      <div className={styles.rightBackgroundImageWrapper}>
        <Image 
          src={arquivosImg}
          alt="Documentos e processos"
          className={styles.documentosBgImage}
        />
      </div>

      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.header}>
            <span className={styles.subtitle}>— O PROBLEMA</span>
            <h2 className={styles.title}>
              Seu <span className={styles.highlight}>patrimônio ou direitos</span> estão passando por isso?
            </h2>
          </div>
        </FadeIn>

        <div className={styles.content}>
          <ul className={styles.problemList}>
            {problems.map((problem, index) => (
              <FadeIn key={index} direction="left" delay={index * 0.1}>
                <li className={styles.problemItem}>
                  {problem}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
