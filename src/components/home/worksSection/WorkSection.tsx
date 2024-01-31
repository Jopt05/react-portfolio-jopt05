import React from 'react'
import styles from './WorkSection.module.css'
import { WorkItem } from '../workItem/WorkItem'
import useFetch from '../../../hooks/useFetch';
import { Projects } from '../../../interfaces/api';
import { Loader } from '../../shared/Loader/Loader';

export const WorkSection = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { data, error, loading } = useFetch<Projects>({
    url: `${baseUrl}/api/proyectos/`,
    method: 'get'
  });

  return (
    <div className={ styles.WorksectionContainer }>
      {
          ( !loading && data != null ) && 
            data.projects.map((project, index) => project.project_state != false && (
              <WorkItem
                project_description={ project.project_description }
                project_name={ project.project_name }
                project_technologies={ project.project_tecnologies }
                project_topic={ project.project_topic }
                project_url={ project.project_url }
                key={index}
              />
            ))
        }
        {
          ( loading ) && (
            <Loader />
          )
        }
    </div>
  )
}
