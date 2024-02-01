import getDaysFromDates from "../../services/getDaysFromDates"

const ReserveCard = ({ reserva, deleteResevation, setReserveSelected }) => {

    //console.log(reserva)

    const reservationsDays = getDaysFromDates(reserva.checkIn, reserva.checkOut)

    const handlDelete = () => {
        deleteResevation('/bookings, reserva.id')
    }

    const handleReviews = () => {
        setReserveSelected(reserva)

    }

    return (
        <article>
            <header>
                <img src={reserva.hotel.images[0].url}/>
            </header>
            <section>
                <h3>{reserva.hotel.name}</h3>
                <div>
                    {reserva.hotel.city.name},{reserva.hotel.city.country}
                </div>
                <div onClick={handleReviews} ><span>days of reservations</span>{reservationsDays}</div>
                <div><span>Subtotal Price: </span><span>{Number(reserva.hotel.price) * reservationsDays}</span></div>
            </section>
            <button onClick={handlDelete}>Delete</button>
        </article>
    )
}

export default ReserveCard