import useStickyState from '@nicer-toolbox/use-sticky-state';
import {React, useState, useEffect} from 'react'
import ReactSelect from 'react-select';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header'
import styles from './ImportInCollab.scss'

const ImportInCollab = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <div className="content content-import-in-collab">
            <div className="container">
                <h1>Импорт времени в коллаб</h1>
                <form action="">
                    <div className="sub-title">Загрузите файл csv:</div>
                    <label className='input-file'>
                        <input type="file" />
                        <span>Выберите файл +</span>
                    </label>

                    <div className="move-time-btns">
                        <a href="#" className="btn-white">Импортировать</a>
                        <label className='label-checkbox'>
                            <b>Тестовый запуск</b>
                            <input type="checkbox" />
                            <span></span>
                        </label>
                    </div>
                </form>
            </div>
        </div>

        <FooterSmall />
    </div>
  )
}

export default ImportInCollab