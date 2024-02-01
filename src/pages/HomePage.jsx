import { useEffect, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from "../components/HomePage/ListHotels"
import './Style/HomePage.css'
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from '../components/HomePage/FilterCities'

const HomePage = () => {

  const [nameInput, setNameInput ] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  //const [idCity, setIdCity] = useState('all cities')

  const hotels = useSelector( states =>  states.hotels)
  const disptch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    disptch(getHotelsThunk(url))
  }, [])

  console.log(hotels)

  const hotelsFilterd = hotels?.results.filter( hotelInfo => {
    // filterName

    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)

    // filterPrice
    const pricehotel = +hotelInfo.price
    const filterPrice = fromTo.from <= pricehotel && pricehotel <= fromTo.to

    // filterCities
    //const filterCities = idCity === 'all cities' ? (true) : (idCity === hotelInfo.city.id)

    return filterName && filterPrice
  })//.sort((a, b) => a.price - b.price)

  return (
    <div className="home__pages"> 
      <div className="home__filter">
      <FilterPrice setFromTo={setFromTo}/>
      <FilterCities />
      </div>
      <div>
      <div className="home__search">
      <FilterName setNameInput={setNameInput}/>
      </div>
      <ListHotels hotels={hotelsFilterd}/>
      </div>

    </div>
  )
}

export default HomePage
