import React from 'react';
import style from './Nav.module.css'

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Home page</a>
            <a href="">My skills</a>
            <a href="">Portfolio</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
    );
}

