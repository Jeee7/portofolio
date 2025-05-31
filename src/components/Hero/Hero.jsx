/* eslint-disable no-unused-vars */
import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{`Hi, I'm Ziddan — a Frontend Developer and Mobile Developer for 2 Years+.
`}</h1>
            <p className={styles.description}>{`Currently expanding into React Native, with additional experience using Vue.js and React for web frontend development.

I'm passionate about building performant and beautiful apps — let's connect and create something impactful together!`}</p>
            <a href="mailto:arya.ziddan7@gmail.com" className={styles.contactBtn} >Contact Me</a>
        </div>
        <img src={getImageUrl("hero/foto-profil-2.jpeg")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
