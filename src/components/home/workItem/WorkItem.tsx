import React from 'react'
import styles from './WorkItem.module.css'
import globalStyles from './../../../Global.module.css'

export const WorkItem = () => {
  return (
    <div className={ styles.itemContainer }>
        <div className={ styles.itemIconContainer }>
            <i className={ 'fa-solid fa-laptop' }></i>
        </div>
        <p className={ globalStyles.subtitle }>
            Subtitle
        </p>
        <p className={ globalStyles.description }>
            Una muy larga descripción de un proyecto que yo hice para probar
        </p>
    </div>
  )
}
