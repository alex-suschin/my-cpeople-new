import React, {useContext, useEffect, useState} from "react";
import './App.scss';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Services from './components/Services/Services';
import spinner from './assets/img/spinner.svg';
import axios from 'axios'
import Footer from "./components/Footer/Footer";


function App(props) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [themeBlack, setThemeBlack] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          'https://sasweb.ru/react-test/serv-info-1.json'
        )

        setItems(data.sections)

      } catch(error) {
        console.log('error')
      }

      setLoading(false)
    }
    fetchData()
  }, [])
  
  function changeTheme () {
    setThemeBlack(!themeBlack);
  }


  return (
    <div className={`App ${!themeBlack ? '_white-theme' : ''}`}>
      <Header themeBlack changeTheme={changeTheme} />

      <MainBanner />
      {loading && <img className="loading" src={spinner} alt="Spinner" />}

      <div className="services-box">
        {items ? items.map(item => (
          <Services title={item.header} items={item.items} key={item.header} />
        )) : <h2>Элементы не найдены</h2>}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
