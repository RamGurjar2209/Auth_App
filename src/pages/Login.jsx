import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, reset } from '../features/auth/authSlice'

const Login = () => {

  const { user, isSuccess, isError, isLoading, message } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }


  useEffect(() => {

    if(user){
      navigate("/")
    }

    if(isError && message){
      toast.error(message)
    }

    dispatch(reset())

  }, [isSuccess , isError , isLoading , message , user])
  
  if (isLoading) {
    return (
      <div className='home'>
        <h1>Loading...</h1>
      </div>
    )
  }
  
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-text">
          <h1>Login Here!</h1>
          <div></div>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter Email" name='email' value={email} onChange={handleChange} />
          <input type="password" placeholder="Enter Password" name='password' value={password} onChange={handleChange} />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
