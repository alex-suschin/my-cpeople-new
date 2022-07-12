import {React, useState, useEffect} from 'react'
import useStickyState from '../../assets/js/useStickyState';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header';
import styles from './UnloadingData.scss'

const UnloadingData = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <div className="content content-unloading-data">
            <div className="container">
                <h1>Выгрузка данных из коллаба</h1>

                <div className="unloading-list">
                    <div>2022-07-04 14:11:50: Начали.</div>
                    <div>2022-07-04 14:11:56: Компании импортированны.</div>
                    <div>2022-07-04 14:12:02: Пользователи импортированны. </div>
                    <div>2022-07-04 14:12:08: Проекты импортированны. </div>
                    <div>2022-07-04 14:12:16: Списки задач импортированны.</div>
                    <div>2022-07-04 14:12:16: Готово.</div>
                </div>
            </div>
        </div>

        <FooterSmall />
    </div>
  )
}

export default UnloadingData