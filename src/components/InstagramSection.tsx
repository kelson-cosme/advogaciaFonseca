import React from 'react';
import Image from 'next/image';
import styles from './InstagramSection.module.css';

const InstagramSection = () => {
  // Mock data for Instagram posts. Replace these with actual post URLs or data later.
  const posts = [
    {
      id: 1,
      image: '/assets/post1.webp',
      link: '#',
      date: 'Post Recente',
      title: 'Você planejou a drenagem pensando em melhorar a produtividade da propriedade. Mas já parou para pensar se essa intervenção pode exigir autorização ambiental'
    },
    {
      id: 2,
      image: '/assets/post2.webp',
      link: '#',
      date: 'Post Recente',
      title: 'Quando um casamento chega ao fim, a preocupação não deveria ser apenas “quem fica com o imóvel'
    },
    {
      id: 3,
      image: '/assets/post3.webp',
      link: '#',
      date: 'Post Recente',
      title: '🚨 ATENÇÃO, PRODUTOR RURAL! A legislação ambiental mudou.'
    }
  ];

  return (
    <section className={styles.instagramSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtitle}>Nosso Instagram</div>
          <h2 className={styles.title}>
            Acompanhe os conteúdos jurídicos produzidos pela nossa equipe.
          </h2>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <div className={styles.overlay}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.date}>{post.date}</span>
                <p className={styles.postTitle}>{post.title}</p>
                <span className={styles.readMore}>Ver no Instagram ➔</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.actionContainer}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.followButton}>
            Siga nosso perfil @advocaciafonseca
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
