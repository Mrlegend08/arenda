import React from 'react'
import "./index.scss"
import { DatePicker, Space } from 'antd';
import HotelIcon from '@mui/icons-material/Hotel';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import { HotelContext } from '../../context/SearchResult';
import { Link, NavLink } from 'react-router-dom';
const { RangePicker } = DatePicker;
const HomeSearch = () => {
    const [adult, setAdult] = React.useState(1)
    const [children, setChildren] = React.useState(0)
    const [room, setRoom] = React.useState(1)
    const [open, setOpen] = React.useState(false)
    const { hotel, setHotel } = React.useContext(HotelContext)
    const inputRef = React.useRef("")
    const dataRef = React.useRef("")
    const handleClick = () => {
        const hotelObject = {
            viloyat: inputRef.current.value,
            vaqt: dataRef.current.value,
            odamlar: {
                kattalar: adult,
                bolalar: children
            },
            xonalar: room
        }
        console.log(hotelObject)
        setHotel(hotelObject)
    }
    return (
        <>
            <div className="home-search">
                <div className="home-search__form-position">
                    <div className="containerSite">
                        <div className="home-search__form-wrapper">
                            <form onSubmit={(evt) => evt.preventDefault()} className='home-search__form d-flex align-items-center'>
                                <div style={{ gap: "10px", color: "#CACACA" }} className="d-flex align-items-center"><HotelIcon /><input ref={inputRef} className='home-search__input-text' type="text" placeholder='Qayerdan kvartira qidiryapsiz?' /></div>
                                <Space direction="vertical" size={10}>
                                    <RangePicker ref={dataRef} />
                                </Space>
                                <div style={{ gap: "10px", color: "#CACACA", position: "relative" }} className="d-flex align-items-center">
                                    <BoyOutlinedIcon />
                                    <span onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }} className='home-search__peoples'>{adult} kattalar · {children} bolalar · {room} xonalar
                                    </span>
                                    {open ? <div className="home-search__option">
                                        <div style={{ color: "black" }} className="home-search__option-item">
                                            <span className='home-search__option-name'>
                                                Kattalar
                                            </span>
                                            <div style={{ gap: "10px" }} className="d-flex align-items-center">
                                                <button className={`home-search__option-btn ${adult == 1 ? "cursorNot" : ""}`} onClick={() => adult > 1 ? setAdult(adult - 1) : ""}>-</button>
                                                <span className='home-seach__option-text'>{adult}</span>
                                                <button className='home-search__option-btn' onClick={() => setAdult(adult + 1)}>+</button>
                                            </div>
                                        </div>
                                        <div style={{ color: "black" }} className="home-search__option-item">
                                            <span className='home-search__option-name'>
                                                Bolalar
                                            </span>
                                            <div style={{ gap: "10px" }} className="d-flex align-items-center">
                                                <button className={`home-search__option-btn ${children == 0 ? "cursorNot" : ""}`} onClick={() => children > 0 ? setChildren(children - 1) : ""}>-</button>
                                                <span className='home-seach__option-text'>{children}</span>
                                                <button className='home-search__option-btn' onClick={() => setChildren(children + 1)}>+</button>
                                            </div>
                                        </div>
                                        <div style={{ color: "black" }} className="home-search__option-item">
                                            <span className='home-search__option-name'>
                                                Xonalar
                                            </span>
                                            <div style={{ gap: "10px" }} className="d-flex align-items-center">
                                                <button className={`home-search__option-btn ${room == 1 ? "cursorNot" : ""}`} onClick={() => room > 1 ? setRoom(room - 1) : ""}>-</button>
                                                <span className='home-seach__option-text'>{room}</span>
                                                <button className='home-search__option-btn' onClick={() => setRoom(room + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div> : ""}
                                </div>
                                <Link to={"searchresult"}>
                                    <button className='home-search__submit-btn' type='submit' onClick={() => handleClick()}>Search</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="containerSite">
                    <div className="home-search__wrapper">
                        <ul className='home-search__top-list'>
                            <li className='home-search__top-item'>
                                <img className='home-search__top-img' src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" />
                                <div className="home-search__top-flex">
                                    <h2 className='home-search__top-title'>Dublin</h2>
                                    <h3 className='home-search__top-text'>123 properties</h3>
                                </div>
                            </li>
                            <li className='home-search__top-item'>
                                <img className='home-search__top-img' src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" />
                                <div className="home-search__top-flex">
                                    <h2 className='home-search__top-title'>Reno</h2>
                                    <h3 className='home-search__top-text'>533 properties</h3>
                                </div>
                            </li>
                            <li className='home-search__top-item'>
                                <img className='home-search__top-img' src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" />
                                <div className="home-search__top-flex">
                                    <h2 className='home-search__top-title'>Austin</h2>
                                    <h3 className='home-search__top-text'>532 properties</h3>
                                </div>
                            </li>
                        </ul>
                        <h3 className='home-search__title'>
                            Qaysi viloyatdan kerak?
                        </h3>
                        <ul className='home-search__middle-list'>
                            <li className='home-search__middle-item'>
                                <img className='home-search__middle-img' src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" />
                                <div className="home-search__middle-flex">
                                    <h2 className='home-search__middle-title'>Fargona</h2>
                                    <h3 className='home-search__middle-text'>233 hotels</h3>
                                </div>
                            </li>
                            <li className='home-search__middle-item'>
                                <img className='home-search__middle-img' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" />
                                <div className="home-search__middle-flex">
                                    <h2 className='home-search__middle-title'>Toshkent</h2>
                                    <h3 className='home-search__middle-text'>2331 hotels</h3>
                                </div>
                            </li>
                            <li className='home-search__middle-item'>
                                <img className='home-search__middle-img' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" />
                                <div className="home-search__middle-flex">
                                    <h2 className='home-search__middle-title'>Xorazm</h2>
                                    <h3 className='home-search__middle-text'>2331 hotels</h3>
                                </div>
                            </li>
                            <li className='home-search__middle-item'>
                                <img className='home-search__middle-img' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" />
                                <div className="home-search__middle-flex">
                                    <h2 className='home-search__middle-title'>Surxandaryo</h2>
                                    <h3 className='home-search__middle-text'>2331 hotels</h3>
                                </div>
                            </li>
                            <li className='home-search__middle-item'>
                                <img className='home-search__middle-img' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" />
                                <div className="home-search__middle-flex">
                                    <h2 className='home-search__middle-title'>Andijon</h2>
                                    <h3 className='home-search__middle-text'>2331 hotels</h3>
                                </div>
                            </li>
                        </ul>
                        <h3 className='home-search__title'>
                            Eng kop korilgan joylar
                        </h3>
                        <ul className='home-search__bottom-list'>
                            <li className='home-search__bottom-item'>
                                <img className='home-search__bottom-img' src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                                <span className='home-search__bottom-title'>Aparthotel Stare Miasto</span>
                                <span className='home-search__bottom-area'>Madrid</span>
                                <span className='home-search__bottom-cost'>Starting from $120</span>
                                <div className="home-search__bottom-flex">
                                    <button className='home-search__bottom-btn'>8.9</button>
                                    <span className='home-search__bottom-rate'>Excellent</span>
                                </div>
                            </li>
                            <li className='home-search__bottom-item'>
                                <img className='home-search__bottom-img' src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" />
                                <span className='home-search__bottom-title'>Comfort Suites Airport</span>
                                <span className='home-search__bottom-area'>Austin</span>
                                <span className='home-search__bottom-cost'>Starting from $140</span>
                                <div className="home-search__bottom-flex">
                                    <button className='home-search__bottom-btn'>9.3</button>
                                    <span className='home-search__bottom-rate'>Exceptional</span>
                                </div>
                            </li>
                            <li className='home-search__bottom-item'>
                                <img className='home-search__bottom-img' src="data:image/jpeg;base64,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" alt="" />
                                <span className='home-search__bottom-title'>Four Seasons Hotel</span>
                                <span className='home-search__bottom-area'>Lisbon</span>
                                <span className='home-search__bottom-cost'>Starting from $99</span>
                                <div className="home-search__bottom-flex">
                                    <button className='home-search__bottom-btn'>8.8</button>
                                    <span className='home-search__bottom-rate'>Excellent</span>
                                </div>
                            </li>
                            <li className='home-search__bottom-item'>
                                <img className='home-search__bottom-img' src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" alt="" />
                                <span className='home-search__bottom-title'>Hilton Garden Inn</span>
                                <span className='home-search__bottom-area'>Berlin</span>
                                <span className='home-search__bottom-cost'>Starting from $105</span>
                                <div className="home-search__bottom-flex">
                                    <button className='home-search__bottom-btn'>8.9</button>
                                    <span className='home-search__bottom-rate'>Excellent</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSearch
