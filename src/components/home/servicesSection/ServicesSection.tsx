import React from 'react'
import styles from './ServicesSection.module.css'
import { Service } from '../service/Service'
import useFetch from '../../../hooks/useFetch';
import { Services } from '../../../interfaces/api';
import { Loader } from '../../shared/Loader/Loader';

export const ServicesSection = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { data, error, loading } = useFetch<Services>({
    url: `${baseUrl}/api/servicios`,
    method: 'get'
  });

  const getIconName = (iconIndex: number) => {
    switch (iconIndex) {
      case 0:
        return 'bx bx-code-alt'
        
      case 1: 
        return 'bx bx-devices'
    
      default:
        return 'bx bx-devices'
    }
  }

  return (
    <div className={ styles.servicesContainer }>
        {
          ( !loading && data != null ) && 
            data.services.map((service, index) => service.service_state != false && (
              <Service 
                goesLeft={ ( index % 2 == 0 ) }
                serviceDescription={ service.service_description }
                serviceImage={ service.service_image }
                serviceName={ service.service_name }
                serviceIcon={ getIconName(service.service_topic) }
                key={index}
              />
            ))
        }
        {
          ( loading ) && (
            <Loader />
          )
        }
    </div>
  )
}
