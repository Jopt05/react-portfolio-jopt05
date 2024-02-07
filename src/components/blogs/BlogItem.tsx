import React, { useContext } from 'react'
import styles from './BlogItem.module.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface BlogItemProps {
    name: string;
    link: string;
    createdAt: Date;
    id: string;
}

export const BlogItem = ({ name, link, createdAt, id }: BlogItemProps) => {

  const { authState } = useContext( AuthContext );

  return (
    <div className={ styles.blogItemContainer }>
      <div className={ styles.blogItemInfoContainer }>
        <Link to={link} className={ styles.blogItemTitle }>
          { name }
        </Link>
        <p className={ styles.blogItemDate }>
            { createdAt.toLocaleDateString() }
        </p>
      </div>
      {
        ( authState.isLoggedIn ) && (
          <div className={ styles.blogIconContainer }>
            <Link to={`/blogs/${id}/edit`}>
              <i className='bx bx-pencil'></i>
            </Link>
          </div>
        )
      }
    </div>
  )
}
