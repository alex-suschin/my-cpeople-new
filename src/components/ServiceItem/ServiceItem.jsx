import React from 'react'
import styles from './ServiceItem.scss';
import arr from '../../assets/img/arr-right.svg'
import arrBlack from '../../assets/img/arr-right-black.svg'

const ServiceItem = (props) => {

  let note = props.item.textNote ? <div data-tooltip={props.item.textNote} className="service-item-note">? <i></i></div> : '';

  let title = props.item.title.name ? <a href={props.item.title.href} className="service-item-title">{props.item.title.name}</a> : <div className="service-item-title">{props.item.title}</div>;

  let desc = props.item.desc ? <a className="service-item-desc" href="#">{props.item.desc}</a> : '';

  return (
    <div className="service-item">
      {note}
      
      {title}

      <div className="service-links">
        {props.item.links.map((item, index) =>
          <a href={item.href} key={item.title}>{item.title} 
            <i>
              <img src={arr} alt="" />
              <img src={arrBlack} alt="" />
            </i>
          </a>
          )}
      </div>

      {desc}
    </div>
  )
}

export default ServiceItem