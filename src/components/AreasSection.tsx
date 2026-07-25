import styles from './AreasSection.module.css';
import AreaCard, { AreaData } from './AreaCard';

const areasData: AreaData[] = [
  {
    id: 'rurais',
    category: 'IMÓVEIS RURAIS E MEIO AMBIENTE',
    title: 'Regularização Ambiental e Fundiária',
    description: 'Assessoria para regularização de imóveis rurais, CAR, embargos, autos de infração, passivos ambientais e questões fundiárias.',
    tags: ['Cadastro Ambiental Rural CAR', 'Embargos e autos de infração', 'Regularização fundiária rural', 'Passivos e licenciamento ambiental'],
    imageSrc: '/assets/fundoAmbiental.webp',
    iconSrc: '/assets/ambiental.svg'
  },
  {
    id: 'urbanos',
    category: 'IMÓVEIS URBANOS',
    title: 'Regularização Urbana e Imobiliária',
    description: 'Soluções para imóveis com pendências documentais, registrais ou relacionadas à posse e propriedade.',
    tags: ['Imóvel sem escritura', 'Usucapião', 'Retificação de matrícula', 'Adjudicação compulsória'],
    imageSrc: '/assets/fundoUrbano.webp',
    iconSrc: '/assets/urbana.svg'
  },
  {
    id: 'familia',
    category: 'FAMÍLIA E PATRIMÔNIO',
    title: 'Direito de Família',
    description: 'Orientação jurídica para relações familiares, partilha de bens e proteção patrimonial.',
    tags: ['Divórcio', 'União estável', 'Guarda e alimentos', 'Partilha de bens'],
    imageSrc: '/assets/familiaPatrimonio.webp',
    iconSrc: '/assets/patrimonio.svg'
  },
  {
    id: 'heranca',
    category: 'HERANÇA E PATRIMÔNIO',
    title: 'Inventário e Sucessões',
    description: 'Assessoria para organizar a transmissão de bens e conduzir decisões sucessórias com segurança.',
    tags: ['Inventário judicial', 'Inventário em cartório', 'Planejamento sucessório', 'Regularização de bens herdados'],
    imageSrc: '/assets/heranca.webp',
    iconSrc: '/assets/heranca.svg'
  },
  {
    id: 'inss',
    category: 'DIREITOS PERANTE O INSS',
    title: 'Direito Previdenciário',
    description: 'Análise e orientação em benefícios previdenciários, negativas do INSS e planejamento para aposentadoria.',
    tags: ['Benefício negado', 'Aposentadorias', 'BPC/LOAS', 'Pensão por morte'],
    imageSrc: '/assets/area-inss.webp',
    iconSrc: '/assets/inss.svg'
  },
  {
    id: 'aereo',
    category: 'DIREITOS DO PASSAGEIRO',
    title: 'Direito Aéreo',
    description: 'Atuação em problemas com companhias aéreas e prejuízos relacionados a viagens.',
    tags: ['Voo cancelado', 'Atraso excessivo', 'Extravio de bagagem', 'Overbooking'],
    imageSrc: '/assets/aereo.webp',
    iconSrc: '/assets/passageiro.svg'
  }
];

export default function AreasSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>COMO PODEMOS TE AJUDAR?</span>
        <h2 className={styles.title}>Conheça nossas áreas de atuação</h2>
      </div>

      <div className={styles.grid}>
        {areasData.map((area) => (
          <AreaCard key={area.id} data={area} />
        ))}
      </div>

      <div className={styles.ctaContainer}>
        {/* User will add WhatsApp link later */}
        <a href="#" className={styles.ctaButton}>
          <svg className={styles.whatsappIcon} viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          SOLICITAR ANÁLISE DO EMBARGO
        </a>
      </div>
    </section>
  );
}
