import React, { useContext } from 'react'
import styles from './WorkItem.module.css'
import globalStyles from './../../../Global.module.css'
import Animations from './../../../Animations.module.css'
import { Button } from '../../shared/button/Button'
import { ProjectTecnology } from '../../../interfaces/api'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios'

interface WorkItemProps {
  project_description: string;
  project_name: string;
  project_technologies: ProjectTecnology[];
  project_topic: number;
  project_url: string;
  _id: string;
}

export const WorkItem = ({ project_description, project_name, project_technologies, project_topic, project_url, _id }: WorkItemProps) => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { authState: { isLoggedIn } } = useContext( AuthContext );

  const handleDelete = async(e: any, proyectId: string) => {
    const deleteResponse = await axios.delete(`${baseUrl}/api/proyectos/${proyectId}`);
    console.log({deleteResponse});
  }

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
    <div className={`${styles.itemContainer} ${ Animations.bounceIn }`}>
        {
          ( isLoggedIn ) && (
            <button
              className={ styles.buttonContainer }
              onClick={ (e) => handleDelete(e, _id) }
            >
              <i className='bx bx-trash-alt'></i>
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
