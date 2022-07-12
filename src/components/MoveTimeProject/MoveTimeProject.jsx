import useStickyState from '@nicer-toolbox/use-sticky-state';
import {React, useState, useEffect} from 'react'
import ReactSelect from 'react-select';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header';
import styles from './MoveTimeProject.scss'

export const projectOptions = [
    { value: "AL", label: "CP" },
    { value: "AK", label: "STADA" },
    { value: "AS", label: "Present Star" },
    { value: "AZ", label: "Эконика" }
]

const MoveTimeProject = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

            <div className="content content-move-time">
                <div className="container">
                    <h1>Перенос времени, проставленного в проект</h1>
                    <form action="">
                        <div className="content-form-item">
                            <div className="content-form-item-desc">
                                <label htmlFor="">Проекты</label>
                                <span>Укажите id проектов через запятую</span>
                            </div>
                            <ReactSelect className="custom-select" options={projectOptions} />
                            <div className="move-time-btns">
                                <a href="#" className="btn-white">Запустить</a>
                                <label className='label-checkbox'>
                                    <b>Добавлять телефон офиса</b>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        <FooterSmall />
    </div>
  )
}

export default MoveTimeProject