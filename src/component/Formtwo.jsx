import React from "react";
import { useForm } from "react-hook-form";

export default function Formtwo() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const handledata = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form>
                <label>Name:</label>
                <input {...register("name", {
                    required: "Name is requied",
                    minLength: { value: 3, message: "Name must be at least 3 letters" }
                })} placeholder="Name" />
                <br />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                <br />
                <label>Age:</label>
                <input {...register("age", {

                    required: "Age is requied",
                    min: { value: 1, message: "Age must be at least 1" },
                    max: { value: 60, message: "Age must be below 60" }
                })} placeholder="age" />
                <br />
                {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
                <br />
                <button onClick={handleSubmit(handledata)}>Submit</button>
            </form>
        </div>
    )
}
