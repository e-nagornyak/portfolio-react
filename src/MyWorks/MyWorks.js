import React from 'react'
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";


function MyWorks() {
    return (
        <div className={styles.myWorksBlock} id={"myWorks"}>
            <div className={`${styleContainer.container} ${styles.myWorksContainer}`}>
                <h2 className={styles.title}>My works:</h2>
                <div className={styles.project}>
                    <Project
                        img={'https://cdn-icons-png.flaticon.com/512/1680/1680410.png'}
                        title={'Lorem'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                    <Project
                        img={'https://cdn-icons-png.flaticon.com/512/1680/1680410.png'}
                        title={'Lorem'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
