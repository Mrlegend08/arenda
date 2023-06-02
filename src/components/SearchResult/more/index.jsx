import React from 'react'
import "./index.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HotelContext } from '../../../context/SearchResult'
const More = () => {
    const { hotel, setHotel } = React.useContext(HotelContext)
    console.log(hotel)
    const chooseHotel = hotel[Number(localStorage.getItem("index"))]
    console.log(chooseHotel)
    return (
        <>
            <div className="more">
                <div className="containerSite">
                    <div className="more__wrapper">
                        <div className="more__start">
                            <div className="more__start-top">
                                <h2 className='more__start-title'>{chooseHotel.viloyat + " " + chooseHotel.tuman}</h2>
                                <span className='more__start-area'><LocationOnIcon fontSize='small' /> {chooseHotel.hudud + " " + chooseHotel.location}</span>
                                <span className='more__start-distance'>Joylashgan hudud - 500m shahargacha</span>
                                <span className='more__start-cost'>{chooseHotel.ijaraNarxi}ga bron qilish va ayraportgaca tekin taxi</span>
                            </div>
                            <button className='more__start-btn'>Bron qilish </button>
                        </div>
                        <ul className='more__img-list'>
                            <li className='more__img-item'>
                                <img className='more__img-item-img' src={chooseHotel.rasim.spalni} alt="spalni" />
                            </li>
                            <li className='more__img-item'>
                                <img className='more__img-item-img' src={chooseHotel.rasim.mehmonxona} alt="mehmonxona" />
                            </li>
                            <li className='more__img-item'>
                                <img className='more__img-item-img' src={chooseHotel.rasim.hamom} alt="hamom" />
                            </li>
                            <li className='more__img-item'>
                                <img className='more__img-item-img' src={chooseHotel.rasim.oshxona} alt="oshxona" />
                            </li>
                            <li className='more__img-item'>
                                <img className='more__img-item-img' src={chooseHotel.rasim.bolalarXonasi} alt="bollor xonasi" />
                            </li>
                            <li className='more__img-item'>
                                <img className='more__img-item-img' src={chooseHotel.rasim.garaj} alt="garaj" />
                            </li>
                        </ul>
                        <div className="more__end">
                            <div className="more__end-start">
                                <h2 className='more__end-title'>
                                    Shaharning yuragida qolish
                                </h2>
                                <p className='more__end-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit laudantium adipisci dignissimos consequatur saepe laboriosam debitis, tempora similique labore repudiandae vitae eligendi rem sit illum sunt ullam sint esse maxime. Reiciendis vero, adipisci explicabo quas cum laudantium nemo, omnis, officia perspiciatis eum architecto dolorum nulla suscipit corporis sequi optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit laudantium adipisci dignissimos consequatur saepe laboriosam debitis, tempora similique labore repudiandae vitae eligendi rem sit illum sunt ullam sint esse maxime. Reiciendis vero, adipisci explicabo quas cum laudantium nemo, omnis, officia perspiciatis eum architecto dolorum nulla suscipit corporis sequi optio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem velit laudantium adipisci dignissimos consequatur saepe laboriosam debitis, tempora similique labore repudiandae vitae eligendi rem sit illum sunt ullam sint esse maxime. Reiciendis vero, adipisci explicabo quas cum laudantium nemo, omnis, officia perspiciatis eum architecto dolorum nulla suscipit corporis sequi optio.</p>
                            </div>
                            <div className="more__end-end">
                                <h3 className='more__end-end-title'>9 kun qolish uchun toliq</h3>
                                <p className='more__end-end-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, repudiandae.  </p>
                                <span><b>{Number(String(chooseHotel.ijaraNarxi).slice(0, 3)) * 9} </b>mln so`m (9 kunga)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default More
