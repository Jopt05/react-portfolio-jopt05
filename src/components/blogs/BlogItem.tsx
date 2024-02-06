import React from 'react'
import styles from './BlogItem.module.css'

interface BlogItemProps {
    name: string;
    link: string;
    createdAt: Date;
}

export const BlogItem = ({ name, link, createdAt }: BlogItemProps) => {
  return (
    <div className={ styles.blogItemContainer }>
        <a href={ link } className={ styles.blogItemTitle }>
            { name }
        </a>
        <p className={ styles.blogItemDate }>
            { createdAt.toLocaleDateString() }
        </p>
    </div>
  )
}
