import React from 'react'
import styles from './ServicesSection.module.css'
import { Service } from '../service/Service'
import useFetch from '../../../hooks/useFetch';
import { ServicesResponse } from '../../../interfaces/api';
import { Loader } from '../../shared/Loader/Loader';

export const ServicesSection = () => {

  const baseUrl = import.meta.env.VITE_API_URL;

  if( !baseUrl ) return;

  const { data, error, loading } = useFetch<ServicesResponse>({
    url: `${baseUrl}/services`,
    method: 'get'
  });

  const getIconName = (iconIndex: string) => {
    switch (iconIndex) {
      case 'CODE':
        return 'bx bx-code-alt'
        
      case 'WEB': 
        return 'bx bx-devices'
    
      default:
        return 'bx bx-devices'
    }
  }

  return (
    <div className={ styles.servicesContainer }>
        {
          ( !loading && data != null ) && 
            data.payload.map((service, index) => service.serviceState != false && (
              <Service 
                goesLeft={ ( index % 2 == 0 ) }
                serviceDescription={ service.serviceDescription }
                serviceImage={ service.serviceImage }
                serviceName={ service.serviceName }
                serviceIcon={ getIconName(service.serviceTopic) }
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
