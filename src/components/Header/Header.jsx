import React from 'react'
import styles from "./Header.module.css";
import {getImageUrl} from "../../utils"
const Header = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Yaswanth </h1>
            <p className={styles.description}>I'm a MERN-Stack developer. Feel free to get in touch with me if you need assistance or want to collaborate.</p>
            <a className={styles.contactBtn} href="mailto:kollayaswanth555@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/ProfileImg.jpg")} alt="Hero" />
        {/* <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero" /> */}

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
  )
}

export default Header
