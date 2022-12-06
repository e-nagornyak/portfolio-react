import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import styles from './RemoteWork.module.css';

function RemoteWork() {
    return (
        <div className={styles.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${styles.remoteWork}`}>
                <h2 className={styles.title}>Considering option of remote work</h2>
                <button className={styles.btn}>Hire me</button>
            </div>
        </div>
    );
}

export default RemoteWork;
