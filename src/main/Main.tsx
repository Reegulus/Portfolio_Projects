import React from 'react';
import style from './Main.module.css'

export function Main() {
    return (
        <div className={style.mainBlock}>

            <div className={style.container}>
                <div className={style.greetings}>
<span>Hi There</span>
                    <h1>I am Egor Romanenko</h1>
                    <p>A Front-end Developer.</p>
                </div>
                <div className={style.avaPhoto}>
                </div>
            </div>
        </div>
    );
}

