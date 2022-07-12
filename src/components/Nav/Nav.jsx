import {React, BrowserRouter, Routes, Route } from 'react'
import styles from './Nav.scss'
import arrBottom from '../../assets/img/arr-bottom.svg'
import arrBottomBlack from '../../assets/img/arr-bottom-black.svg'
import arrBottomGreen from '../../assets/img/arr-bottom-green.svg'
import PlanResult from '../pages/PlanResult'
import { Link } from "react-router-dom";
// import App from '../../App'

const Nav = (props) => {
    let menu = [
      {
        'id': 1,
        'title': 'Проекты',
        'href': '1',
        'submenu': [{
            "title": "Паспорт и проектные данные",
            "href": "plan-result"
        },
        {
            "title": "Назначить продукт и этап",
            "href": "set_product_and_stage_cloud"
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
          "href": "unload-time"
        },
        {
          "title": "Перенос времени, проставленного в проект",
          "href": "move-time-project"
        },
        {
          "title": "Перенос времени из проекта в проект",
          "href": "move-time-from-project"
        },
        {
          "title": "Правка имени пользователя",
          "href": "edit-name-user "
        },
        {
          "title": "Импорт времени в коллаб",
          "href": "import-in-collab"
        },
        {
          "title": "Выгрузка данных из коллаба",
          "href": "unloading-data"
        },
        {
          "title": "Назначить продукт и этап",
          "href": "nominate-product"
        }]
      }
      ,{
        'id': 6,
        'title': 'Прочее',
        'href': '6',
        'submenu': [{
          "title": "Создать подпись",
          "href": "signature"
        }
        ]
      }
    ]
  return (

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="plan" element={<PlanResult />} />
    //   </Routes>
    // </BrowserRouter>

    // <nav
    //     style={{
    //       borderBottom: "solid 1px",
    //       paddingBottom: "1rem",
    //     }}
    //   >
    //     <Link to="/invoices">Invoices</Link> |{" "}
    //     <Link to="/expenses">Expenses</Link>
    //   </nav>
    
    <ul className="menu">
        {menu.map((item, index) =>
        <li key={item.id}>
          <Link to={item.href}>{item.title}
            <i>
              <img src={arrBottom} alt="" />
              <img src={arrBottomBlack} alt="" />
              <img src={arrBottomGreen} alt="" />
            </i>
          </Link>
          {item.submenu ? 
            <ul className="sub-menu">
              {item.submenu.map((itm, idx) => 
              <li key={itm.href}><Link to={itm.href}>{itm.title}</Link></li>)}
            </ul>
            : ''}
        </li>
      )}
    </ul>
  )
}

export default Nav