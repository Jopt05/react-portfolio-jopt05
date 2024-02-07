import React from 'react'
import { Header } from '../components/shared/header/Header'
import { Hero } from '../components/home/hero/Hero'
import { Divider } from '../components/home/divider/Divider'
import { ServicesSection } from '../components/home/servicesSection/ServicesSection'
import { WorkSection } from '../components/home/worksSection/WorkSection'
import { ContactSection } from '../components/home/contactSection/ContactSection'

export const HomePage = () => {
  return (
    <>
        <Hero />
        <Divider title='Services' />
        <ServicesSection />
        <Divider title='Work' />
        <WorkSection />
        <ContactSection />
    </>
  )
}
