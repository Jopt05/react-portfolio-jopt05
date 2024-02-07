import React from 'react'
import styles from './BlogItem.module.css'
import { Link } from 'react-router-dom';

interface BlogItemProps {
    name: string;
    link: string;
    createdAt: Date;
}

export const BlogItem = ({ name, link, createdAt }: BlogItemProps) => {
  return (
    <div className={ styles.blogItemContainer }>
        <Link to={link} className={ styles.blogItemTitle }>
          { name }
        </Link>
        <p className={ styles.blogItemDate }>
            { createdAt.toLocaleDateString() }
        </p>
    </div>
  )
}
