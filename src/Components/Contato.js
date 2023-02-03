import React from "react";
import styles from "./Contato.module.css";
import fotoContato from "../img/contato.jpg";
import Head from "../Components/Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Empresa | Contato" description="Entre em contato conosco." />
      <img src={fotoContato} alt="Máquina de escrever" />
      <div>
        <h1>Entre em Contato Conosco:</h1>
        <ul className={styles.dados}>
          <li>contato@email.com</li>
          <li>(99) 99999-9999</li>
          <li>Rua dos Bobos, nº 0</li>
          <li>Horário de Funcionamento: de segunda à sexta, das 8h às 18h.</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
