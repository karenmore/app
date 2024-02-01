import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './Style/LoginPage.css'

const LoginPage = () => {

  const { handleSubmit, reset, register } = useForm()

  const {loginUser} = useAuth()

  const submit = (data) => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

    const handleLogout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }

    if(localStorage.getItem('token')){
      const user = JSON.parse(localStorage.getItem('user'))
      return (
        <div>
          <img src="" alt="" />
          <h2>Welcome {user?.firstName + ' ' + user?.lastName}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )
    }
    return (
      <div className="login__container">
        <h2 className="login__title">User</h2>
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <label className="login__label">
            <span>Email</span>
            <input className="login__input" {...register('email')} type="email" />
          </label>
          <label className="login__label">
            <span>Password</span>
            <input className="login__input" {...register('password')} type="password" />
          </label>
          <button className="login__btn">Submit</button>
        </form>
      </div>
    )
  }

export default LoginPage
