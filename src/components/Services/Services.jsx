import React from 'react'
import ServiceItem from '../ServiceItem/ServiceItem'
import styles from './Services.module.scss'

const Services = ({props, title, items}) => {


  return (
    
    <div className={styles['services-wrap']}>
        <div className="container">
            <div className={styles['services-title']}>{title}</div>
            <div className={styles['services-items']}>
                {items.map((item, index) =>
                    <ServiceItem item={item} key={item.id} />
                )}
            </div>
        </div>
    </div>
  )
}

export default Services