import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function () {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handledata = async (da) => {
        try {
            const response = await axios.post("http://localhost:5000/login",
                {
                    email: da.mail,
                    password: da.pass
                }
            );
            localStorage.setItem("token", response.data.token);
            console.log("Login successfull", response.data);
            alert("Login successfull");
            navigate("/dashboard");
        }
        catch (error) {
            // console.log(error.response?.data?.message || error.message);
            alert("Login failed");
        }
    }


    // const [apidata, setapidata] = useState();
    // const api = async () => {
    //     let fetchdata = await fetch("URL");
    //     let data = fetchdata.json();
    //     console.log(data);

    // }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit(handledata)}>
                <label>Email:</label>
                <input {...register("mail", {
                    required: "Enter your mail"
                })} type="email" placeholder="Email Id" />
                {errors.mail && <p style={{ color: "red" }}>{errors.mail.message}</p>}
                <br />
                <label>Password:</label>
                <input {...register("pass", {
                    required: "Enter pass",
                    minLength: { value: 6, message: "password must be 6 charactor" }
                })} type="password" />
                <br />
                {errors.pass && <p style={{ color: "red" }}>{errors.pass.message}</p>}
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}