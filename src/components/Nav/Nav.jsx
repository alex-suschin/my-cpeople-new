import React from 'react'
import styles from './Nav.module.scss'
import arrBottom from '../../assets/img/arr-bottom.svg'
import arrBottomGreen from '../../assets/img/arr-bottom-green.svg'

const Nav = (props) => {
    let menu = [
        {'id': 1, 'title': 'Проекты', 'href': '1'},
        {'id': 2, 'title': 'Документы', 'href': '2'},
        {'id': 3, 'title': 'Деньги', 'href': '3', 'submenu': [{"title": "Таблица внешних платежей", "href": "112321"}, {"title": "Заявка на внешний платеж", "href": "1222"}, {"title": "Поступление денег в отделы", "href": "77771"}, {"title": "Акты", "href": "15555"}]},
        {'id': 4, 'title': 'Отчеты', 'href': '4'},
        {'id': 5, 'title': 'Время', 'href': '5'}
    ]
  return (
    
    <ul className={styles.menu}>
        {menu.map((item, index) =>
        <li key={item.id}>
          <a href={item.href}>{item.title}
            <i>
              <img src={arrBottom} alt="" />
              <img src={arrBottomGreen} alt="" />
            </i>
          </a>
          {item.submenu ? 
            <ul className={styles['sub-menu']}>
              {item.submenu.map((itm, idx) => 
              <li key={itm.href}><a href={itm.href}>{itm.title}</a></li>)}
            </ul>
            : ''}
        </li>
      )}
    </ul>
  )
}

export default Nav