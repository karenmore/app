import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './Style/RegisterPage.css'

const RegisterPage = () => {


  const { handleSubmit, reset, register } = useForm()

  const { createNewUser } = useAuth()


  const submit = data => {
    createNewUser(data)
    reset({
      firstName: '',
      lastName: '',
      password: '',
      gender: 'other',
      email: '',
    })

  }

  return (
    <div className='container__register'>
      <h2 className='register__name'>Register</h2>
      <form className='register__formulario' onSubmit={handleSubmit(submit)}>
        <label className='register__label'>
          <span>First Name</span>
          <input {...register('firstName')} type="text" />
        </label>
        <label className='register__label'>
          <span>Last Name</span>
          <input {...register('lastName')} type="text" />
        </label>
        <label className='register__label'>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label className='register__label'>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <label className='register__label'>
          <span>Gender</span>
          < select {...register('gender')}>
            <option value="other">prefet not say</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
