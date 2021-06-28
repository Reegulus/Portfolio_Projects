import React from 'react';
import style from './MyProjects.module.css'
import {MyProject} from "./work/MyProject";

export function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <MyProject
                        icon={'https://www.hubspot.com/hubfs/free-project-management-tools.jpeg'}
                        title={"Social NetWork"}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci consequuntur cumque illum minus natus necessitatibus nulla possimus temporibus?'}/>
                    <MyProject
                    icon={'https://www.hubspot.com/hubfs/free-project-management-tools.jpeg'}
                    title={"TodoList"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci consequuntur cumque illum minus natus necessitatibus nulla possimus temporibus?'}/>
                    <MyProject
                    icon={'https://www.hubspot.com/hubfs/free-project-management-tools.jpeg'}
                    title={"Counter"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci consequuntur cumque illum minus natus necessitatibus nulla possimus temporibus?'}/>
                    <MyProject
                    icon={'https://www.hubspot.com/hubfs/free-project-management-tools.jpeg'}
                    title={"Counter"}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci consequuntur cumque illum minus natus necessitatibus nulla possimus temporibus?'}/>
                </div>
            </div>
        </div>
    );
}

