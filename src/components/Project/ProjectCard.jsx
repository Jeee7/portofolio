// eslint-disable-next-line no-unused-vars
import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'
import PropTypes from 'prop-types';

export const ProjectCard = ({
    project: { title, imageSrc, description, skills }
    }) => {
        return (
            <div className={styles.container}>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                <div className={styles.textContainer}>

                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                </div>
              
              
                <ul className={styles.skills}>
                    {(skills || []).map((skill, id) => (
                        <li key={id} className={styles.skill}>{skill}</li>
                    ))}
                </ul>
         
        </div>
    )
}


ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        description: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

