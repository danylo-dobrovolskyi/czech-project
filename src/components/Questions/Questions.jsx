import React from 'react'
import styles from './style.module.scss';

export default function Questions() {
  return (
    <div id="faq" className={styles.questionsContainer}>
      <h2 className={styles.question}>Je možné vrátit ukradené peníze z mé peněženky?</h2>
      <p className={styles.answer}>Ano, vše, co musíte udělat, je poskytnout nám potřebné informace, které nám pomohou vypátrat vaše peníze.</p>
      <h2 className={styles.question}>Je možné vrátit ztracenou částku z online kasina?</h2>
      <p className={styles.answer}>Pokud je toto kasino na seznamu nelegálních online kasin, samozřejmě vám pomůžeme vrátit tyto peníze na základě poskytnutých informací.</p>
      <h2 className={styles.question}>Poté, co jsem poslal peníze na online kryptoměnovou směnárnu, byl jsem zablokován a peníze mi byly ukradeny, co dělat?</h2>
      <p className={styles.answer}>První, co musíte udělat, je shromáždit veškeré důkazy, jako jsou transakce (krypto-převody), korespondence, e-maily, telefonní čísla,
      snímky obrazovky z platformy, doménové jméno směnárny. Poté se obraťte na našeho specialistu a on vám v správném
      pořadí řekne, co musíte udělat.</p>
    </div>
  )
}
