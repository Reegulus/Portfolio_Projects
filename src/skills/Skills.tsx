import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill/>
                </div>
            </div>
        </div>
    );
}

