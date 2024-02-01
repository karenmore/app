import { useRef } from "react"
import './styles/FilterName.css'


const FilterName = ({ setNameInput }) => {

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setNameInput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value = ''

  }

  return (
    <form className="filter__search" onSubmit={handleSubmit}>
        <input className="filter__name" ref={inputSearch} type="text" />
        <button className="filter__btn">Search</button>
    </form>
  )
}

export default FilterName
