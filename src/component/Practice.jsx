import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function () {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const handledata = (data) => {
        // fake backend response
        const response = {
            token: "dummy-jwt-token-123"
        };

        console.log("Login Success:", response);

        // store token
        if (response.token) {
            localStorage.setItem("token", response.token);
            window.location.href = "/dashboard";
        }
    };


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