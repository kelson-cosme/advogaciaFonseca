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
              <p>(65) 99995-4884</p>
              <p>carla@fonsecaadvogados.com.br</p>
              <a href="https://www.instagram.com/advocaciafonseca.cf/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@advocaciafonseca.cf</span>
              </a>
            </div>

            <h4 className={styles.columnTitle}>HORÁRIO DE ATENDIMENTO</h4>
            <div className={styles.hoursInfo}>
              <div className={styles.hourRow}>
                <span>Segunda à sexta</span>
                <span>8:00 - 18:00</span>
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
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} Fonseca Advocacia. Todos os direitos reservados. Política de Privacidade - Termos de Uso
          </p>
          <p className={styles.disclaimerText}>
            Desenvolvido por <a href="https://vivoxmarketing.com.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Vivox Web</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
