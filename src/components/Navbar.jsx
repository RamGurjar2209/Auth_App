import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../features/auth/authSlice'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {

        dispatch(logOutUser())
        navigate("/login")

    }

    return (
        <>
            <nav>
                <Link to={"/"}> <a href="">Auth App</a></Link>
                <div className="btn-container">

                    {
                         !user ? (
                            <>
                                <Link to={"/login"}><button className="login-btn">LOGIN</button></Link>
                                <Link to={"/register"}><button className="register-btn">REGISTER</button></Link>
                            </>
                        ) : (

                                <button className="logout-btn" onClick={handleLogOut}>LOGOUT</button>
                            )
                    }

                </div>
            </nav >
        </>
    )
}

export default Navbar
