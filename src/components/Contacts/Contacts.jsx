import React from 'react';
import styles from './style.module.scss';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function Contacts() {
  return (
    <>
      <div id="contacts" className={styles.contacts}>
        <h2 className={styles.title}>Contact us:</h2>
        <div className={styles.buttons}>
          <button className={styles.button}>Email@example.com</button>
          <button className={styles.button}>+1234567890</button>
        </div>
        <div className={styles.icons}>
          <FaTelegramPlane className={styles.icon} />
          <FaWhatsapp className={styles.icon} />
        </div>
      </div>
    </>
  )
}