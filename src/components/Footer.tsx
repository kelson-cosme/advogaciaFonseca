import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo & Address */}
          <div className={styles.column}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/assets/logoDourada.svg" 
                alt="Fonseca Advocacia" 
                width={200} 
                height={60} 
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className={styles.addressText}>
              Fonseca Advocacia<br />
              Rua 13 de Junho, 1150 - Centro<br />
              Cuiabá - MT, 78020-170
            </p>
          </div>

          {/* Contact & Hours */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>CONTATO</h4>
            <div className={styles.contactInfo}>
              <p>(65) 3000-0000</p>
              <p>WhatsApp: (65) 99999-9999</p>
              <p>@fonseca.advocacia</p>
            </div>

            <h4 className={styles.columnTitle}>HORÁRIO DE ATENDIMENTO</h4>
            <div className={styles.hoursInfo}>
              <div className={styles.hourRow}>
                <span>Segunda a sexta</span>
                <span>08:00 às 18:00</span>
              </div>
              <div className={styles.hourRow}>
                <span>Sábado</span>
                <span>Fechado</span>
              </div>
              <div className={styles.hourRow}>
                <span>Domingo</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>LOCALIZAÇÃO</h4>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=Rua%2013%20de%20Junho,%201150%20-%20Centro,%20Cuiab%C3%A1%20-%20MT&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href="https://maps.app.goo.gl/FUXGwWz1uWbBdeTG6" target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>Como chegar</a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.disclaimerText}>
            OAB-MT 0000 - Responsável técnico: Nome do Advogado
          </p>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} Fonseca Advocacia. Todos os direitos reservados. Política de Privacidade - Termos de Uso
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
