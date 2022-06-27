import React from 'react'
import styles from './Nav.scss'
import arrBottom from '../../assets/img/arr-bottom.svg'
import arrBottomBlack from '../../assets/img/arr-bottom-black.svg'
import arrBottomGreen from '../../assets/img/arr-bottom-green.svg'

const Nav = (props) => {
    let menu = [
      {
        'id': 1,
        'title': 'Проекты',
        'href': '1',
        'submenu': [{
            "title": "Паспорт и проектные данные",
            "href": "https://my.cpeople.ru/plan-result/"
        },
        {
            "title": "Назначить продукт и этап",
            "href": "https://my.cpeople.ru/set_product_and_stage_cloud/"
        }]
      },
      {
        'id': 2,
        'title': 'Документы',
        'href': '2',
        'submenu': [{
            "title": "Заявка на создание нового документа",
            "href": "https://my.cpeople.ru/documents/create/"
        },
        {
            "title": "Заказ первого счета по новому документу",
            "href": "https://my.cpeople.ru/documents/first-payment/"
        }]
      },
      {
        'id': 3,
        'title': 'Деньги',
        'href': '3',
        'submenu': [{
            "title": "Внешние платежи",
            "href": "https://my.cpeople.ru/money/payments/"
        },
        {
            "title": "Поступление денег в отделы",
            "href": "https://my.cpeople.ru/money/receipts/"
        },
        {
            "title": "Акты",
            "href": "https://my.cpeople.ru/money/acts/"
        },
        {
            "title": "Заявка на внешний платеж",
            "href": "https://my.cpeople.ru/documents/payments/"
        },
        {
            "title": "Финансовое планирование (RD)",
            "href": "https://docs.google.com/spreadsheets/d/1nN0AFxDqkGkJQoPpJglMaiTfJdvx9Xr8-ZqsR5oiQpY"
        }]
      },
      {
        'id': 4,
        'title': 'Отчеты',
        'href': '4',
        'submenu': [{
            "title": "Отчеты поддержки",
            "href": "https://my.cpeople.ru/reports/"
        },
        {
            "title": "Отчет по ошибкам в специальностях",
            "href": "https://my.cpeople.ru/specialist-errors/"
        }]
      },
      {
        'id': 5,
        'title': 'Время',
        'href': '5',
        'submenu': [{
          "title": "Выгрузка времени в Google (БД)",
          "href": "https://my.cpeople.ru/time-records-update-db/"
        },
        {
          "title": "Перенос времени, проставленного в проект",
          "href": " https://my.cpeople.ru/move_project_time/"
        },
        {
          "title": "Перенос времени из проекта в проект",
          "href": "https://my.cpeople.ru/time-records-move-to-another-project/"
        },
        {
          "title": "Правка имени пользователя",
          "href": "https://my.cpeople.ru/time-records-update-user-name/ "
        },
        {
          "title": "Импорт времени в коллаб",
          "href": "https://my.cpeople.ru/time-records-import/"
        },
        {
          "title": "Выгрузка данных из коллаба",
          "href": "https://my.cpeople.ru/scripts/export-collab-to-docs/export.php"
        }]
      }
      ,{
        'id': 6,
        'title': 'Прочее',
        'href': '6',
        'submenu': [{
          "title": "Создать подпись",
          "href": "https://my.cpeople.ru/signature/"
        }
        ]
      }
    ]
  return (
    
    <ul className="menu">
        {menu.map((item, index) =>
        <li key={item.id}>
          <a href={item.href}>{item.title}
            <i>
              <img src={arrBottom} alt="" />
              <img src={arrBottomBlack} alt="" />
              <img src={arrBottomGreen} alt="" />
            </i>
          </a>
          {item.submenu ? 
            <ul className="sub-menu">
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