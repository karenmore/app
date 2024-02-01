import React, { useEffect, useState } from 'react'
import UseCrud from '../hooks/UseCrud'
import ReserveCard from '../components/ReservationsPage/ReserveCard'
import FormReviews from '../components/ReservationsPage/FormReviews'

const ReservationsPage = () => {

    const [reserveSelected, setReserveSelected ] = useState()

    const [reservation, getReservation, , deleteResevation] = UseCrud()

    useEffect(() => {
        getReservation('/bookings')
    }, [])

    //console.log(reservation)

  return (
    <div>
        <h2>Reservations</h2>
        <FormReviews
            reserveSelected={reserveSelected}
            setReserveSelected={setReserveSelected}
        />
        <div>
            {
                reservation?.map(reserva => (
                   <ReserveCard 
                   key={reserva.id}
                   reserva={reserva}
                   deleteResevation={deleteResevation}
                   setReserveSelected={setReserveSelected}
                   />
                ))
            }
        </div>
    </div>
  )
}

export default ReservationsPage
