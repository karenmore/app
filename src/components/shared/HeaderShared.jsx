import { Link } from "react-router-dom"
import HotelInfoPage from "../../pages/HotelInfoPage"
import './slyles/HeaderShared.css'


const HeaderShared = () => {
  return (
    <header className="header">
        <h1 className="header__name"><Link to='/'>BookingApp</Link></h1>
        <nav>
            <ul className="nav__header">
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared
