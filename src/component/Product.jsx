import React, { useState } from "react";

const star = {
    image:(<svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)
};

export default function Product(){
    
    const [data,setdata] = useState([]);

const api = async ()=>{
let fetchdata = await fetch("https://fakestoreapi.com/products");
let apidata = await fetchdata.json();

setdata(apidata);
}


    return(
        <>
        <h1>PRODUCTS</h1>
<button onClick={api}>Products</button>
<div className="product">
{
    data.map((de)=>(
       <div class="card">
 <div class="badge">HOT SALE</div>
 <div class="tilt">
  <div class="img"><img src={de.image} /></div>
 </div>
 <div class="info">
  <div class="cat">{de.category}</div>
  <h2 class="title">{de.title}</h2>
  <p class="desc">{de.description}</p>
  {/* <div class="feats">
   <span class="feat">4K Display</span>
   <span class="feat">16-Hour Battery</span>
   <span class="feat">Thunderbolt 4</span>
  </div> */}
  <div class="bottom">
   <div class="price">
    <span class="old">{de.price+200}</span>
    <span class="new">{de.price}</span>
   </div>
   <button class="btnn">
    <span>Add to Cart</span>
    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
     <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
     <line x1="3" y1="6" x2="21" y2="6"/>
     <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
   </button>
  </div>
  <div class="meta">
   <div class="rating">
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
    <span class="rcount">{de.rating.count}</span>
   </div>
   <div class="stock">In Stock</div>
  </div>
 </div>
</div>

    ))
}
</div>

        </>
    )
}