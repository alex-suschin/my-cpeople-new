import {React, useState, useEffect} from 'react'
import useStickyState from '../../assets/js/useStickyState';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header';
import styles from './NominateProduct.scss'

const NominateProduct = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <div className="content content-nominate-product">
            <div className="container">
                <h1>Назначить продукт и этап</h1>

                <div className="nominate-product-box">
                    <div className="nominate-product-box__item">
                        <div className="users-wrap">
                            <div className="title">Клиент:</div>
                            <div className="users-box list-scroll-wrap">
                                <div className="list-scroll-items">
                                    <a href="#" className="users-list__item">Еваппс</a>
                                    <a href="#" className="users-list__item">7 цветов</a>
                                    <a href="#" className="users-list__item">Active Collab</a>
                                    <a href="#" className="users-list__item">Akron Holding</a>
                                    <a href="#" className="users-list__item">Aston Hall</a>
                                    <a href="#" className="users-list__item">Banners 25 / 8</a>
                                    <a href="#" className="users-list__item">CANAVARA GROUP</a>
                                    <a href="#" className="users-list__item">Capital Group</a>
                                    <a href="#" className="users-list__item">Present Star</a>
                                    <a href="#" className="users-list__item">Stada</a>
                                    <a href="#" className="users-list__item">Полюс</a>
                                    <a href="#" className="users-list__item">Эконика</a>
                                    <a href="#" className="users-list__item">Среда</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nominate-product-box__item">
                        <div className="users-wrap">
                            <div className="title">Проект:</div>
                            <div className="users-box list-scroll-wrap">
                                <div className="list-scroll-items">
                                    <a href="#" className="users-list__item">Еваппс</a>
                                    <a href="#" className="users-list__item">7 цветов</a>
                                    <a href="#" className="users-list__item">Active Collab</a>
                                    <a href="#" className="users-list__item">Akron Holding</a>
                                    <a href="#" className="users-list__item">Aston Hall</a>
                                    <a href="#" className="users-list__item">Banners 25 / 8</a>
                                    <a href="#" className="users-list__item">CANAVARA GROUP</a>
                                    <a href="#" className="users-list__item">Capital Group</a>
                                    <a href="#" className="users-list__item">Present Star</a>
                                    <a href="#" className="users-list__item">Stada</a>
                                    <a href="#" className="users-list__item">Полюс</a>
                                    <a href="#" className="users-list__item">Эконика</a>
                                    <a href="#" className="users-list__item">Среда</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nominate-product-filter">
                    <div className="sub-title">Фильтрация</div>
                    <div className="filter-list">
                        <a href="#">Все списки</a>
                        <a href="#">Нет продукта</a>
                        <a href="#">Нет этапа</a>
                        <a href="#">Задана вся информация</a>
                    </div>
                </div>

                <div className="nominate-product-table">
                    <table>
                        <tr>
                            <th>Клиент</th>
                            <th>Проект</th>
                            <th>Список задач</th>
                            <th>Продукт</th>
                            <th>Этап</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                    </table>
                    <a href="#" className="btn-white">Сохранить</a>
                </div>
            </div>
        </div>

        <FooterSmall />
    </div>
  )
}

export default NominateProduct