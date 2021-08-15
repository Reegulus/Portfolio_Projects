import React from 'react';
import style from "./Contacts.module.css";

type ContactsPropsType = {

}
export function Contacts(props: ContactsPropsType) {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.title}>Contacts</h2>
                    <form className={style.contactForm} action="#">
                        <input  type="text" name={"name"}/>
                        <input  type="text" name={"email"}/>
                        <textarea name="message"></textarea>
                        <button type={'submit'} className={style.formButton}>Send Message</button>
                    </form>
                </div>
            </div>
    );
}

