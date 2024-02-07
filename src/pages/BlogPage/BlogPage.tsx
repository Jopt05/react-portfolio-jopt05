import React, { useEffect, useState } from 'react'
import styles from './BlogPage.module.css'
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GetBlog } from '../../interfaces/api';
import { Loader } from '../../components/shared/Loader/Loader';

export const BlogPage = () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    if( !baseUrl ) return;

    const { id } = useParams();

    const { data, error, loading } = useFetch<GetBlog>({
        url: `${baseUrl}/api/blogs/${id}`,
        method: 'get'
    });

  const [markdown, setMarkdown] = useState('# Titulo');

  useEffect(() => {
    if ( data == null ) return;
    setMarkdown(data.blog.blog_text)
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
                                { data.blog.blog_name }
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
