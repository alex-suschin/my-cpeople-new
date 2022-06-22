import React, {useContext, useEffect, useState} from "react";
import './App.scss';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Services from './components/Services/Services';
import spinner from './assets/img/spinner.svg';
import axios from 'axios'
import Footer from "./components/Footer/Footer";


function App(props) {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          'https://sasweb.ru/react-test/serv-info-1.json'
        )

        console.log(items)
        console.log(data)
        console.log(data.sections)
        console.log(setItems(data.sections))

        setItems(data.sections)

        console.log(items)
        console.log(items.items)
      } catch(error) {
        console.log('error')
      }

      setLoading(false)
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <Header />

      <MainBanner />
      {loading && <img className="loading" src={spinner} alt="Spinner" />}

      {/* {items.map(item => (
        <a href="#">{item}</a>
      ))} */}

      <Services title="Сервисы для всех:" items={items} />
      <Services title="Для менеджеров:" items={items} />
      <Services title="Для руководителей:" items={items} />

      <Footer />
    </div>
  );
}

export default App;
