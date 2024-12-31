import React, { useContext } from 'react'
import styles from './WorkItem.module.css'
import globalStyles from './../../../Global.module.css'
import Animations from './../../../Animations.module.css'
import { Button } from '../../shared/button/Button'
import { ProjectTecnology } from '../../../interfaces/api'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios'
import { ThemeContext } from '../../../context/ThemeContext'

interface WorkItemProps {
  project_description: string;
  project_name: string;
  project_technologies: ProjectTecnology[];
  project_topic: number;
  project_url: string;
  _id: string;
  project_state?: boolean;
  onDelete?: (e: any, id: string, projectState: boolean) => void;
}

export const WorkItem = ({ project_description, project_name, project_technologies, project_topic, project_url, _id, project_state, onDelete }: WorkItemProps) => {

  const { authState: { isLoggedIn } } = useContext( AuthContext );
  const { themeState } = useContext( ThemeContext );

  const getItemTopic = (topic: number) => {
    switch (topic) {
      case 1:
        return 'bx bx-code-alt';

      case 2:
        return 'bx bx-desktop';
        
      case 3:
        return 'bx bxs-cloud-download';
    
      default:
        break;
    }
  }

  return (
    <div className={`${styles.itemContainer} ${ (project_state == false) ? styles.itemContainerDisabled : '' } ${ Animations.bounceIn } ${( themeState.isDarkMode ) ? globalStyles.darkSBackground : ''}`}>
        {
          ( isLoggedIn && project_state == true ) && (
            <button
              className={ styles.buttonContainer }
              onClick={ (e) => onDelete(e, _id, project_state) }
            >
              <i className='bx bx-trash-alt'></i>
            </button>
          )
        }
        {
          ( isLoggedIn && project_state == false ) && (
            <button
              className={ `${styles.buttonContainer} ${styles.buttonActivate}` }
              onClick={ (e) => onDelete(e, _id, project_state) }
            >
              <i className='bx bx-save'></i>
            </button>
          )
        }
        <div className={ styles.itemIconContainer }>
            <i className={ getItemTopic(project_topic) }></i>
        </div>
        <p className={ globalStyles.subtitle }>
            { project_name }
        </p>
        <p className={ globalStyles.description }>
            { project_description }
        </p>
        <p className={ styles.itemToolsText }>
          Tools:
        </p>
        <div className={ styles.itemToolsContainer }>
          {
            project_technologies.map((technology) => (<i className={ technology.tech_name }></i>))
          }
        </div>
        <Button 
          text='GO TO'
          onClick={ (e) => {
            e.preventDefault();
            window.open(project_url, '_blank');
          }}
        />
    </div>
  )
}
