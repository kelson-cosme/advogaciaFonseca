"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.navbarOpen : ''}`}>
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
        <a href="#sobre" className={styles.navLink} onClick={toggleMenu}>Sobre Nós</a>
        <a href="#areas" className={styles.navLink} onClick={toggleMenu}>Áreas de Atuação</a>
        <a href="#diferenciais" className={styles.navLink} onClick={toggleMenu}>Diferenciais</a>
        <a href="#contato" className={styles.contactButton} onClick={toggleMenu}>Fale Conosco</a>
      </div>
    </nav>
  );
}
