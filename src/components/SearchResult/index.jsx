import React from 'react'
import "./index.scss"
import { DatePicker, Space } from 'antd';
import { hotels } from "../../api/api"
import { HotelContext } from '../../context/SearchResult'
import { Link } from 'react-router-dom';
const { RangePicker } = DatePicker;
const SearchResult = () => {
    const { hotel, setHotel } = React.useContext(HotelContext)
    console.log(hotel)
    const newSearchRegExp = new RegExp(hotel.viloyat, "gi")
    console.log(newSearchRegExp)
    const hotelSearch = hotels.filter((value) => value.viloyat.match(newSearchRegExp))
    const moreClick = (index) => {
        localStorage.setItem("index", JSON.stringify(index))
        setHotel([...hotelSearch])
    }
    const searchFuntion = hotelSearch.map((value, index) => {
        return (
            <li key={index} className='search-result__item'>
                <img className="search-result__item-img" src={value.rasim.korinish} alt="Korinish" width={200} height={200} />
                <div className="search-result__item-start">
                    <h2 className='search-result__item-title'>{value.viloyat} {value.tuman}</h2>
                    <span className='search-result__item-distace'>500m from center</span>
                    <span className='search-result__item-taxi'>Free airport taxi</span>
                    <span className='search-result__item-subtitle'>Studio Apartment with Air conditioning</span>
                    <span className='search-result__item-featchers'>Entire studio • 1 bathroom • 21m² 1 full bed</span>
                    <span className='search-result__item-canel'>Free cancellation</span>
                    <span className='search-result__item-canel-subtitle'>You can cancel later, so lock in this great price today!</span>
                </div>
                <div className="search-result__item-end">
                    <div className="search-result__item-rating">
                        <span className='search-result__rating-text'>Excellent</span>
                        <button className='search-result__rating-btn'>8.9</button>
                    </div>
                    <div className="search-result__item-details">
                        <span className='search-result__item-price'>{value.ijaraNarxi}</span>
                        <span className='search-result__item-tax'>Includes taxes and fees</span>
                        <Link to="more" > <button onClick={() => moreClick(index)} className='search-result__item-check-btn'>See availability</button></Link>
                    </div>
                </div>
            </li>
        )
    })
    return (
        <>
            <div className="search-result">
                <div className="containerSite">
                    <div className="search-result__wrapper">
                        <div className="search-result__start">
                            <h2 className='search-result__title'>Qidirish</h2>
                            <form className='search-result__form'>
                                <div className="search-result__form-flex">
                                    <label className='search-result__label'
                                        htmlFor="search-result__destinition">Destination</label>
                                    <input className='search-result__destinition' type="text" id='search-result__destinition' />
                                </div>
                                <div className="search-result__form-flex">
                                    <label className='search-result__label'>Check in Date</label>
                                    <Space direction="vertical" size={10}>
                                        <RangePicker />
                                    </Space>
                                </div>
                                <div className="search-result__form-flex">
                                    <label className='search-result__label'>Options</label>
                                </div>
                                <div className="search-result__form-option">
                                    <div className="search-result__form-option-item">
                                        <span>Min price <small>per night</small></span>
                                        <input className='search-result__form-night' type="number" />
                                    </div>
                                    <div className="search-result__form-option-item">
                                        <span>Max price <small>per night</small></span>
                                        <input className='search-result__form-night' type="number" />
                                    </div>
                                    <div className="search-result__form-option-item">
                                        <span>Adult</span>
                                        <input className='search-result__form-night' type="number" defaultValue={"1"} />
                                    </div>
                                    <div className="search-result__form-option-item">
                                        <span>Children</span>
                                        <input className='search-result__form-night' type="number" defaultValue={"0"} />
                                    </div>
                                    <div className="search-result__form-option-item">
                                        <span>Room</span>
                                        <input className='search-result__form-night' type="number" defaultValue={"1"} />
                                    </div>
                                </div>
                                <button className='search-result__form-btn'>
                                    Qidirish
                                </button>
                            </form>
                        </div>
                        <ul className='search-result__list'>
                            {searchFuntion}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult
