import React from 'react';
import Image from 'next/image';
import styles from './WhatsappCta.module.css';

const WhatsappCta = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.backgroundLeft}>
        <Image
          src="/assets/justica2.webp"
          alt="Estátua da Justiça"
          fill
          style={{ objectFit: 'cover', objectPosition: 'left center' }}
          quality={90}
        />
        <div className={styles.overlayLeft}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Não deixe problemas jurídicos<br />
            comprometerem seu patrimônio.
          </h2>
          <p className={styles.subtitle}>
            Solicite agora uma análise personalizada e tenha a tranquilidade que sua<br />
            propriedade merece.
          </p>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.574-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.051 0C5.495 0 .16 5.333.158 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.005c6.556 0 11.89-5.333 11.893-11.893a11.812 11.812 0 00-3.48-8.413z" />
            </svg>
            Falar com uma especialista
          </a>
        </div>
      </div>

      <div className={styles.imageRight}>
        <Image
          src="/assets/irmas.webp"
          alt="Especialistas Advocacia"
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
          quality={90}
        />
      </div>
    </section>
  );
};

export default WhatsappCta;
