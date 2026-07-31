import Image from "next/image";
import styles from "./page.module.css";
import heroBgImg from '../../public/assets/hero2.webp';
import ProblemSection from "@/components/ProblemSection";
import SecuritySection from "@/components/SecuritySection";
import AreasSection from "@/components/AreasSection";
import AboutSection from "@/components/AboutSection";
import WhatsappCta from "@/components/WhatsappCta";
import InstagramSection from "@/components/InstagramSection";
import InstagramBannerSection from "@/components/InstagramBannerSection";
import CoverageSection from "@/components/CoverageSection";
import AgroCtaSection from "@/components/AgroCtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        {/* Background Image */}
        <div className={styles.heroBackground}>
          <Image
            src={heroBgImg}
            alt="Fundo Advocacia Fonseca"
            fill
            priority
            quality={100}
            unoptimized
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>

          <div className={styles.badge}>
            Atendimento presencial e online em todo o Brasil.
          </div>

          <h1 className={styles.heroTitle}>
            Escritório de advocacia especializada em Cuiabá, Mato Grosso
          </h1>

          <p className={styles.heroSubtitle}>
            Segurança jurídica para Direito Ambiental, Imobiliário, Família, Inventários e Previdenciário.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.574-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.051 0C5.495 0 .16 5.333.158 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.005c6.556 0 11.89-5.333 11.893-11.893a11.812 11.812 0 00-3.48-8.413z" fill="currentColor" />
              </svg>
              AGENDAR UMA REUNIÃO
            </button>
            <button className={styles.secondaryButton}>CONHECER NOSSAS ÁREAS</button>
          </div>

          {/* <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <span className={styles.featureText}>HISTÓRICO<br />DE EXCELÊNCIA</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="3" x2="12" y2="21"></line>
                  <path d="M3 9l9-6 9 6"></path>
                  <path d="M3 21h18"></path>
                </svg>
              </div>
              <span className={styles.featureText}>SOLUÇÕES<br />SOB MEDIDA</span>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <span className={styles.featureText}>PARCERIA<br />TRANSPARENTE</span>
            </div>
          </div> */}

        </div>
        {/* Marquee / Ticker Section */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {/* We repeat the content a few times to create the infinite scroll effect */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.marqueeItem}>
                <span>FONSECA ADVOCACIA</span>
                <Image src="/assets/icon.svg" alt="Ícone Fonseca" width={32} height={32} className={styles.marqueeIcon} />
                <span>ASSESSORIA E CONSULTORIA JURÍDICA EM MATO GROSSO E EM TODO O BRASIL</span>
                <Image src="/assets/icon.svg" alt="Ícone Fonseca" width={32} height={32} className={styles.marqueeIcon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProblemSection />
      <SecuritySection />
      <AreasSection />
      <WhatsappCta />
      <AboutSection />
      <InstagramBannerSection />
      {/* <InstagramSection /> */}
      <CoverageSection />
      <AgroCtaSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />

    </main>
  );
}
