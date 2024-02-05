import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../service/AuthService';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("userId")) {
            navigate("/")
        }
    }, [navigate])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        loginUser(email, password).then(res => {
            toast.success("User login successfully");
            localStorage.setItem("token", JSON.stringify(res.data.Token));
            localStorage.setItem("userId", JSON.stringify(res.data.userData.userId));
            navigate("/");
        }).catch(error => {
            console.error("Error submitting form:", error);
            toast.warn(error.response.data.message);
        })
    };

    return (
        <>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name='email'
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                        <span>If you dont have account then please <Link to={"/signup"}>Clicke here</Link> </span>
                    </div>
                    <div className="col"></div>
                </div>
            </div >




        </>
    )
}

export default Login