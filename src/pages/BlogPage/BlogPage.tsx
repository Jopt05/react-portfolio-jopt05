import React, { useEffect, useState } from 'react'
import styles from './BlogPage.module.css'
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Loader } from '../../components/shared/Loader/Loader';
import { BlogResponse } from '../../interfaces/api';

export const BlogPage = () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    if( !baseUrl ) return;

    const { id } = useParams();

    const { data, error, loading } = useFetch<BlogResponse>({
        url: `${baseUrl}/blogs/${id}`,
        method: 'get'
    });

  const [markdown, setMarkdown] = useState('# Titulo');

  useEffect(() => {
    if ( data == null ) return;
    setMarkdown(data.payload.blogText)
  }, [data])
  

  return (
    <>
      <div className={ styles.createBlogContainer }>
        <div className={ styles.blogContainer }>
            {
                ( loading ) && (
                    <Loader />
                )
            }
            {
                ( data != null ) && (
                    <>
                        <div className={ styles.titleContainer }>
                            <p className={ styles.title }>
                                { data.payload.blogName }
                            </p>
                        </div>
                        <Markdown>
                            { markdown }
                        </Markdown>
                    </>
                )
            }
        </div>
      </div>
    </>
  )
}
