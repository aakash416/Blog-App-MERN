import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
    const navagate = useNavigate();
    const handlLogOut = () => {
        toast.warn("User Logged Out")
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navagate("/login")
    }
    const userId = localStorage.getItem("userId")
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"} >
                        My Blog
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            {
                                userId && (<li className="nav-item">
                                    <Link className="nav-link" to={"/my-blog"}>
                                        My Blogs
                                    </Link>
                                </li>)
                            }
                            {
                                userId && (<li className="nav-item">
                                    <Link className="nav-link" to={"/new"}>
                                        Create New Blog
                                    </Link>
                                </li>)
                            }
                            {
                                !userId && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>
                                            Login
                                        </Link>
                                    </li>
                                )
                            }
                            {
                                !userId && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/signup"}>
                                            SignUp
                                        </Link>
                                    </li>
                                )

                            }
                            {
                                userId && (<li className="nav-item">
                                    <Link className="nav-link" onClick={handlLogOut}>
                                        Log Out
                                    </Link>
                                </li>)
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header