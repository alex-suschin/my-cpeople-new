import {React, useState, useEffect} from 'react'
import App from '../../App'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './PlanResult.scss'

const PlanResult = ({useStickyState, changeTheme, themeBlack}) => {

  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme} />

        <ul className="nav nav-tabs pl-5" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="project-data-tab" data-toggle="tab" href="#project-data" role="tab" aria-controls="project-data" aria-selected="true">Проектные данные (Планы)</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="passport-tab" data-toggle="tab" href="#passport" role="tab" aria-controls="passport" aria-selected="false">Паспорт (Результаты)</a>
            </li>
        </ul>
        <div className="tab-content" id="fullScreenTabContent">
            <div className="tab-pane fade show active" id="project-data" role="tabpanel" aria-labelledby="project-data-tab">

                <iframe src="/project-data/?iframe" frameBorder="0" allowfullscreen></iframe>

            </div>
            <div className="tab-pane fade" id="passport" role="tabpanel" aria-labelledby="passport-tab">

                <iframe src="/passport/?iframe" frameBorder="0" allowfullscreen></iframe>

            </div>
        </div>

        <Footer />
    </div>
  )
}

export default PlanResult