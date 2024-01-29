import React from 'react'
import { Header } from '../components/home/header/Header'
import { Hero } from '../components/home/hero/Hero'
import { Divider } from '../components/home/divider/Divider'
import { ServicesSection } from '../components/home/servicesSection/ServicesSection'
import { WorkSection } from '../components/home/worksSection/WorkSection'

export const HomePage = () => {
  return (
    <>
        <Header />
        <Hero />
        <Divider title='Services' />
        <ServicesSection />
        <Divider title='Work' />
        <WorkSection />
    </>
  )
}
