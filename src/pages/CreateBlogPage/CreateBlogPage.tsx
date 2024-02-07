import React, { useContext, useEffect, useState } from 'react'
import styles from './CreateBlogPage.module.css'
import { ModalMessage } from '../../components/shared/modalMessage/ModalMessage'
import Markdown from 'react-markdown'
import { redirect, useParams } from 'react-router-dom'
import axios from 'axios'
import { GetBlog } from '../../interfaces/api'
import { Input } from '../../components/shared/Input/Input'
import { Button } from '../../components/shared/button/Button'
import { AuthContext } from '../../context/AuthContext'

type Action = "post" | "put";

interface BlogInfo {
  blog_name: string;
  blog_text: string;
}

export const CreateBlogPage = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { authState } = useContext( AuthContext );

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [action, setAction] = useState<Action>('put');
  const [blogInfo, setBlogInfo] = useState<BlogInfo>({
    blog_name: 'Titulo',
    blog_text: 'Texto de ejemplo'
  });

  const handleChange = (value: string, blogAttr: keyof BlogInfo) => {
    setBlogInfo({
      ...blogInfo,
      [blogAttr]: value
    })
  }

  const handleSubmit = async() => {
    setIsLoadingSubmit(true);
    const response = await axios({
      baseURL: `${baseUrl}/api/blogs/${ !id ? '' : id }`,
      method: action,
      data: JSON.stringify({
        blog_name: blogInfo.blog_name,
        blog_text: blogInfo.blog_text
      }),
      headers: {
        "Content-Type": "application/json",
        "x-token": authState.token
      }
    })
      .then( response => {
        setIsLoadingSubmit(false);
      } )
      .catch( err => {
        console.log("Error al enviar")
        console.log(err)
      })
    return redirect("/blogs")
  }

  useEffect(() => {
    setIsLoading(true);
    if( !id ) {
      setAction('post');
      setIsLoading(false);
      return
    };
    axios.get<GetBlog>(
      `${baseUrl}/api/blogs/${id}`
    )
      .then( response => {
        setBlogInfo({
          blog_name: response.data.blog.blog_name,
          blog_text: response.data.blog.blog_text
        })
        setIsLoading(false);
      })
      .catch( err => console.log(err) )
  }, [id])

  return (
    <>
      <div className={ styles.createBlogContainer }>
        <ModalMessage
          text={ `Estás ${ action == 'post' ? 'creando' : 'editando' } un blog` }
        />
        <div className={ styles.blogContainer }>
          <div className={ styles.titleContainer }>
              <p className={ styles.title }>
                  { blogInfo.blog_name }
              </p>
          </div>
          <Markdown>
            { blogInfo.blog_text }
          </Markdown>
        </div>
      </div>
      <div className={ styles.editorContainer }>
        <Input 
          name='blog_name'
          placeholder='Ingresa título de blog'
          value={ blogInfo.blog_name }
          onChange={ (e) => handleChange( e.target.value, 'blog_name' ) }
        />
        <textarea 
          className={ styles.editorText }
          onChange={ (e) => handleChange( e.target.value, 'blog_text' ) }
          value={ blogInfo.blog_text }
        />
        <div className={ styles.buttonsContainer }>
          <Button 
            text='Guardar'
            onClick={ handleSubmit }
            isLoadingAction={ isLoadingSubmit }
          />
        </div>
      </div>
    </>
  )
}
