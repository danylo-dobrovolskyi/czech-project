import React from 'react'
import styles from './style.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="#about-us" className={styles.paragraph}>About us</a>
      <a href="#expertise" className={styles.paragraph}>Expertise</a>
      <a href="#values" className={styles.paragraph}>Values</a>
      <a href="#faq" className={styles.paragraph}>FAQ</a>
      <a href="#contacts" className={styles.paragraph}>Contacts</a>
    </div>
  )
}
