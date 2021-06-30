import React from 'react';
import style from './Nav.module.css'

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">My skills</a>
            <a href="">My Projects</a>
            <a href="">Contact</a>
        </div>
    );
}

