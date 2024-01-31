import React from 'react'
import styles from './WorkItem.module.css'
import globalStyles from './../../../Global.module.css'
import { Button } from '../../shared/button/Button'
import { Project, ProjectTecnology } from '../../../interfaces/api'

interface WorkItemProps {
  project_description: string;
  project_name: string;
  project_technologies: ProjectTecnology[];
  project_topic: number;
  project_url: string;
}

export const WorkItem = ({ project_description, project_name, project_technologies, project_topic, project_url }: WorkItemProps) => {

  const getItemTopic = (topic: number) => {
    switch (topic) {
      case 0:
        return 'bx bxs-cloud-download';

      case 1:
        return 'bx bx-code-alt';

      case 2:
        return 'bx bx-desktop';
    
      default:
        break;
    }
  }

  return (
    <div className={ styles.itemContainer }>
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
