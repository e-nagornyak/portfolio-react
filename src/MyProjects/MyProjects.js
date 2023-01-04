import React from 'react'
import styles from './MyProjects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";
import todoImage from "../assets/image/todolist.jpg";
import socialImage from "../assets/image/socialNetwork.png";

function MyProjects() {
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }



    return (
        <div className={styles.myProjectsBlock} id={"myWorks"}>
            <div className={`${styleContainer.container} ${styles.myProjectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={styles.project}>
                    <Project
                        style={socialNetwork}
                        title={'Social network'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                    <Project
                        style={todolist}
                        title={'Todolist'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, iusto?"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
