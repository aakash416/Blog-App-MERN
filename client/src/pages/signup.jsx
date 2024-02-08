import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { createUser } from '../service/AuthService';
import InputForm from '../components/InputForm';
import ButtonForm from '../components/ButtonForm';
const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        }
    }, [navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(firstName, lastName, email, password, phoneNumber)
            .then(() => {
                toast.success("Registration Completed Successfully")
                navigate("/login")
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.warn(error.response.data.message);
            });
    }
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <InputForm value={firstName} setValue={setFirstName} inputName={"First Name"} type={"text"} id={"firstName"} />
                        <InputForm value={lastName} setValue={setlastName} inputName={"Last Name"} type={"text"} id={"lastName"} />
                        <InputForm value={email} setValue={setEmail} inputName={"Email"} type={"email"} id={"email"} />
                        <InputForm value={password} setValue={setPassword} inputName={"Password"} type={"password"} id={"password"} />
                        <InputForm value={phoneNumber} setValue={setPhoneNumber} inputName={"Phone Number"} type={"number"} id={"phoneNumber"} />
                        <ButtonForm value={"Sign Up"} />
                    </form>
                    <span>If you ha ave already account then please <Link to={"/login"}>Clicke here</Link> </span>
                </div>
                <div className="col"></div>
            </div>
        </div>


    )
}

export default Signup