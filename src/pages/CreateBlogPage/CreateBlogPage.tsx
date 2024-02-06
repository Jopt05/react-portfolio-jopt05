import React, { useState } from 'react'
import styles from './CreateBlogPage.module.css'
import globalStyles from '../../Global.module.css'
import { ModalMessage } from '../../components/shared/modalMessage/ModalMessage'
import Markdown from 'react-markdown'

export const CreateBlogPage = () => {

  const [markdown, setMarkdown] = useState('# Titulo!');

  return (
    <>
      <div className={ styles.createBlogContainer }>
        <ModalMessage
          text='Estás creando un blog'
        />
        <div className={ styles.blogContainer }>
          <Markdown>
            { markdown }
          </Markdown>
        </div>
      </div>
      <div className={ styles.editorContainer }>
        <textarea 
          className={ styles.editorText }
          onChange={(e) => setMarkdown( e.target.value )}
          value={markdown}
        />
      </div>
    </>
  )
}
