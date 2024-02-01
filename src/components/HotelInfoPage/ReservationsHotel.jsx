import { useForm } from "react-hook-form"
import UseCrud from "../../hooks/UseCrud"
import getConfigToken from "../../services/getConfigToken"

const ReservationsHotel = ( { hotelId } ) => {

  console.log(hotelId)

  const { handleSubmit, reset, register } = useForm()
  const [, , createReservation ] = UseCrud()

  const submit = data => {
    const obj = {
        ...data,
        hotelId
    } 
    createReservation('/bookings', obj)

  }

  return (
    <div>
      <h3>Reservations</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')} type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input {...register('checkOut')} type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReservationsHotel
