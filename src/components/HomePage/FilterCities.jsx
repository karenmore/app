import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/states/hotels.state"
import { useDispatch } from "react-redux"
//import './styles/'
import './styles/FilterCities.css'


const FilterCities = () => {

  const url = 'https://hotels-api.academlo.tech/cities'
  const [ cities, getCities] = useFetch(url)

  useEffect(() => {
    getCities()
  }, [])

  const dispatch = useDispatch()

  const handlFilterCities = (id) => {
    let url = 'https://hotels-api.academlo.tech/hotels'
    if(id !== 'all cities'){
      url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`
    }
    dispatch(getHotelsThunk(url))
  }

  return (
    <div className="container__cities">
      <h3 className="cities__name">Cities</h3>
      <ul className="cities__ul">
        <li className="cities__list" onClick={() => handlFilterCities('all cities')}>All cities</li>
        {
          cities?.map( city => (
            <li className="cities__list" onClick={() => handlFilterCities(city.id)} key={city.id}>{city.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FilterCities
