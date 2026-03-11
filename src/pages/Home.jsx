import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"

const slider = [
    {
        id: 1,
        title: "Slider 1",
        img: banner1
    },
    {
        id: 2,
        title: "Slider 2",
        img: banner2
    },
    {
        id: 3,
        title: "Slider 3",
        img: banner3
    }
];
export default function Home() {
    const [current, setcurrent] = useState(0);

    useEffect(() => {
        const homeslider = setInterval(() => {
            setcurrent((prev) => (prev + 1) % slider.length);
        }, 3000);

        return () => (clearInterval(homeslider));
    }, []);

    const leftbutton = () => {
        if (current === 0) {
            setcurrent(slider.length - 1);
        }
        else {
            setcurrent(current - 1);
        }
    }
    const rightslider = () => {
        setcurrent((current + 1) % slider.length)
    }

    const [movie, setmovie] = useState([])

    const handlemovie = async () => {
        let fetchapi = await fetch("https://fooapi.com/api/movies");
        let apidata = await fetchapi.json();
        setmovie(apidata.data.slice(0, 6))
        console.log(apidata);
    }

    useEffect(() => {
        handlemovie();

        return () => {
            console.log("Dead");
        }
    }, [])
    return (
        <>
            <div className="slider">
                <img src={slider[current].img} />
                <div className="caption">
                    <h1>{slider[current].title}</h1>
                </div>
                <button className="prev" onClick={leftbutton}>&#10094;</button>
                <button className="next" onClick={rightslider}>&#10095;</button>

            </div>
            <div className="movi">
                {
                    movie.map((da) => (
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