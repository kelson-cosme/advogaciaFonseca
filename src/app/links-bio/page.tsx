import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './links-bio.module.css';
import Footer from '@/components/Footer';

export default function LinksBio() {
  return (
    <>
    <main className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/logoDourada.svg"
            alt="Advocacia Fonseca"
            width={120}
            height={60}
            className={styles.profileImage}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className={styles.linksContainer}>
        <Link href="https://advogacia-fonseca.vercel.app/" className={styles.cardLink}>
          <Image
            src="/assets/card1Link.webp"
            alt="Fundo primeiro card"
            width={1000}
            height={500}
            className={styles.cardImage}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            priority
          />
          <div className={styles.cardOverlay}>
            <div className={styles.cardOverlayLogo}>
              <Image
                src="/assets/logoDourada.svg"
                alt="Logo Fonseca Advocacia"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className={styles.cardOverlayText}>
              Escritório de advocacia<br/>
              <span className={styles.goldText}>especializada em Cuiabá,<br/>Mato Grosso</span>
            </h2>
          </div>
        </Link>

        <Link href="https://advogacia-fonseca.vercel.app/advogada/cimone" className={styles.cardLink}>
          <Image
            src="/assets/card2Link.webp"
            alt="Fundo segundo card"
            width={1000}
            height={500}
            className={styles.cardImage}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            priority
          />
          <div className={styles.cardOverlay}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}>•</span> DIREITO DE FAMÍLIA E PREVIDENCIÁRIO
            </div>
            <h2 className={styles.cardOverlayText}>
              Soluções jurídicas<br/>
              para a sua família e<br/>
              seu patrimônio.
            </h2>
          </div>
        </Link>

        <Link href="https://advogacia-fonseca.vercel.app/advogada/carla" className={styles.cardLink}>
          <Image
            src="/assets/card3Link.webp"
            alt="Fundo terceiro card"
            width={1000}
            height={500}
            className={styles.cardImage}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            priority
          />
          <div className={styles.cardOverlay}>
            <div className={styles.cardBadge}>
              <span className={styles.badgeDot}>•</span> ADVOGADA AGROFLORESTAL
            </div>
            <h2 className={styles.cardOverlayText}>
              Segurança jurídica para<br/>
              a sua propriedade.
            </h2>
          </div>
        </Link>

        <Link href="https://share.google/qMhl6TUkdfHQG7MGc" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <Image
            src="/assets/card4Link.webp"
            alt="Quarto card"
            width={1000}
            height={500}
            className={styles.cardImage}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            priority
          />
        </Link>

        <Link href="https://web.facebook.com/fonsecaadvocaciamt/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <Image
            src="/assets/card5Link.webp"
            alt="Quinto card"
            width={1000}
            height={500}
            className={styles.cardImage}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            priority
          />
        </Link>

        <Link href="https://www.instagram.com/advocaciafonseca.cf/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <Image
            src="/assets/cardLink6.webp"
            alt="Sexto card"
            width={1000}
            height={500}
            className={styles.cardImage}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            priority
          />
        </Link>
      </div>
    </main>
    <Footer />
    </>
  );
}
