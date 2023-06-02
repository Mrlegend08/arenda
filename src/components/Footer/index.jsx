import React from 'react'
import "./index.scss"
const Footer = () => {
    return (
        <>
            <footer className='site-footer'>
                <div className="site-footer__top">
                    <div className="containerSite">
                        <div className="site-footer__top-wrapper">
                            <h2 className='site-footer__title'>
                                Save time, save money!
                            </h2>
                            <span className='site-footer__desc'>
                                Sign up and we'll send the best deals to you
                            </span>
                            <form className='site-footer__form'>
                                <input className='site-footer__input' type="mail" name='userMail' placeholder='Your email' required />
                                <button className='site-footer__submit-btn' type='submit'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="containerSite">
                        <ul className='site-footer__list'>
                            <li className='site-footer__item'>
                                <a className='site-footer__link' href="#link">Countries</a>
                                <a className='site-footer__link' href="#link">Regions</a>
                                <a className='site-footer__link' href="#link">Cities</a>
                                <a className='site-footer__link' href="#link">Districts</a>
                                <a className='site-footer__link' href="#link">Airports</a>
                                <a className='site-footer__link' href="#link">Hotels</a>
                            </li>
                            <li className='site-footer__item'>
                                <a className='site-footer__link' href="#link">Homes</a>
                                <a className='site-footer__link' href="#link">Apartments</a>
                                <a className='site-footer__link' href="#link">Resorts</a>
                                <a className='site-footer__link' href="#link">Villas</a>
                                <a className='site-footer__link' href="#link">Hostels</a>
                                <a className='site-footer__link' href="#link">Guest houses</a>
                            </li>
                            <li className='site-footer__item'>
                                <a className='site-footer__link' href="#link">Unique places to stay</a>
                                <a className='site-footer__link' href="#link">Reviews</a>
                                <a className='site-footer__link' href="#link">Unpacked: Travel articles</a>
                                <a className='site-footer__link' href="#link">Travel communities</a>
                                <a className='site-footer__link' href="#link">Seasonal and holiday deals</a>
                            </li>
                            <li className='site-footer__item'>
                                <a className='site-footer__link' href="#link">Car rental</a>
                                <a className='site-footer__link' href="#link">Flight Finder</a>
                                <a className='site-footer__link' href="#link">Restaurant reservations</a>
                                <a className='site-footer__link' href="#link">Travel Agents</a>
                            </li>
                            <li className='site-footer__item'>
                                <a className='site-footer__link' href="#link">Curtomer Service</a>
                                <a className='site-footer__link' href="#link">Partner Help</a>
                                <a className='site-footer__link' href="#link">Careers</a>
                                <a className='site-footer__link' href="#link">Sustainability</a>
                                <a className='site-footer__link' href="#link">Press center</a>
                                <a className='site-footer__link' href="#link">Safety Resource Center</a>
                                <a className='site-footer__link' href="#link">Investor relations</a>
                                <a className='site-footer__link' href="#link">Terms & conditions</a>
                            </li>
                        </ul>
                        <span className="site-footer__avtor">
                            Copyright © 2022 Lamabooking.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
