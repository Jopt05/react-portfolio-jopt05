import React, { useContext } from 'react'
import styles from './WorkSection.module.css'
import { WorkItem } from '../workItem/WorkItem'
import useFetch from '../../../hooks/useFetch';
import { Project } from '../../../interfaces/api';
import { Loader } from '../../shared/Loader/Loader';
import { AuthContext } from '../../../context/AuthContext';
import { useProjects } from '../../../hooks/useProjects';

export const WorkSection = () => {

  const { authState } = useContext( AuthContext );

  const { isLoading, projects, deleteOrActivate } = useProjects();

  return (
    <div className={ styles.WorksectionContainer }>
        {
          ( !isLoading && projects.length > 0 && authState.isLoggedIn == false ) && 
            projects.map((project, index) => project.projectState != false && (
            <WorkItem
              project_description={ project.projectDescription }
              _id={ project.id.toString() }
              project_name={ project.projectName }
              project_technologies={ project.projectTechnologies }
              project_topic={ project.projectTopic }
              project_url={ project.projectUrl }
              key={index}
            />
          ))
        }
        {
          ( !isLoading && projects.length > 0 && authState.isLoggedIn == true ) && 
            projects.map((project, index) => (
            <WorkItem
              project_description={ project.projectDescription }
              _id={ project.id.toString() }
              project_name={ project.projectName }
              project_technologies={ project.projectTechnologies }
              project_topic={ project.projectTopic }
              project_url={ project.projectUrl }
              key={index}
              project_state={ project.projectState }
              onDelete={ (e, projectId, projectState) =>  deleteOrActivate(e, projectId, projectState)}
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
