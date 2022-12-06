import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footer}`}>
                <h4 className={styles.name}>Evhen Nahorniak</h4>
                <div className={styles.icons}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <h4 className={styles.rights}>© 2022 all rights reserved</h4>
            </div>
        </div>
    );
}

export default Footer;
