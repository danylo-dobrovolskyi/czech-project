"use client"

import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss';

export default function About() {
  return (
    <div id="about-us" className={styles.block}>
      <h1 className={styles.header}>
        Kdo jsme? <br /> Proč je rozumné obrátit se právě na nás?
      </h1>
      <p className={styles.paragraph}>Kvalifikovaní odborníci právního oddělení společnosti &quot;Blockchain&quot; se profesionálně zabývají řešením právních otázek,
      všechny krypto operace probíhají v blockchainovém systému. Máme pravomoc sledovat je a vrátit peníze
      lidem, kteří se stали обěтьми podvodníků.</p>
      <br/>
      <p className={styles.paragraph}>Také náš oddělení se skládá з odborníků v oboru, a з nezávisлých expertů, kteří mají zkušenosti v oblasti technologií blockchain.
      Mohou být zapojени до vývoje standardů, zajištění безpečности a transparentности в області blockchainových systémů, a také до formulování
      legislativy týkající se využívání těchто technologií.</p>
      <br/>
      <Image
        className={styles.image}
        src="/images/image1.jpeg"
        alt="Description"
        width={600}
        height={300}
      />
    </div>
  )
}
