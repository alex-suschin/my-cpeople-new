import React from 'react'
import styles from './Nav.module.scss'

const Nav = (props) => {
    let menu = [
        {'id': 1, 'title': 'Проекты', 'href': '1'},
        {'id': 2, 'title': 'Документы', 'href': '2'},
        {'id': 3, 'title': 'Деньги', 'href': '3', 'submenu': '[{"title": "Проекты", "href": "1"}, {"title": "Проекты", "href": "1"}, {"title": "Проекты", "href": "1"}, {"title": "Проекты", "href": "1"}]'},
        {'id': 4, 'title': 'Отчеты', 'href': '4'},
        {'id': 5, 'title': 'Время', 'href': '5'}
    ]
  return (
    
    <ul className={styles.menu}>
        {menu.map((item, index) =>
        <li key={item.id}>
          <a href={item.href}>{item.title}
            <i></i>
            {/* {item.submenu ? item.submenu.map((itm, idx) => <ul className='sub-menu'><li><a href={itm.href}>{itm.title}</a></li></ul>) : ''} */}
            
          </a>
        </li>
      )}
    </ul>
  )
}

export default Nav