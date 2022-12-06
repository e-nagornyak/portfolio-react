import React from 'react'
import Nav from "../Nav/Nav";
import styleContainer from '../common/styles/Container.module.css'
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.headerBlock}>
            <div className={`${styleContainer.container} ${styles.header}`}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
