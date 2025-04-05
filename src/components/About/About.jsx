import React from 'react'
import styles from "./About.module.css";
import {getImageUrl} from "../../utils"

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with Laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frondend Developer with experience in building responsive websites and optimized sites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend Developer with experience in developing fast and optimized websites and APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Machine Learning Developer</h3>
                        <p>
                        Skilled in building ML models for tasks like image classification and plant disease detection. Completed certifications in supervised, unsupervised learning, and CNNs.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Competitive Programmer</h3>
                        <p>
                        Solved 800+ problems across various platforms. Strong grasp of DSA and OOPs with solid experience in C++ and C.
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default About
