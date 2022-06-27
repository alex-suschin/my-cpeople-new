import React from 'react'
import ServiceItem from '../ServiceItem/ServiceItem'
import styles from './Services.scss'

const Services = ({props, title, items}) => {


  return (
    
    <div className="services-wrap">
        <div className="container">
            <div className="services-title">{title}</div>
            <div className="services-items">
                {items.map((item, index) =>
                    <ServiceItem item={item} key={item.id} />
                )}
            </div>
        </div>
    </div>
  )
}

export default Services