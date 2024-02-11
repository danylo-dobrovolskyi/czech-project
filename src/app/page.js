import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import About from "../components/About/About";
import Expertise from "../components/Expertise/Expertise";
import Values from "../components/Values/Values";
import Questions from "@/components/Questions/Questions";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Expertise />
      <Values />
      <Questions />
      <Contacts />
    </main>
  );
}
