import React, { useContext, useEffect, useState } from 'react'
import styles from './LoginPage.module.css'
import globalStyles from '../../Global.module.css'
import Animations from '../../Animations.module.css'
import { Input } from '../../components/shared/Input/Input'
import { Button } from '../../components/shared/button/Button'
import { User } from '../../interfaces/api';
import { useForm } from '../../hooks/useForm'
import { handleSubmitEvent } from '../../interfaces/form'
import axios from 'axios'
import { FadeInMessage } from '../../components/shared/fadeInMessage/FadeInMessage'
import { redirect, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

interface LoginDataState {
  data: User | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export const LoginPage = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { signIn } = useContext( AuthContext );

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<LoginDataState>({
    data: null,
    errorMessage: null,
    isLoading: false
  })

  const { user_name, password, handleChange } = useForm({
    user_name: '',
    password: ''
  })

  const handleLogin = (e: handleSubmitEvent) => {
    setLoginData({ ...loginData, isLoading: true });
    e.preventDefault();
    axios.post<User>(
        `${baseUrl}/api/usuarios/login`,
        JSON.stringify({
          user_name: user_name,
          password: password
        }), {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => {
          setLoginData({
            data: response.data,
            errorMessage: 'Login successfull!',
            isLoading: false
          })
          signIn( response.data.token );
          setTimeout(() => {
            navigate('/');
          }, 1500);
        })
        .catch(error => {
          console.log("Ocurrió un error al hacer login")
          console.error(error)
          if( error && error.data ) {
            setLoginData({
              data: null,
              errorMessage: error.data.msg,
              isLoading: false
            })
            return;
          }
          setLoginData({
            data: null,
            errorMessage: 'There was a problem!',
            isLoading: false
          })
        })
  }

  useEffect(() => {
    if( loginData.data == null ) return;
    localStorage.setItem(
      'token',
      loginData.data.token
    )
  }, [loginData])
  

  return (
    <div className={ styles.container }>
      <form
        className={ styles.formContainer }
        onSubmit={(e) => handleLogin(e)}
      >
        <p className={ globalStyles.subtitle }>
          Login
        </p>
        <Input 
          onChange={ (value) => handleChange(value.target.value, 'user_name') }
          name='user_name'
          placeholder='Enter your email'
          value={ user_name }
          />
        <Input 
          onChange={ (value) => handleChange(value.target.value, 'password') }
          name='password'
          placeholder='Enter your password'
          value={ password }
          type='password'
        />
        <FadeInMessage 
          text={ loginData.errorMessage }
          indicator={ loginData.errorMessage }
        />
        <Button 
          text='Login'
          onClick={ (e) => handleLogin(e) }
          isLoadingAction={ loginData.isLoading }
        />
      </form>
    </div>
  )
}
