import React from 'react'
import styles from './Project.module.css';


function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.icon}>
                <img className={styles.icon_logo} src={props.img} alt=""/>
            </div>
            <div className={styles.watchLink}>
                <a href="">View</a>
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;
