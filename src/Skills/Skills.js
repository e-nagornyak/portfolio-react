import React from 'react'
import styles from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/Title/Title";


function Skills() {
    return (
        <div className={styles.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill
                        img={'https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png'}
                        title={'JS'}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!"}/>
                    <Skill
                        img={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/80px-CSS3_logo.svg.png'}
                        title={'CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                    <Skill
                        img={"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"}
                        title={'HTML'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                    <Skill
                        img={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'}
                        title={'REACT'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, possimus!'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
