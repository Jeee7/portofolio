import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to Reach Out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:arya.ziddan7@gmail.com">arya.ziddan7@gmail.com</a>
            </li>
            <li className={styles.link}>  
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/ziddan-aryasatya-nugraha-1a79b023a/">Ziddan Aryasatya Nugraha</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/Jeee7">Github</a>
            </li>
        </ul>
    </footer>
  )
}
