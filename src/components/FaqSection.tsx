'use client';
import React, { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    question: "O que é regularização fundiária?",
    answer: "A regularização fundiária é o processo jurídico que legaliza um imóvel que ainda não possui escritura ou registro em cartório. Ela permite que o morador ou proprietário obtenha documentação definitiva do imóvel, garantindo segurança jurídica e valorização da propriedade."
  },
  {
    question: "Quem pode pedir a regularização de um imóvel?",
    answer: "Pode solicitar a regularização quem mora ou possui um imóvel sem escritura registrada, seja em área urbana ou rural. Isso inclui casos de contrato de compra e venda, posse antiga, herança sem inventário ou ocupação consolidada ao longo do tempo."
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
    answer: "O inventário é obrigatório sempre que uma pessoa falece e deixa bens, direitos ou dívidas. Esse procedimento serve para identificar o patrimônio, pagar eventuais débitos e realizar a partilha entre os herdeiros. No Brasil, o prazo legal para iniciar o inventário é de até 60 dias após o falecimento, podendo haver multa se ultrapassar esse prazo."
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
    answer: "Sem inventário, os bens ficam legalmente bloqueados em nome da pessoa falecida. Isso impede vender, transferir ou regularizar imóveis e outros patrimônios. Além disso, podem surgir problemas jurídicos futuros, conflitos entre herdeiros e multas tributárias, especialmente relacionadas ao imposto de transmissão causa mortis (ITCMD)."
  }
];

import FadeIn from './FadeIn';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <FadeIn direction="up" className={styles.header}>
          <div className={styles.titleBackground}>DÚVIDAS</div>
          <h2 className={styles.titleForeground}>Perguntas Frequentes</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className={styles.faqList}>
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
        </FadeIn>
      </div>
    </section>
  );
};

export default FaqSection;
