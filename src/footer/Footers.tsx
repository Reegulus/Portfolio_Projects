import React from 'react';
import style from "./Footers.module.css";
import {Footer} from "./footer/Footer";

type footerPropsType = {}

export function Footers(props: footerPropsType) {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <footer>
                    <div className={style.footerForm}>
                        <Footer/>
                        <Footer/>
                        <Footer/>
                    </div>
                </footer>
                <span>© 2021 All Rights Reserved</span>
            </div>
        </div>
    );
}

