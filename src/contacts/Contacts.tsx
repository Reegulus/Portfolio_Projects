import React from 'react';
import style from "./Contacts.module.css";

type ContactsPropsType = {

}
export function Contacts(props: ContactsPropsType) {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.containerForm}>
                    <form className={style.formBody} action="#">
                        <input className={style.formInputName} type="text" name={"name"}/>
                        <input className={style.formInputEmail} type="text" name={"email"}/>
                        <textarea className={style.formMessage} name="message"></textarea>
                    </form>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

