import React from 'react'
import styles from './Project.module.scss';


function Project({title, description, style}) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={style}>
                <a href={''} className={styles.viewBtn}>View</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </div>

        </div>
    );
}

export default Project;
