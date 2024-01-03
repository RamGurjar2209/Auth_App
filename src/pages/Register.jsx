import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const { user, isSuccess, isError, isLoading, message } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const { name, email, password, password2 } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error("Passwords not match!")
    }

    dispatch(registerUser(formData))

  }


  useEffect(() => {

    if (user || isSuccess) {
      navigate("/")
    }

    if (isError && message) {
      toast.error(message)

    }

  }, [user, isSuccess, isError, isLoading, message])

  if (isLoading) {
    <div className='home'>
      <h1>Loading...</h1>
    </div>
  }

  return (
    <div className="container">
      <div className="sign-up">
        <div className="sign-up-text">
          <h1>Register Here!</h1>
          <div></div>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" name='name' value={name} onChange={handleChange} />
          <input type="email" placeholder="Enter Email" name='email' value={email} onChange={handleChange} />
          <input type="password" placeholder="Enter Password" name='password' value={password} onChange={handleChange} />
          <input type="password" placeholder="Confirm Password" name='password2' value={password2} onChange={handleChange} />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
