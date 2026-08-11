"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLightMode = pathname?.includes('/advogada/carla');
  const isCarla = pathname?.includes('/advogada/carla');
  const isCimone = pathname?.includes('/advogada/cimone');
  const isLinksBio = pathname?.includes('/links-bio');

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  if (isLinksBio) return null;

  return (
    <nav className={`${styles.navbar} ${isLightMode ? styles.themeLight : styles.themeDark} ${isScrolled ? (isLightMode ? styles.scrolledLight : styles.scrolledDark) : ''} ${isMenuOpen ? styles.navbarOpen : ''}`}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image 
            src="/assets/logoDourada.svg" 
            alt="Advocacia Fonseca Logo" 
            width={200} 
            height={50}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
      
      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Open : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Open : ''}`}></div>
        <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Open : ''}`}></div>
      </div>
      
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <div className={styles.mobileMenuLogo}>
          <Image 
            src="/assets/logoDourada.svg" 
            alt="Advocacia Fonseca Logo" 
            width={220} 
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </div>
        {isCarla && (
          <>
            <a href="#sobre-advogada" className={styles.navLink} onClick={toggleMenu}>Sobre Mim</a>
            <a href="#areas" className={styles.navLink} onClick={toggleMenu}>Áreas de Atuação</a>
            <a href="#situacoes" className={styles.navLink} onClick={toggleMenu}>Sua Situação</a>
            <a href="#etapas" className={styles.navLink} onClick={toggleMenu}>Como Funciona</a>
          </>
        )}
        {isCimone && (
          <>
            <a href="#sobre-advogada" className={styles.navLink} onClick={toggleMenu}>Sobre Mim</a>
            <a href="#areas" className={styles.navLink} onClick={toggleMenu}>Áreas de Atuação</a>
            <a href="#situacoes" className={styles.navLink} onClick={toggleMenu}>Sua Situação</a>
            <a href="#etapas" className={styles.navLink} onClick={toggleMenu}>Como Funciona</a>
          </>
        )}
        {!isCarla && !isCimone && (
          <>
            <a href="#sobre" className={styles.navLink} onClick={toggleMenu}>Especialistas</a>
            <a href="#areas" className={styles.navLink} onClick={toggleMenu}>Áreas de Atuação</a>
            <a href="#sua-situacao" className={styles.navLink} onClick={toggleMenu}>Sua Situação</a>
            <a href="#diferenciais" className={styles.navLink} onClick={toggleMenu}>Diferenciais</a>
          </>
        )}
        <a href="#contato" className={styles.whatsappButton} onClick={toggleMenu}>
          <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          ENTRE EM CONTATO
        </a>
      </div>
    </nav>
  );
}
