import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <footer style={{ backgroundColor: "rgb(86, 61, 124)" }} className="text-light pt-3 pb-1 mt-auto" >
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 mb-1">
                            <p className="mb-0">© 2026 My Movie Application | All Rights Reserved</p>

                        </div>
                        <div className="col-md-6 mb-1">
                            <ul className="foot">
                                <li><Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li><Link className="nav-link" to={"/movielist"}>Movie List</Link></li>
                                <li><Link className="nav-link" to={"/groceryList"}>Grocery List</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}