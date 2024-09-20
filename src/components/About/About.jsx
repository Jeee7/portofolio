import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="About-Image" className={styles.aboutImg} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Nanti ini gw isi pengalaman front end apa aja, kek vue, react</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend atau Devops Developer</h3>
                        <p>Nanti ini gw isi pengalaman backend atau devops apa aja nanti aja cuman</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>bingung Developer</h3>
                        <p>Nanti aja kalo ini mah</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
