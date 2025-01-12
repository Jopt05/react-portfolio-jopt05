import React, { useContext } from 'react'
import styles from './BlogsIndex.module.css'
import globalStyles from '../../Global.module.css'
import { BlogItem } from '../../components/blogs/BlogItem'
import { AuthContext } from '../../context/AuthContext'
import { ModalMessage } from '../../components/shared/modalMessage/ModalMessage'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Loader } from '../../components/shared/Loader/Loader'
import { BlogsResponse } from '../../interfaces/api'

export const BlogsIndex = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { authState } = useContext( AuthContext );

  const { data, error, loading } = useFetch<BlogsResponse>({
    url: `${baseUrl}/blogs`,
    method: 'get'
  });

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
          (loading) && <Loader />
        }
        {
          ( data != null ) && data.payload.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() ).map( blog => (
            <BlogItem 
              createdAt={ new Date(blog.createdAt) }
              link={ `/blogs/${blog.id}/read` }
              name={ blog.blogName }
              id={ blog.id.toString() }
            />
          ) )
        }
      </div>
    </div>
  )
}
