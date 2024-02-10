import React, { useContext } from 'react'
import styles from './WorkSection.module.css'
import { WorkItem } from '../workItem/WorkItem'
import useFetch from '../../../hooks/useFetch';
import { Projects } from '../../../interfaces/api';
import { Loader } from '../../shared/Loader/Loader';
import { AuthContext } from '../../../context/AuthContext';
import { useProjects } from '../../../hooks/useProjects';

export const WorkSection = () => {

  const { authState } = useContext( AuthContext );

  const { isLoading, projects, deleteProject } = useProjects();

  return (
    <div className={ styles.WorksectionContainer }>
        {
          ( !isLoading && projects.length > 0 && authState.isLoggedIn == false ) && 
            projects.map((project, index) => project.project_state != false && (
            <WorkItem
              project_description={ project.project_description }
              _id={ project._id }
              project_name={ project.project_name }
              project_technologies={ project.project_tecnologies }
              project_topic={ project.project_topic }
              project_url={ project.project_url }
              key={index}
            />
          ))
        }
        {
          ( !isLoading && projects.length > 0 && authState.isLoggedIn == true ) && 
            projects.map((project, index) => (
            <WorkItem
              project_description={ project.project_description }
              _id={ project._id }
              project_name={ project.project_name }
              project_technologies={ project.project_tecnologies }
              project_topic={ project.project_topic }
              project_url={ project.project_url }
              key={index}
              project_state={ project.project_state }
              onDelete={ (e, projectId) =>  deleteProject(e, projectId)}
            />
          ))
        }
        {
          ( isLoading ) && (
            <Loader />
          )
        }
    </div>
  )
}
