import styles from "./Title.module.css";

function Title({title}) {
    return <div className={styles.title}>
        <h2>{title}</h2>
    </div>
}

export default Title