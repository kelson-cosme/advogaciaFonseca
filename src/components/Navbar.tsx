"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
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
      
      <div className={styles.navLinks}>
        <Link href="#sobre" className={styles.navLink}>Sobre Nós</Link>
        <Link href="#areas" className={styles.navLink}>Áreas de Atuação</Link>
        <Link href="#diferenciais" className={styles.navLink}>Diferenciais</Link>
        <button className={styles.contactButton}>Fale Conosco</button>
      </div>
    </nav>
  );
}
