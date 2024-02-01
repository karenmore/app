import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import OtherHotels from '../components/HotelInfoPage/OtherHotels'
import ReservationsHotel from '../components/HotelInfoPage/ReservationsHotel'
import SliderImgs from '../components/HotelInfoPage/SliderImgs'
import CommentsSestion from '../components/HotelInfoPage/CommentsSestion'

const HotelInfoPage = () => {

    const { id } = useParams()

    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    const [hotel , getHotel] = useFetch(url)

    useEffect(() => {
        getHotel()
    }, [url])

    console.log(hotel)

    return (
        <div>
            <header>
                <h2>{hotel?.name}</h2>
                <span>rating</span>
            </header>
            <SliderImgs
                hotel={hotel}/>
        <div>
            {
            hotel && 
            ( 
            <Map 
            center={[ +hotel.lat, +hotel.lon ]} 
            height={300} 
            defaultZoom={13}
            > 
                <Marker
                    width={50}
                    color='#34a356'
                    anchor={[ +hotel.lat, +hotel.lon ]}
                />
                <ZoomControl />
            </Map>
            )
            }
        </div>
        <div>
            <div>
                <span>{hotel?.city.name}</span>
                <span>{hotel?.city.country}</span>
            </div>
            <p>
                <i className='bx bx-map'></i>
            </p>
            <span>{hotel?.address}</span>
            <div>
                <p>{hotel?.description}</p>
            </div>
            <CommentsSestion
                hotelId={hotel?.id}
            />
            <ReservationsHotel
                hotelId={hotel?.id}
            />
            <OtherHotels
                cityId={hotel?.city.id}
                hotelId={hotel?.id}
            />
        </div>
    </div>
  )
}

export default HotelInfoPage
