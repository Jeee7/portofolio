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
                    <img src={getImageUrl("about/uiIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Mobile Developer</h3>
                        <p>1 year of experience in mobile development with Flutter. Contributed to 5+ projects such as a Mobile Banking, Loyalty Point App, E-wallet app ,Parent Monitoring System.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="server" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Web Developer</h3>
                        <p>2 years of experience building interactive web applications using Vue and React. Worked on 5+ projects like a POS System, Salon Booking System, and a Loyalty App.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend & DevOps Enthusiast</h3>
                        <p>Currently exploring backend development with Go and Python while learning DevOps to understand deployment and infrastructure with Go, Python and Docker </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
