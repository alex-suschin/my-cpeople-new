import {React, useState, useEffect} from 'react'
import useStickyState from '../../assets/js/useStickyState';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header';
import styles from './UnloadTime.scss'

const UnloadTime = ({changeTheme, themeBlack}) => {
  return (
    <div>

        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <div className="content content-upload">
            <div className="container">
                <h1>Выгрузка времени в Google (БД)</h1>

                <div className="upload-btns">
                    <a href="#" className='btn-white'>Экспорт в Google</a>
                    <span>Экспортировано 3310 записей.</span>
                </div>
            </div>
        </div>

        <FooterSmall />
    </div>
  )
}

export default UnloadTime