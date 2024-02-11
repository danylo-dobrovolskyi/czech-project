import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image'; // Імпортуйте Image з next/image, якщо ви хочете використати оптимізовані зображення

export default function Expertise() {
  return (
    <div id="expertise" className={styles.expertiseContainer}>
      <div className={styles.expertiseItem}>
        <Image
          src="/images/proffesional.png"
          alt="Icon 1"
          width={50}
          height={50}
        />
        <h3 className={styles.title}>Profesionalita:</h3>
        <p className={styles.paragraph}>Poskytujeme kvalitní poradenství a pomoc, řídíme se vlastní praxí v případech podvodných zločinů a již do 24 hodin vstupujeme do hry s podvodníky, kteří nelegálními činy požadovali od našich klientů peníze.</p>
      </div>
      <div className={styles.expertiseItem}>
        <Image
          src="/images/effective.png"
          alt="Icon 2"
          width={50}
          height={50}
        />
        <h3 className={styles.title}>Zkušenosti:</h3>
        <p className={styles.paragraph}>Máme profesionální a zkušený tým, který má za sebou 1649 případů, z nichž bylo úspěšně uzavřeno 1615. Také náš tým se skládá z IT oddělení, právníků a jejich asistentů.</p>
      </div>
      <div className={styles.expertiseItem}>
        <Image
          src="/images/dosvid.png"
          alt="Icon 3"
          width={50}
          height={50}
        />
        <h3 className={styles.title}>Efektivita:</h3>
        <p className={styles.paragraph}>Snažíme se kvalitně a rychle sledovat transakce, které probíhaly mezi našimi klienty a podvodníky, prověřit nelegální činy podvodníků a co nejrychleji vrátit našim klientům jejich peníze, v mnoha případech naši klienti dostávají i kompenzace.</p>
      </div>
    </div>
  )
}
