import React from 'react'
import styles from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={styles.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts:</h2>
                <form action={''} className={styles.contacts}>
                    <fieldset className={styles.fieldsetWrapper}>
                        <label htmlFor="first-input">
                            <p>Enter Your First Name:</p>
                            <input type="text" id='first-input' required/>
                        </label>
                        <label htmlFor="second-input">
                            <p>Enter Your Email:</p>
                            <input type="text" id='second-input' required/>
                        </label>
                        <label htmlFor='textarea'>
                            <textarea cols={40} rows={10} name="" id="textarea" placeholder='Write your message :)'></textarea>
                        </label>
                    </fieldset>
                </form>
                <button className={styles.send}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
