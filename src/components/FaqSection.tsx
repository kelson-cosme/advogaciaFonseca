'use client';
import React, { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    question: "O que é regularização fundiária?",
    answer: "A regularização fundiária é o processo que engloba medidas jurídicas, urbanísticas, ambientais e sociais destinadas à incorporação dos núcleos urbanos informais ao ordenamento territorial urbano e à titulação de seus ocupantes."
  },
  {
    question: "Quem pode pedir a regularização de um imóvel?",
    answer: "A regularização pode ser solicitada pelos proprietários, posseiros, herdeiros ou qualquer pessoa que tenha interesse legítimo no imóvel, dependendo da situação específica e da legislação local."
  },
  {
    question: "Qual a vantagem de regularizar um imóvel?",
    answer: (
      <>
        A regularização garante segurança jurídica e direito de propriedade, permitindo:
        <br />✔ registrar o imóvel no cartório
        <br />✔ vender ou financiar o imóvel
        <br />✔ transferir para herdeiros
        <br />✔ evitar disputas ou perda da propriedade
      </>
    )
  },
  {
    question: "Quando é obrigatório fazer inventário?",
    answer: "O inventário é obrigatório sempre que uma pessoa falece deixando bens, direitos ou dívidas, para que seja feita a transferência legal do patrimônio aos herdeiros."
  },
  {
    question: "Inventário precisa sempre ser feito na Justiça?",
    answer: (
      <>
        Não necessariamente. O inventário pode ser judicial ou extrajudicial (em cartório).
        <br />O inventário em cartório é possível quando:
        <br />✔ todos os herdeiros são maiores e capazes
        <br />✔ há consenso entre eles
        <br />✔ não existe testamento válido a ser cumprido
        <br />Mesmo no cartório, a presença de advogado é obrigatória.
      </>
    )
  },
  {
    question: "O que acontece se a família não fizer o inventário?",
    answer: "A ausência do inventário impede a venda legal dos bens, bloqueia contas bancárias do falecido e pode gerar multas sobre o imposto de transmissão (ITCMD), além de acumular pendências para as próximas gerações."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>FAQs</span>
          <h2 className={styles.title}>PERGUNTAS FREQUENTES</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.questionButton} 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.icon}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div 
                className={styles.answerContainer}
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className={styles.answerContent}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
