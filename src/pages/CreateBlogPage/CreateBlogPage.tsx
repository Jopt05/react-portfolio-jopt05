import React, { useContext, useEffect, useState } from 'react'
import styles from './CreateBlogPage.module.css'
import { ModalMessage } from '../../components/shared/modalMessage/ModalMessage'
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Input } from '../../components/shared/Input/Input'
import { Button } from '../../components/shared/button/Button'
import { AuthContext } from '../../context/AuthContext'
import { BlogResponse } from '../../interfaces/api'

type Action = "post" | "put";

interface BlogInfo {
  name: string;
  blogText: string;
}

export const CreateBlogPage = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { authState } = useContext( AuthContext );

  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [action, setAction] = useState<Action>('put');
  const [blogInfo, setBlogInfo] = useState<BlogInfo>({
    name: 'Titulo',
    blogText: 'Texto de ejemplo'
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
      baseURL: `${baseUrl}/blogs/${ !id ? '' : id }`,
      method: action,
      data: JSON.stringify({
        name: blogInfo.name,
        blogText: blogInfo.blogText
      }),
      headers: {
        "Content-Type": "application/json",
        "x-token": authState.token
      }
    })
      .then( response => {
        setIsLoadingSubmit(false);
        navigate("/blogs");
      } )
      .catch( err => {
        console.log("Error al enviar")
        console.log(err)
      })
  }

  useEffect(() => {
    setIsLoading(true);
    if( !id ) {
      setAction('post');
      setIsLoading(false);
      return
    };
    axios.get<BlogResponse>(
      `${baseUrl}/blogs/${id}`
    )
      .then( response => {
        setBlogInfo({
          name: response.data.payload.blogName,
          blogText: response.data.payload.blogText
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
                  { blogInfo.name }
              </p>
          </div>
          <Markdown>
            { blogInfo.blogText }
          </Markdown>
        </div>
      </div>
      <div className={ styles.editorContainer }>
        <Input 
          name='blog_name'
          placeholder='Ingresa título de blog'
          value={ blogInfo.name }
          onChange={ (e) => handleChange( e.target.value, 'name' ) }
        />
        <textarea 
          className={ styles.editorText }
          onChange={ (e) => handleChange( e.target.value, 'blogText' ) }
          value={ blogInfo.blogText }
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
