import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach me out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
                <a href="mailto:kollayaswanth555@gmail.com">kollayaswanth555@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
                <a href="https://www.linkedin.com/in/yaswanth-kolla-48a66b274/" target="_blank">linkedin.com/KollaYaswanth</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
                <a href="https://github.com/Yaswanthkolla555" target="_blank">Github.com/KollaYaswanth</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
