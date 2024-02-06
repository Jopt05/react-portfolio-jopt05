import React, { useContext } from 'react'
import styles from './BlogsIndex.module.css'
import globalStyles from '../../Global.module.css'
import { BlogItem } from '../../components/blogs/BlogItem'
import { AuthContext } from '../../context/AuthContext'
import { ModalMessage } from '../../components/shared/modalMessage/ModalMessage'
import { Link } from 'react-router-dom'

const blogExampleList = [
  {
    name: "First blog",
    link: 'www.google.com',
    createdAt: new Date()
  },
  {
    name: "Second blog",
    link: 'www.google.com',
    createdAt: new Date()
  },
  {
    name: "Third blog",
    link: 'www.google.com',
    createdAt: new Date()
  },
]

export const BlogsIndex = () => {

  const { authState } = useContext( AuthContext );

  return (
    <div className={ styles.mainContainer }>
      <p className={ globalStyles.title }>
        ¡Welcome to my space!
      </p>
      <p className={ globalStyles.description }>
        Here I share my thoughts and experiences through different situations of my life.
      </p>
      {
        ( authState.isLoggedIn ) && (
          <div className={ styles.modalContainer }>
            <ModalMessage
              text='Hola'
            >
              <div className={ styles.modalItem }>
                <Link className={ styles.modalLink } to='/blogs/create'>
                  Crea un blog aqui
                </Link>
              </div>
            </ModalMessage> 
          </div>
        )
      }
      <div className={ styles.blogsContainer }>
        {
          blogExampleList.map( blog => (
            <BlogItem 
              createdAt={ blog.createdAt }
              link={ blog.link }
              name={ blog.name }
            />
          ) )
        }
      </div>
    </div>
  )
}
