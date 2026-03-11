import React, { useEffect, useState } from "react";
export default function Movielist() {
    const [search, setsearch] = useState("");
    const [movie, setmovie] = useState([])

    const handlemovie = async () => {
        let fetchapi = await fetch("https://fooapi.com/api/movies");
        let apidata = await fetchapi.json();
        setmovie(apidata.data)
        console.log(apidata);
    }

    useEffect(() => {
        handlemovie();

        return () => {
            console.log("Dead");
        }
    }, [])

    const searchmovie = movie.filter((da) =>
        da.title.toLowerCase().includes(search.toLowerCase())
    );

    const handlesubmit = (e) => {
        e.preventDefault();
    }

    const handleinput = (e) => {
        setsearch(e.target.value);
    }

    return (
        <>
            <form onSubmit={handlesubmit} className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}
                    onChange={handleinput} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className="movi">
                {
                    searchmovie.map((da) => (
                        <div>
                            <div className="container">
                                <div className="cellphone-container">
                                    <div className="movie">
                                        <div className="movie-img" style={{ background: `url(${da.poster})` }}></div>
                                        <div className="text-movie-cont">
                                            <div className="mr-grid">
                                                <div className="col1">
                                                    <h4>{da.title}</h4>
                                                    <ul className="movie-gen">
                                                        <li>{da.year} / </li>

                                                        <li>{da.runtime}  /</li>
                                                        <li>{da.genre}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mr-grid summary-row">
                                                <div className="col1">
                                                    <h5>SUMMARY</h5>
                                                </div>
                                            </div>
                                            <div className="mr-grid">
                                                <div className="col1">
                                                    <p className="movie-description">{da.plot}</p>
                                                </div>
                                            </div>
                                            <div className="mr-grid actors-row">
                                                <div className="col1">
                                                    <p className="movie-actors">{da.writer}</p>
                                                </div>
                                            </div>
                                            <div className="mr-grid action-row">
                                                <div className="col2"><div className="watch-btn"><h6>WATCH TRAILER</h6></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        </div>
                    ))}
            </div>
        </>
    )
}