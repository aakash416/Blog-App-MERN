import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../service/AuthService';
import InputForm from '../components/InputForm';
import ButtonForm from '../components/ButtonForm';

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
            localStorage.setItem("userId", res.data.userData.userId);
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
                            <InputForm value={email} setValue={setEmail} inputName={"Email"} type={"email"} id={"email"} />
                            <InputForm value={password} setValue={setPassword} inputName={"Password"} type={"password"} id={"password"} />
                            <ButtonForm value={"Login"} />
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