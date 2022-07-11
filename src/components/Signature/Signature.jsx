import {React, useState, useEffect} from 'react'
import ReactSelect from 'react-select'
import useStickyState from '../../assets/js/useStickyState'
import Footer from '../Footer/Footer'
import FooterSmall from '../FooterSmall/FooterSmall'
import Header from '../Header/Header'
import styles from './Signature.scss'

export const stateOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PW", label: "Palau" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" }
];


const Signature = ({changeTheme, themeBlack}) => {
  return (
    <div>
        <Header useStickyState={useStickyState} themeBlack={themeBlack} changeTheme={changeTheme}  />

        <div className='content content-signature'>
            <div className="container">
              <div className="content-head">
                <h1>Форма создания подписи</h1>
                <div className="desc">Все поля помеченные * обязательны для заполнения</div>
              </div>
                <form action="">
                  <div className="content-form-item">
                    <div className="content-form-item-desc">
                      <label htmlFor="">Имя и фамилия <i>*</i></label>
                    </div>
                    
                    <input type="text" placeholder='Сначала имя, затем фамилия' />
                  </div>

                  <hr />

                  <div className="content-form-item">
                    <div className="content-form-item-desc">
                      <label htmlFor="">Должность <i>*</i></label>
                      <p>Должность можно вводить и по-русски 
                      и по-английски. Можно задать несколько должностей одновременно.
                      <br />
                      Пример: Head of Research & Development department</p>
                    </div>
                    
                      <div className="clonable-inputs js-clonable-inputs js-position-inputs">
                        <div className="clonable-input">
                          <input className="base-input" type="text" placeholder='Введите название' name="position[0]" required />
                          <button type="button" className="clonable-action"></button>
                        </div>
                      </div>
                  </div>

                  <hr />

                  <div className="content-form-item">
                    <div className="content-form-item-desc">
                      <label htmlFor="">Мобильный <i>*</i></label>
                    </div>
                    
                    <div className="signature-phones">
                      <input type="tel" className='input-tel' placeholder='+7 (___) ___-__-__' />
                      <label className='label-checkbox add-office-phone'>
                        <b>Добавлять телефон офиса</b>
                        <input type="checkbox" />
                        <span></span>
                      </label>
                    </div>
                  </div>

                  <hr />

                  <div className="content-form-item">
                    <div className="content-form-item-desc">
                      <label htmlFor="">Проект в Коллабе <i>*</i></label>
                    </div>
                    
                    <div className="signature-phones">
                      <ReactSelect options={stateOptions} />
                    </div>
                  </div>

                  <hr />

                  <div className="content-form-item">
                    <div className="content-form-item-desc">
                      <label htmlFor="">Сайты  <i>*</i></label>
                    </div>
                      <label className='label-checkbox add-sites'>
                        <b>cpeople.ru</b>
                        <input type="checkbox" value="cpeople.ru" />
                        <span></span>
                      </label>
                      <label className='label-checkbox add-sites'>
                        <b>hr.cpeople.ru</b>
                        <input type="checkbox" value="hr.cpeople.ru" />
                        <span></span>
                      </label>
                      <label className='label-checkbox add-sites'>
                        <b>partners.cpeople.ru</b>
                        <input type="checkbox" value="partners.cpeople.ru" />
                        <span></span>
                      </label>
                  </div>

                  <hr />

                  <h2>Ваша подпись</h2>

                  <div className="total-signature-wrap">
                    <div className="total-signature-box">
                      <b>—</b>
                      <b>Имя Фамилия</b>
                      <b>Должность</b>

                      <div className="department">
                        <span>Digital experience agency CreativePeople</span>
                        <span>Product Research & Development</span>
                        <span>Digital & Creative Services</span>
                      </div>

                      <div className="phones">
                        <a href="tel:+71234124142">+7 (123) 412-41-42</a>
                      </div>

                      <div className="sites">
                        <a href="#">www.cpeople.ru</a>
                        <a href="#">hr.cpeople.ru</a>
                        <a href="#">partners.cpeople.ru</a>
                      </div>
                    </div>

                    <div className="signature-bottom">
                      <a href="#" className="btn-white">Скопировать подпись</a>
                      <label className='label-checkbox add-sites'>
                          <b>Сокращенная подпись</b>
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

export default Signature