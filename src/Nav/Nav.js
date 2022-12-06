import React from 'react'
import styles from './Nav.module.css';

function Nav() {
    return (
        <div className={styles.nav}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#myWorks">MyWorks</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
}

export default Nav;
