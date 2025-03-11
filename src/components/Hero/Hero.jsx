/* eslint-disable no-unused-vars */
import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{`Hi, I'm Ziddan`}</h1>
            <p className={styles.description}>{`I'm a Frontend Developer with 2 years of experience in Vue.js, React, and Flutter. Let's connect and build something awesome together!`}</p>
            <a href="mailto:arya.ziddan7@gmail.com" className={styles.contactBtn} >Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
