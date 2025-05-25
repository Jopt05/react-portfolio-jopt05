import React, { useContext } from 'react'
import styles from './WorkSection.module.css'
import { WorkItem } from '../workItem/WorkItem'
import useFetch from '../../../hooks/useFetch';
import { Project } from '../../../interfaces/api';
import { Loader } from '../../shared/Loader/Loader';
import { AuthContext } from '../../../context/AuthContext';
import { useProjects } from '../../../hooks/useProjects';
import { PROJECTS } from '../../../assets/constants/projects';

export const WorkSection = () => {

  return (
    <div className={ styles.WorksectionContainer }>
        {
          PROJECTS.payload.map((project, index) => project.projectState != false && (
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
    </div>
  )
}
