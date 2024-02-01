import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'


const FilterPrice = ({setFromTo}) => {

  const { handleSubmit, register, reset } = useForm()

  const submit = (data) => {
    const obj = {
      from: +data.from,
      to: +data.to === 0 ? Infinity : +data.to
    }
    setFromTo(obj)
  }

  return (
    <div className="from__container">
      <div className="from__container1">
      <h3 className="from__title">Price</h3>
      <form className="from" onSubmit={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input className="from__input" {...register('from')} type="number" />
        </label>
        <label>
          <span>To</span>
          <input className="from__input" {...register('to')} type="number" />
        </label>
        <button className="from__btn">Apply</button>
      </form>
      </div>
    </div>
  )
}

export default FilterPrice
