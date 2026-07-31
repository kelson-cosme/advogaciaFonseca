import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedStatItem from "@/components/AnimatedStatItem";
import FadeIn from "@/components/FadeIn";
import AnimatedSteps from "@/components/AnimatedSteps";
import AnimatedAreas from "@/components/AnimatedAreas";

const lawyers = {
  carla: {
    heroBadge: "ADVOCACIA AGROFLORESTAL",
    heroTitle: "Segurança jurídica\npara a sua propriedade",
    heroSubtitle: "Especialista em Regularização Ambiental,\nFundiária e Urbana em Mato Grosso",
    heroButtonText: "Fale com a especialista!",
    marqueeItems: [
      "REGULARIZAÇÃO AMBIENTAL",
      "REGULARIZAÇÃO FUNDIÁRIA",
      "REGULARIZAÇÃO URBANA",
      "DIREITO AMBIENTAL E AGRONEGÓCIO",
      "DEFESA CONTRA EMBARGOS E MULTAS"
    ],
    image: "/assets/heroCarla.webp",
    stats: [
      { value: "+500", label: "CASOS ATENDIDOS" },
      { value: "15+", label: "ANOS DE EXPERIÊNCIA" },
      { value: "98%", label: "SATISFAÇÃO DOS CLIENTES" },
      { value: "R$50M+", label: "EM DÍVIDAS RENEGOCIADAS" }
    ],
    aboutImage: "/assets/draCarla.webp",
    aboutOverline: "CONHEÇA A SUA ADVOGADA",
    aboutTitleNormal: "Dra. Carla Rachel ",
    aboutTitleHighlight: "Fonseca",
    aboutBio: [
      "Com mais de 12 anos de atuação na advocacia, construí minha trajetória com foco na Regularização Ambiental, Fundiária e Urbana, auxiliando proprietários de imóveis rurais e urbanos na resolução de pendências ambientais, documentais e registrais.",
      "Minha atuação reúne conhecimentos em Direito Ambiental, Urbanístico, Notarial e Registral, com atenção às particularidades de cada caso e foco na segurança jurídica da propriedade."
    ],
    aboutQualifications: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        ),
        title: "Graduada em Direito pela Universidade de Cuiabá - UNIC",
        subtitle: ""
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        ),
        title: "Pós-graduação em Processo Civil e Direito Ambiental",
        subtitle: "Fundação Escola Superior do Ministério Público de Mato Grosso"
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5"/></svg>
        ),
        title: "Sócia-proprietária da Fonseca Advocacia.",
        subtitle: "Atuação em Mato Grosso e todo o Brasil"
      }
    ],
    aboutOabTop: "OAB/MT",
    aboutOabBottom: "Nº 18972",
    ctaTitle: "Regularizar hoje é proteger o\nseu patrimônio amanhã!",
    ctaSubtitle: "Estou pronta para ajudar você a resolver pendências ambientais, fundiárias e urbanas\ncom segurança jurídica e acompanhamento em todas as etapas.",
    ctaButtonText: "Falar com a Dra. Carla Fonseca",
    ctaBackground: "/assets/apertoDeMao.webp",
    problemsTitle: "Você está enfrentando\nalgumas destas situações?",
    problemsList: [
      "Recebeu uma multa ou auto de infração ambiental?",
      "Sua propriedade está com embargo ambiental?",
      "O CAR está pendente, suspenso ou com informações inconsistentes?",
      "Precisa regularizar o licenciamento ambiental da propriedade?",
      "O crédito rural foi negado por pendências ambientais/documentais?",
      "Seu imóvel rural ainda não possui matrícula regularizada?",
      "A matrícula apresenta divergência de área, limites ou titularidade?",
      "Comprou um imóvel por contrato de compra e venda, mas ele ainda não está em seu nome?",
      "Possui um imóvel urbano sem escritura ou registro?",
      "Precisa realizar usucapião, adjudicação compulsória ou retificação de matrícula?"
    ],
    problemsButtonText: "Falar com uma especialista",
    areasOverline: "ÁREAS DE ATUAÇÃO",
    areasBackground: "/assets/fundoSolucaoCarla.webp",
    areasTitleNormal1: "Soluções jurídicas para ",
    areasTitleHighlight: "proteger",
    areasTitleNormal2: " a sua propriedade",
    areasList: [
      {
        number: "01",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
        title: "Embargo Ambiental",
        description: "Atuo na análise do termo de embargo e na definição das medidas administrativas ou judiciais cabíveis para regularizar a situação da área."
      },
      {
        number: "02",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>,
        title: "Multas e Crimes Ambientais",
        description: "Presto orientação em autos de infração, multas, investigações e processos relacionados a possíveis crimes ambientais."
      },
      {
        number: "03",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
        title: "Licenciamento Ambiental e CAR",
        description: "Auxílio na regularização do Cadastro Ambiental Rural, no licenciamento de atividades e na solução de pendências ambientais da propriedade."
      },
      {
        number: "04",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
        title: "Crédito Rural",
        description: "Analiso pendências ambientais e documentais que podem dificultar a aprovação de crédito rural e outras operações financeiras."
      },
      {
        number: "05",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>,
        title: "Regularização Fundiária",
        description: "Atuo na análise de matrículas, registros, posse, limites e demais documentos necessários para a regularização jurídica de imóveis rurais."
      },
      {
        number: "06",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
        title: "Regularização Urbana",
        description: "Auxílio quem comprou um imóvel por contrato de compra e venda, mas ainda não realizou a escritura ou o registro em seu nome."
      }
    ],
    areasButtonText: "Fale com a especialista!",
    locationOverline: "PRATICIDADE",
    locationBackground: "/assets/fundoBrasilCarla_v4.webp",
    locationTitleNormal1: "Atendimento presencial em Cuiabá - MT\nou ",
    locationTitleHighlight: "online para todo o Brasil!",
    locationDescription: "A Fonseca Advocacia também realiza atendimentos online para clientes de outras cidades e estados, com reuniões por videochamada, envio de documentos e acompanhamento durante todo o processo.",
    locationButton1Text: "VER ENDEREÇO",
    locationButton2Text: "AGENDAR REUNIÃO",
    docsOverline: "FALE COM A ESPECIALISTA AGORA",
    docsTitleNormal1: "Envie os documentos pelo WhatsApp\npara uma ",
    docsTitleHighlight: "análise inicial",
    docsTitleNormal2: " do seu caso.",
    docsDescription: "Faço uma primeira avaliação da situação para identificar possíveis pendências ambientais, fundiárias ou registrais. A partir daí, definimos juntos a melhor estratégia para a regularização do imóvel.",
    docsButtonText: "Enviar para a Dra. Carla",
    docsDisclaimer: "Cada caso é analisado de forma individual.",
    stepsOverline: "ETAPAS DO ATENDIMENTO",
    stepsTitleNormal1: "Do primeiro contato à ",
    stepsTitleHighlight: "regularização",
    stepsList: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
        title: "Contato Inicial",
        description: "Agende uma reunião por WhatsApp."
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
        title: "Análise documental",
        description: "Estudo aprofundado da situação jurídica."
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
        title: "Estratégia Jurídica",
        description: "Elaboração do plano de ação personalizado com objetivos claros."
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
        title: "Execução e Resultado",
        description: "Atuação com acompanhamento constante até a solução definitiva."
      }
    ],
    stepsCtaText: "Pronto para resolver sua situação com segurança jurídica?",
    stepsButtonText: "Fale com a Dra. Carla Fonseca"
  },
  cimone: {
    heroBadge: "DIREITO DE FAMÍLIA E PREVIDENCIÁRIO",
    heroTitle: "Soluções jurídicas seguras\npara a sua família e patrimônio", 
    heroSubtitle: "Dra. Cimone Fonseca — Especialista em Direito de Família e Previdenciário\nCom foco estratégico em Inventários, Divórcios e Sucessões",
    heroButtonText: "Fale com a especialista!",
    marqueeItems: [
      "INVENTÁRIO E PARTILHA",
      "DIVÓRCIO E SEPARAÇÃO",
      "SUCESSÕES E PATRIMÔNIO",
      "PLANEJAMENTO SUCESSÓRIO",
      "DIREITO PREVIDENCIÁRIO (INSS)",
      "PENSÃO ALIMENTÍCIA E GUARDA"
    ],
    image: "/assets/heroCimone.webp",
    stats: [
      { value: "+300", label: "CASOS RESOLVIDOS" },
      { value: "8+", label: "ANOS DE EXPERIÊNCIA" },
      { value: "99%", label: "SATISFAÇÃO DOS CLIENTES" },
      { value: "+500", label: "AUXÍLIOS CONCEDIDOS" }
    ],
    aboutImage: "/assets/draCimoneSobre.webp",
    aboutOverline: "CONHEÇA A SUA ADVOGADA",
    aboutTitleNormal: "Dra. Cimone ",
    aboutTitleHighlight: "Fonseca",
    aboutBio: [
      "Com mais de 8 anos de atuação na advocacia, construí minha trajetória nas áreas de Direito Civil, Direito de Família, Inventários, Sucessões e Direito Previdenciário, acompanhando pessoas e famílias em momentos que exigem decisões importantes, cuidado e segurança jurídica.",
      "Acredito em uma advocacia próxima e acolhedora, baseada na orientação clara e no respeito à realidade de cada cliente. Por isso, conduzo cada caso com atenção, responsabilidade e acompanhamento durante todas as etapas."
    ],
    aboutQualifications: [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        ),
        title: "Graduada em Direito pela Universidade de Cuiabá - UNIC",
        subtitle: ""
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        ),
        title: "Pós-graduação em Direito Civil, Direito de Família e Direito Ambiental",
        subtitle: "Fundação Escola Superior do Ministério Público de Mato Grosso"
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5"/></svg>
        ),
        title: "Sócia-proprietária da Fonseca Advocacia.",
        subtitle: "Atuação em Mato Grosso e todo o Brasil"
      }
    ],
    aboutOabTop: "OAB/MT",
    aboutOabBottom: "Nº 25561",
    ctaTitle: "Você não precisa enfrentar\nesse momento sozinho.",
    ctaSubtitle: "Atuação estratégica em Inventários, Divórcios e Direito Previdenciário, com atendimento humanizado e acompanhamento em cada etapa.",
    ctaButtonText: "Agende uma Reunião",
    ctaBackground: "/assets/fundo12.webp",
    problemsTitle: "Você está enfrentando\nalgumas destas situações?",
    problemsBackground: "/assets/fundo10.webp",
    problemsList: [
      "Um familiar faleceu e você não sabe como iniciar o inventário?",
      "Existem conflitos entre os herdeiros ou dúvidas sobre a partilha dos bens?",
      "Seu relacionamento chegou ao fim e você precisa iniciar o divórcio?",
      "Precisa resolver questões relacionadas à guarda, pensão alimentícia ou união estável?",
      "Está enfrentando um conflito civil envolvendo contratos, cobranças ou responsabilidades?",
      "Seu benefício previdenciário foi negado pelo INSS?",
      "Precisa solicitar BPC/LOAS, auxílio por incapacidade ou outro benefício?",
      "Deseja se aposentar, mas não sabe se já preenche os requisitos necessários?",
      "Seu voo foi cancelado, sofreu um atraso excessivo ou houve overbooking?",
      "Precisa de orientação jurídica antes de tomar uma decisão importante?"
    ],
    problemsButtonText: "Quero orientação jurídica",
    areasOverline: "ÁREAS DE ATUAÇÃO",
    areasBackground: "/assets/fundo11.webp",
    areasTitleNormal1: "Soluções jurídicas para ",
    areasTitleHighlight: "proteger",
    areasTitleNormal2: " seus direitos e sua família",
    areasList: [
      {
        number: "01",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2M18 14h-8M15 18h-5"/></svg>,
        title: "Inventário e Sucessões",
        description: "Atuação em inventários judiciais e extrajudiciais, partilha de bens e regularização da transmissão do patrimônio aos herdeiros."
      },
      {
        number: "02",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>,
        title: "Divórcio",
        description: "Orientação em divórcios consensuais e litigiosos, com atenção à partilha de bens, guarda, convivência e pensão alimentícia."
      },
      {
        number: "03",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>,
        title: "Direito de Família",
        description: "Atuação em união estável, guarda, alimentos, regulamentação de convivência e demais questões relacionadas às relações familiares."
      },
      {
        number: "04",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
        title: "Direito Previdenciário",
        description: "Assessoria em aposentadorias, benefícios por incapacidade, pensão por morte, revisões e pedidos negados pelo INSS."
      },
      {
        number: "05",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>,
        title: "BPC/LOAS",
        description: "Orientação para solicitação do benefício assistencial destinado a idosos e pessoas com deficiência que preencham os requisitos legais."
      },
      {
        number: "06",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18M6 8l-3 4 3 4M18 8l3 4-3 4"/></svg>,
        title: "Direito Civil e Aéreo",
        description: "Atuação em questões civis, contratos e responsabilidades, além de casos de atraso ou cancelamento de voo e overbooking."
      }
    ],
    areasButtonText: "Fale com a especialista!",
    locationOverline: "PRATICIDADE",
    locationBackground: "/assets/fundoBrasilCarla_v4.webp",
    locationTitleNormal1: "Atendimento presencial em Cuiabá - MT\nou ",
    locationTitleHighlight: "online para todo o Brasil!",
    locationDescription: "A Fonseca Advocacia também realiza atendimentos online para clientes de outras cidades e estados, com reuniões por videochamada, envio de documentos e acompanhamento durante todo o processo.",
    locationButton1Text: "VER ENDEREÇO",
    locationButton2Text: "AGENDAR REUNIÃO",
    docsOverline: "FALE COM A ESPECIALISTA AGORA",
    docsBackgroundLeft: "/assets/fundo14.webp",
    docsBackgroundRight: "/assets/fundo13.webp",
    docsTitleNormal1: "Envie os documentos pelo WhatsApp\npara uma ",
    docsTitleHighlight: "análise inicial",
    docsTitleNormal2: " do seu caso.",
    docsDescription: "Faço uma avaliação inicial do seu caso para identificar a melhor solução jurídica em inventário, divórcio ou previdência. Definimos juntos os próximos passos com clareza.",
    docsButtonText: "Enviar para a Dra. Cimone",
    docsDisclaimer: "Cada caso é analisado de forma individual.",
    stepsOverline: "ETAPAS DO ATENDIMENTO",
    stepsTitleNormal1: "Do primeiro contato à ",
    stepsTitleHighlight: "resolução",
    stepsList: [
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
        title: "Contato Inicial",
        description: "Agende uma reunião inicial por WhatsApp."
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
        title: "Análise documental",
        description: "Estudo detalhado dos documentos da família e patrimônio."
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
        title: "Estratégia Jurídica",
        description: "Definição do plano de ação (extrajudicial ou judicial) sob medida."
      },
      {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
        title: "Execução e Resultado",
        description: "Condução segura e transparente com suporte em todas as fases."
      }
    ],
    stepsCtaText: "Pronto para resolver sua situação com segurança jurídica?",
    stepsButtonText: "Fale com a Dra. Cimone Fonseca"
  }
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LawyerPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const lawyer = lawyers[slug as keyof typeof lawyers];

  if (!lawyer) {
    notFound();
  }

  return (
    <main className={`${styles.container} ${styles[`theme_${slug}`]}`}>
      
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src={lawyer.image} 
            alt={lawyer.heroTitle} 
            fill
            priority
            quality={90}
            unoptimized={true}
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }} 
          />
        </div>

        <div className={styles.heroContent}>
          {lawyer.heroBadge && (
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeText}>{lawyer.heroBadge}</span>
            </div>
          )}
          
          {lawyer.heroTitle && (
            <h1 className={`${styles.heroTitle} ${styles.darkGreenGradientText}`}>
              {lawyer.heroTitle.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
          )}

          {lawyer.heroSubtitle && (
            <p className={styles.heroSubtitle}>
              {lawyer.heroSubtitle.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
          )}

          {lawyer.heroButtonText && (
            <Link href="#contato" className={styles.heroButton}>
              <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              {lawyer.heroButtonText}
            </Link>
          )}
        </div>

        {lawyer.marqueeItems && (
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.marqueeItem}>
                  {lawyer.marqueeItems.map((item: string, j: number) => (
                    <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '2rem', paddingRight: '2rem' }}>
                      <span>{item}</span>
                      <Image src="/assets/icon.svg" alt="Ícone Fonseca" width={32} height={32} className={styles.marqueeIcon} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      

      {lawyer.aboutTitleNormal && (
        <section className={styles.aboutSection} id="sobre-advogada">
          <div className={styles.aboutBackgroundWrapper}>
            <Image
              src="/assets/folhagem.webp"
              alt="Fundo Folhagem"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.aboutContainer}>
            
            {/* Lado Esquerdo - Foto com Moldura */}
            <div className={styles.aboutImageCol}>
              <FadeIn direction="right" duration={1}>
                <div className={styles.aboutImageWrapper}>
                  <div className={styles.aboutImageInner}>
                    {lawyer.aboutImage && (
                      <Image 
                        src={lawyer.aboutImage}
                        alt={lawyer.aboutTitleNormal}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Lado Direito - Conteúdo */}
            <div className={styles.aboutContentCol}>
              <FadeIn direction="left" delay={0.2} duration={1}>
                <span className={styles.aboutOverline}>{lawyer.aboutOverline}</span>
                
                <h2 className={styles.aboutTitle}>
                  {lawyer.aboutTitleNormal} 
                  <span className={styles.aboutTitleHighlight}>{lawyer.aboutTitleHighlight}</span>
                  <span className={styles.aboutOabInline}> — {lawyer.aboutOabTop} {lawyer.aboutOabBottom}</span>
                </h2>

                <div className={styles.aboutBio}>
                  {lawyer.aboutBio?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {lawyer.aboutQualifications && (
                  <div className={styles.qualificationsList}>
                    {lawyer.aboutQualifications.map((qual, index) => (
                      <div key={index} className={styles.qualificationItem}>
                        <div className={styles.qualificationIcon}>
                          {qual.icon}
                        </div>
                        <div className={styles.qualificationText}>
                          <span className={styles.qualificationTitle}>{qual.title}</span>
                          {qual.subtitle && (
                            <span className={styles.qualificationSubtitle}>{qual.subtitle}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link href="#contato" className={styles.outlineButton}>
                  ENTRE EM CONTATO
                </Link>
              </FadeIn>
            </div>
            
          </div>
        </section>
      )}

      {lawyer.ctaTitle && (
        <section className={styles.ctaSection}>
          {lawyer.ctaBackground && (
            <div className={styles.ctaBackgroundWrapper}>
              <Image 
                src={lawyer.ctaBackground}
                alt="Background"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.ctaOverlay}></div>
            </div>
          )}
          
          <div className={styles.ctaContainer}>
            <FadeIn direction="up">
              <h2 className={styles.ctaTitle}>
                {lawyer.ctaTitle.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h2>
              
              <hr className={styles.ctaDivider} />
              
              <p className={styles.ctaSubtitle}>
                {lawyer.ctaSubtitle.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
              
              <Link href="#contato" className={styles.ctaButton}>
                <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                {lawyer.ctaButtonText}
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {lawyer.problemsTitle && (
        <section className={styles.problemsSection}>
          <div className={styles.problemsBackgroundWrapper}>
            <Image
              src={(lawyer as any).problemsBackground || "/assets/fundo8.webp"}
              alt="Fundo Problemas"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.problemsOverlay}></div>
          </div>
          <div className={styles.problemsContainer}>
            <FadeIn direction="up">
              <h2 className={styles.problemsTitle}>
                {lawyer.problemsTitle.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h2>
            </FadeIn>

            <div className={styles.problemsGrid}>
              {lawyer.problemsList?.map((problem, index) => (
                <FadeIn key={index} direction="up" delay={index * 0.1}>
                  <div className={styles.problemItem}>
                    <svg className={styles.problemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p className={styles.problemText}>{problem}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.2}>
              <Link href="#contato" className={styles.problemsButton}>
                <svg className={styles.problemsButtonIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                {lawyer.problemsButtonText}
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {lawyer.stats && (
        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            {lawyer.stats.map((stat, index) => (
              <AnimatedStatItem
                key={index}
                stat={stat}
                index={index}
                itemClassName={styles.statItem}
                valueClassName={styles.statValue}
                labelClassName={styles.statLabel}
              />
            ))}
          </div>
        </section>
      )}

      {lawyer.areasList && (
        <AnimatedAreas lawyer={lawyer} />
      )}

      {lawyer.locationTitleNormal1 && (
        <section className={`${styles.locationSection} ${(lawyer as any).locationBackground ? styles.hasBackground : ''}`}>
          {(lawyer as any).locationBackground && (
            <div className={styles.locationBackgroundWrapper}>
              <img 
                src={(lawyer as any).locationBackground}
                alt="Background"
                className={styles.locationBackgroundImage}
              />
            </div>
          )}
          <div className={styles.locationContainer}>
            <FadeIn direction="up">
              <span className={styles.locationOverline}>{lawyer.locationOverline}</span>
              <h2 className={styles.locationTitle}>
                <span className={styles.locationTitleTop}>{lawyer.locationTitleNormal1.split('\n')[0]}</span>
                {lawyer.locationTitleNormal1.split('\n')[1] && (
                  <span className={styles.locationTitleMiddle}>{lawyer.locationTitleNormal1.split('\n')[1].trim()}</span>
                )}
                <span className={styles.locationTitleHighlight}>{lawyer.locationTitleHighlight}</span>
              </h2>
              <p className={styles.locationDescription}>{lawyer.locationDescription}</p>
              
              <div className={styles.locationButtons}>
                <Link href="#endereco" className={styles.locationBtnOutline}>
                  {lawyer.locationButton1Text}
                </Link>
                <Link href="#contato" className={styles.locationBtnSolid}>
                  {lawyer.locationButton2Text}
                  <span className={styles.locationBtnArrow}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {lawyer.stepsList && (
        <AnimatedSteps lawyer={lawyer} />
      )}

      {lawyer.docsTitleNormal1 && (
        <section className={styles.docsSection}>
          <div className={styles.docsBackgroundLeft}>
            <Image
              src={(lawyer as any).docsBackgroundLeft || "/assets/fundo9.webp"}
              alt="Detalhe Esquerdo"
              fill
              className={styles.docsBgImageLeft}
              quality={90}
              unoptimized={true}
            />
          </div>
          <div className={styles.docsBackgroundRight}>
            <Image
              src={(lawyer as any).docsBackgroundRight || "/assets/ctaWhatsapp_v2.webp"}
              alt="Detalhe Whatsapp"
              fill
              className={styles.docsBgImageRight}
              quality={90}
            />
          </div>
          <div className={styles.docsContainer}>
            <FadeIn direction="up">
              <span className={styles.docsOverline}>{lawyer.docsOverline}</span>
              <h2 className={styles.docsTitle}>
                {lawyer.docsTitleNormal1.split('\n').map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
                <span className={styles.docsTitleHighlight}>{lawyer.docsTitleHighlight}</span>
                {lawyer.docsTitleNormal2}
              </h2>
              <p className={styles.docsDescription}>{lawyer.docsDescription}</p>
              
              <Link href="#contato" className={styles.docsButton}>
                <svg className={styles.docsButtonIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.764.457 3.42 1.258 4.887l-1.39 4.382 4.545-1.332A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.405 14.16c-.227.64-1.312 1.205-1.802 1.284-.44.07-.98.15-2.915-.653-2.337-.966-3.842-3.35-3.93-3.468-.088-.117-.938-1.25-.938-2.385s.59-1.696.8-1.922c.197-.216.428-.27.57-.27.142 0 .285 0 .408.006.126.006.295-.047.46.353.175.422.595 1.455.648 1.56.053.106.088.23.018.37-.07.14-.105.228-.21.345-.106.117-.223.252-.316.345-.105.105-.216.222-.094.433.123.21.547.904 1.176 1.465.81.724 1.492.946 1.703 1.05.21.106.333.088.456-.052.123-.14.526-.607.666-.818.14-.21.28-.175.474-.105.193.07 1.228.58 1.44.685.21.105.35.158.4.246.053.088.053.51-.174 1.15z"/>
                </svg>
                {lawyer.docsButtonText}
              </Link>
              
              <p className={styles.docsDisclaimer}>{lawyer.docsDisclaimer}</p>
            </FadeIn>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
