import Image from "next/image";
import styles from "./page.module.css";
import HeroCarousel from "@/components/v2/HeroCarousel";

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
        {/* Background Carousel */}
        <HeroCarousel />


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
      <AreasSection hideFaces={true} />
      <WhatsappCta hideImageRight={true} />
      <AboutSection />
      <InstagramBannerSection leftBackgroundImage="/assets/fundoCta.webp" />
      {/* <InstagramSection /> */}
      <CoverageSection />
      <AgroCtaSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />

    </main>
  );
}
