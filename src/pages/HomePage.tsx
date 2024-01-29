import React from 'react'
import { Header } from '../components/home/header/Header'
import { Hero } from '../components/home/hero/Hero'
import { Divider } from '../components/home/divider/Divider'

export const HomePage = () => {
  return (
    <>
        <Header />
        <Hero />
        <Divider title='Services' />
    </>
  )
}
