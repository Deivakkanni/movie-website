import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function GroceryList() {

    const [item, setItem] = useState("") // input data
    const [list, setList] = useState([]) // product list

    const handleitem = (e) => {
        setItem(e.target.value);
    }

    const handleget = async () => {
        let api = await axios.get("http://localhost:3000/todoList") // get data from backend
        setList(api.data);
        console.log(api);
    }

    useEffect(() => {
        handleget();
    }, [])

    const handleadd = async () => {
        let body = {
            list: item
        }
        let api = await axios.post("http://localhost:3000/todoList", body) // send data to backend
        handleget();
    }

    const handledelete = async (id) => {
        let api = await axios.delete("http://localhost:3000/todoList/" + id) // delete from backend
        handleget();
    }

    const handleedit = async (data) => {
        let apidata = prompt("Edit your item", data.list);
        let body = {
            id: data.id,
            list: apidata
        }
        let api = await axios.put("http://localhost:3000/todoList/" + data.id, body)
        handleget();
    }

    return (
        <div>
            <h1>Grocery List</h1>
            <input onChange={handleitem} placeholder='Enter your items' />

            <button onClick={handleadd} type="button" class="btn btn-primary ms-3">Add {" "}</button>
            {
                list.map((da, i) => (
                    <div key={i}>
                        <h4>{i + 1}. {da.list}</h4>
                        <button onClick={() => handleedit(da)} type="button" class="btn btn-secondary ms-3">edit {" "}</button>
                        <button onClick={() => handledelete(da.id)} type="button" class="btn btn-danger ms-3">delete</button>
                        {/* with function () data automatically can access, so we add arrow function */}
                    </div>

                ))

            }
        </div>
    )
}