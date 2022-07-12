import useStickyState from '@nicer-toolbox/use-sticky-state';
import {React, useState, useEffect} from 'react'
import ReactSelect from 'react-select';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header';
import styles from './EditNameUser.scss'

const EditNameUser = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <div className="content content-edit-name">
            <div className="container">
                <h1>Правка имени пользователя</h1>

                <div className="users-wrap">
                    <div className="title">Пользователи</div>
                    <div className="users-box list-scroll-wrap">
                        <div className="list-scroll-items">
                            <a href="#" className="users-list__item">Alexander Kowalsky</a>
                            <a href="#" className="users-list__item">Diana dolinsky</a>
                            <a href="#" className="users-list__item">Dmitry Krasnogorov</a>
                            <a href="#" className="users-list__item">Easylikethis 1</a>
                            <a href="#" className="users-list__item">Julia Chmur</a>
                            <a href="#" className="users-list__item">Saveli Kameisha</a>
                            <a href="#" className="users-list__item">[ADM] Глеб Гуринович</a>
                            <a href="#" className="users-list__item">User UserLastname</a>
                            <a href="#" className="users-list__item">User UserLastname 1</a>
                            <a href="#" className="users-list__item">User UserLastname 2</a>
                            <a href="#" className="users-list__item">User UserLastname 3</a>
                            <a href="#" className="users-list__item">User UserLastname 4</a>
                            <a href="#" className="users-list__item">User UserLastname 5</a>
                            <a href="#" className="users-list__item">User UserLastname 6</a>
                            <a href="#" className="users-list__item">User UserLastname 7</a>
                            <a href="#" className="users-list__item">User UserLastname 8</a>
                        </div>
                    </div>
                    <a href="#" className="btn-white">Запустить</a>
                </div>
            </div>
        </div>

        <FooterSmall />
    </div>
  )
}

export default EditNameUser