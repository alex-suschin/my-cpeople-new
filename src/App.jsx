import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import Services from './components/Services/Services';


function App(props) {

  const [serviceItem, setServiceItem] = useState([
    {id: 1, title: 'База знаний Wiki', desc: 'Как подключиться к wiki', links: ['общая информация', 'FAQ/IT', 'записи лексций', 'первый день в СР'], textNote: '12345'},
    {id: 2, title: 'Active Collab', desc: 'Инструкции для сотрудников и для клиентов', links: ['документооборот', 'юридический проект', 'бухгалтерский проект'], textNote: '123456787090'},
    {id: 3, title: 'Облачный сервер', desc: 'Как получить доступ в облако', links: ['сканы документов', 'фотобанк', 'HR', 'DC', 'тендеры', 'RD', 'PR'], textNote: '123'}
  ])


  return (
    <div className="App">
      <Header />

      <MainBanner />

      <Services title="Сервисы для всех:" serviceItem={serviceItem} serviceItemLinks={serviceItem.links} />
    </div>
  );
}

export default App;
