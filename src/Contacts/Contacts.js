import React from 'react'
import styles from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={styles.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts:</h2>
                <form action={''} className={styles.form}>
                    <fieldset className={styles.fieldsetWrapper}>
                        <input placeholder={'Enter your first name'} type="text" id='first-input' required/>
                        <input placeholder={"Enter your email"} type="text" id='second-input' required/>
                        <textarea placeholder='Write your message :)'></textarea>
                    </fieldset>
                    <button type="submit" className={styles.send}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
