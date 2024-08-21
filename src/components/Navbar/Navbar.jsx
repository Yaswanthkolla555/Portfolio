import React,{useState} from 'react'
import styles from "./Navbar.module.css";

import { getImageUrl } from '../../utils';
const Navbar = () => {

    const [menuOpen,setMenuOpen]=useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img src={menuOpen?getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")} alt="menu-button" className={styles.menuBtn} 
                onClick={()=>setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setMenuOpen(false)}>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
