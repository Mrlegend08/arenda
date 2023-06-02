import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import HotelIcon from '@mui/icons-material/Hotel';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
const Header = () => {
    return (
        <>
            <header className='site-header'>
                <div className="containerSite">
                    <div className="site-header__wrapper d-flex flex-column align-items-start">
                        <div className="site-header__top d-flex justify-content-between">
                            <span className="site-header__logo">
                                lamabooking
                            </span>
                            <div className="d-flex align-items-center gap-4">
                                <button className='site-header__top-btn'>Register</button>
                                <button className='site-header__top-btn'>Login</button>
                            </div>
                        </div>
                        <div className="site-header__end">
                            <ul className="site-header__list">
                                <li className='site-header__item-active'>
                                    <HotelIcon />
                                    Joylar
                                </li>
                                <li className='site-header__item'>
                                    <LocalAirportIcon style={{ transform: "rotate(90deg)" }} />
                                    Parvozlar
                                </li>
                                <li className='site-header__item'>
                                    <CarRentalIcon />
                                    Avtomabil ijarasi
                                </li>
                                <li className='site-header__item'>
                                    <HotelIcon />
                                    Diqqatga sazovor joylar
                                </li>
                                <li className='site-header__item'>
                                    <LocalTaxiIcon />
                                    Aeroport taksilari
                                </li>
                            </ul>
                            <h1 className='site-header__title'>
                                Ijara uchun eng arzon uylar va kvartilar.
                            </h1>
                            <p className='site-header__desc'>Sayohatlaringiz uchun mukofot oling - bepul Lamabooking hisobi bilan 10% yoki undan ko'proq lahzali tejamkorlikni oching</p>
                            <button className='site-header__btn'>Sign in / Register</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
