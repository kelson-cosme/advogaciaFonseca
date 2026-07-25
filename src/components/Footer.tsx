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
              Edifício Empresarial XYZ, Sala 100<br />
              Rua Exemplo de Endereço, 123, Bairro Centro<br />
              Cuiabá/MT - CEP 78000-000
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.085350352721!2d-56.0957585!3d-15.5870023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1a8682f6e57%3A0xcda6b08ed8b90ed0!2sCuiab%C3%A1%2C%20MT!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a href="#" className={styles.directionsLink}>Como chegar</a>
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
