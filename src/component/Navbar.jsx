import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <header class="navbar-dark bd-navbar">
            <nav className="navbar navbar-expand-lg bg-primary-hd" data-bs-theme="dark" style={{ backgroundColor: "#563d7c" }}>
                <a class="navbar-brand" href="#">M</a>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/movielist"}>Movie List</Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link className="nav-link" to={"/productUseff"}>Product</Link>
                        </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/groceryList"}>Grocery List</Link>
                            </li> */}
                            {/* 
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={""}>Forms</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/formone"}>Form One</Link></li>
                                    <li><Link className="dropdown-item" to={"/formtwo"}>Form two</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}