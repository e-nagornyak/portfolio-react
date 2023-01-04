import React from 'react'
import styles from './Project.module.css';


function Project({img, title, description}) {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <img className={styles.image_logo} src={img} alt=""/>
                <a className={styles.viewBtn}>View</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </div>

        </div>
    );
}

export default Project;
