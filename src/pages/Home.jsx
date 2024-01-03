import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

  const { user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {

    if(!user){
      navigate("/login")
      toast.error('Unauthorized Access')
    }

  },[user])

  return (
    <div className='home'>
      <h1>Home</h1>
    </div>
  )
}

export default Home
