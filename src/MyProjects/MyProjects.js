import React from 'react'
import styles from './MyProjects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";


function MyProjects() {
    return (
        <div className={styles.myProjectsBlock} id={"myWorks"}>
            <div className={`${styleContainer.container} ${styles.myProjectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={styles.project}>
                    <Project
                        img={''}
                        title={'Lorem'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                    {/*https://cdn-icons-png.flaticon.com/512/1680/1680410.png*/}
                    <Project
                        img={''}
                        title={'Lorem'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
