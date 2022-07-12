import useStickyState from '@nicer-toolbox/use-sticky-state';
import {React, useState, useEffect} from 'react'
import ReactSelect from 'react-select';
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header';
import styles from './MoveTimeFromProject.scss'
import calendar from '../../assets/img/calendar.svg'

export const projectExport = [
    { value: "AL", label: "CP" },
    { value: "AK", label: "STADA" },
    { value: "AS", label: "Present Star" },
    { value: "AZ", label: "Эконика" }
]

export const projectImport = [
    { value: "AL", label: "CP" },
    { value: "AK", label: "STADA" },
    { value: "AS", label: "Present Star" },
    { value: "AZ", label: "Эконика" }
]

const MoveTimeFromProject = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <div className="content content-move-time-from-project">
            <div className="container">
                <h1>Перенос времени из проекта в проект</h1>
                <form action="">
                    <div className="content-form-items">
                        <div className="content-form-item">
                            <div className="content-form-item-desc">
                                <label htmlFor="">Проект экспорта:</label>
                                <span>Откуда забираем время</span>
                                <ReactSelect options={projectExport} className="custom-select" placeholder='Укажите проект' />

                                <div className="date-block date-start-move-time">
                                    <img src={calendar} alt="" />
                                    <div className="title">Дата начала</div>
                                    <div className="date-inputs">
                                        <div className="date-input">
                                            <input type="date" placeholder='День' />
                                        </div>
                                        <div className="date-input">
                                            <input type="date" placeholder='Месяц' />
                                        </div>
                                        <div className="date-input">
                                            <input type="date" placeholder='Год' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="move-time-btns">
                                <a href="#" className="btn-white">Перенести время</a>
                                <label className='label-checkbox'>
                                    <b>Тестовый запуск</b>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>

                        <div className="content-form-item">
                            <div className="content-form-item-desc">
                                <label htmlFor="">Проект импорта:</label>
                                <span>Куда переносим время</span>
                                <ReactSelect options={projectImport}  className="custom-select" placeholder='Укажите проект' />

                                <div className="date-block date-start-move-time">
                                <img src={calendar} alt="" />
                                    <div className="title">Дата окончания</div>
                                    <div className="date-inputs">
                                        <div className="date-input">
                                            <input type="date" placeholder='День' />
                                        </div>
                                        <div className="date-input">
                                            <input type="date" placeholder='Месяц' />
                                        </div>
                                        <div className="date-input">
                                            <input type="date" placeholder='Год' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <FooterSmall />
    </div>
  )
}

export default MoveTimeFromProject