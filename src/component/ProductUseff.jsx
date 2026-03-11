import React, { useEffect, useState } from "react";
import '../App.css'

const star = {
    image:(<svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)
};

export default function ProductUseff(){
    const [prouseeff, setProuseeff] = useState([])

    const api = async () => {
        const apidata = await fetch("https://fakestoreapi.com/products");
        const data = await apidata.json();
        setProuseeff(data);
    }

    useEffect(() => {
        api(); // mounting
        return () => {
            console.log("Session log out"); // unmounting
        } 
    },[prouseeff]) // updating
    return (
        <div>
            <h1>Product Display using Use Effect</h1>
            <div className="product">

{
prouseeff.map((de)=>(
     <div className="card">
 <div className="badge">HOT SALE</div>
 <div className="tilt">
  <div className="img"><img src={de.image} /></div>
 </div>
 <div className="info">
  <div className="cat">{de.category}</div>
  <h2 className="title">{de.title}</h2>
  <p className="desc">{de.description}</p>
  {/* <div className="feats">
   <span className="feat">4K Display</span>
   <span className="feat">16-Hour Battery</span>
   <span className="feat">Thunderbolt 4</span>
  </div> */}
  <div className="bottom">
   <div className="price">
    <span className="old">{de.price+200}</span>
    <span className="new">{de.price}</span>
   </div>
   <button className="btnn">
    <span>Add to Cart</span>
    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
     <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
     <line x1="3" y1="6" x2="21" y2="6"/>
     <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
   </button>
  </div>
  <div className="meta">
   <div className="rating">
    {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> */}
<span className="rcount">
  {
    Array.from({ length: Math.round(de.rating.rate) }).map((_, i) => (
      <span key={i}>{star.image} </span>
    ))
  }
</span> <span>({de.rating.rate})</span>
    <span className="rcount">{de.rating.count}</span>
   </div>
   <div className="stock">In Stock</div>
  </div>
 </div>
</div>
))}
</div>

        </div>
    )
}