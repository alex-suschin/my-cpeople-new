import React from 'react'
import styles from './ServiceItem.module.scss';

const ServiceItem = (props) => {

  console.log(props)
  console.log(props.item)
  console.log(props.item)
  console.log(props.item.textNote)

  return (
    <div className={styles['service-item']}>
      <div data-tooltip={props.item.textNote} className={styles['service-item-note']}>?</div>
      <a className={styles['service-item-title']} href="#">{props.item.title}</a>

      <div className={styles['service-links']}>
        {props.item.links.map((item, index) =>
          <a href={item.title}>{item.title} <i></i></a>
          )}
      </div>

      <a className={styles['service-item-desc']} href="#">{props.item.desc}</a>
    </div>
  )
}

export default ServiceItem