import React from 'react';
import style from './MyProjects.module.css'
import {MyProject} from "./project/MyProject";

export function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>

                <div className={style.title}>
                    <h2 >My Projects</h2>
                </div>
                <div className={style.projects}>
                    <MyProject
                        icon={'https://lwbalance.com/wp-content/uploads/2018/06/Teamwork-collaboration-2000x1200.jpg'}
                        title={"Social NetWork"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n" + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <MyProject
                        icon={'https://www.hubspot.com/hubfs/free-project-management-tools.jpeg'}
                        title={"TodoList"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n" + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>

                </div>
            </div>
        </div>
    )
}
