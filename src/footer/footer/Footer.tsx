import React from 'react';
import style from "./Footer.module.css";

type footerPropsType = {}

export function Footer(props: footerPropsType) {
    return (
        <div className={style.footerForm}>
            <li className={style.footerSocial}></li>
        </div>
    );
}

