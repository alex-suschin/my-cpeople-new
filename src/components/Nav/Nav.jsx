import React from 'react'
import styles from './Nav.module.scss'

const Nav = (props) => {
    // let menu = {
    //     {'id': 1, 'title': 'Проекты'}
    // }
  return (
    <ul className={styles.menu}>
        <li><a href="#">Проекты <i></i></a></li>
        <li><a href="#">Документы <i></i></a></li>
        <li><a href="#">Деньги <i></i></a></li>
        <li><a href="#">Отчеты <i></i></a></li>
        <li><a href="#">Время <i></i></a></li>
    </ul>
  )
}

export default Nav