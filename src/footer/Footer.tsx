import React from 'react';
import style from "./Footer.module.css";

type footerPropsType = {}

export function Footer(props: footerPropsType) {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <footer>
                    <div className={style.footerForm}>
                        <li className={style.inst}>ins</li>
                        <li className={style.link}>link</li>
                        <li className={style.git}>git</li>
                    </div>
                    <p>© 2021 All Rights Reserved</p>
                </footer>
            </div>
        </div>
    );
}

