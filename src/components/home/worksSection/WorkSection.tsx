import React from 'react'
import styles from './WorkSection.module.css'
import { WorkItem } from '../workItem/WorkItem'

export const WorkSection = () => {
  return (
    <div className={ styles.WorksectionContainer }>
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
    </div>
  )
}
