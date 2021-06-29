import React from 'react';
import style from './MyProject.module.css'


type WorkPropsType = {
    title: string
    icon: string
    description: string
}
export function MyProject(props: WorkPropsType) {
    return (
        <div className={style.workBlock}>
            <div className={style.imgContainer}>
                <a className={style.projectLink} href="#">Take a look</a>
                <img src={props.icon} alt="#"/>
            </div>
                <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>

        </div>
    );
}

