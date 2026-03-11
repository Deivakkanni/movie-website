import Apidata from './component/Apidata'
import Count from './component/Count'
import './App.css'
import React, { useState } from 'react'
import Product from './component/Product'
import Name from './component/Name'
import Array from './component/Array'
import ProductUseff from './component/ProductUseff'
import UsEffect from './component/UsEffect'
import Formtwo from './component/Formtwo'
import Formone from './component/Formone'
import Object from './component/Object'
import Square from './component/Square'
import Practice from './component/Practice'
import Userefrence from './component/Userefrence'
import CompA from './component/CompA'
import CompAcontextApi from './component/CompAcontextApi'
import { CounterProvider } from './component/context/CounterProvider'
import CompB from './component/CompB'
import GroceryList from './component/GroceryList'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Movielist from './pages/Movielist'
import Footer from './component/Footer'
import Countuseeffect from './component/Countuseeffect'


export default function App() {
      // useEffect unmounting stage
      const [hide, setHide] = useState(true);
      const handlefalse = () => {
            setHide(false);
      }

      //CompA,CompB

      const [name, setName] = useState("Arun");
      const [count, setCount] = useState(0)
      const handleadd = (data) => {
            setCount(count + 1)
            console.log(data);
      }

      return (
            <BrowserRouter>
                  {/* <h1>Name: Deivakanni V </h1> */}
                  {/* <CounterProvider> */}

                  {/* {hide ? <UsEffect /> :"Loged out please login"}
                        {hide && <button onClick={handlefalse}>Log out</button> }  */}

                  {/* <hr></hr>
     {hide? <ProductUseff />:"Loged out please login"}
           <button onClick={handlefalse}>Log Out</button>   */}


                  {/* <hr></hr>

<Count />
<hr></hr>

<Name />
<hr></hr>

<Array />
<hr></hr>

<Apidata />
<hr></hr> */}

                  {/* <Product />
<hr></hr> */}

                  {/* <ProductUseff /> */}

                  {/* <hr></hr>
     
{/* <Object /> */}
                  {/* <hr></hr>
    
{/* <Formone />
<hr></hr> */}

                  {/* <Formtwo />
                  <hr></hr> */}



                  {/* <Square />  
<hr></hr>*/}

                  {/* <Userefrence /> 
<hr></hr>*/}

                  {/* <CompA name={name} age={25}/> */}
                  {/* <CompA nm={"Deva"} age={28} count={count}/> */}
                  {/* <CompA count={count} handleadd={handleadd} /> 
      <hr></hr>*/}

                  {/* <CompAcontextApi />
      <CompB />
<hr></hr> */}
                  {/* <Link to={"/"}>Home</Link>
                  <Link to={"/apidata"}>Apidata</Link>
                  <Link to={"/groceryList"}>GroceryList</Link>
                  <Link to={"/form"}>Contact Us</Link>

                  <Routes>
                        <Route element={<ProductUseff />} path='/' />
                        <Route element={<Apidata />} path='/apidata' />
                        <Route element={<GroceryList />} path='/groceryList' />
                        <Route element={<Formtwo />} path='/form' />
                  </Routes> */}


                  {/* <Practice /> 
                  <hr></hr>*/}
                  {/* </CounterProvider> */}
                  {/* <Home /> */}
                  {/* <Login /> */}
                  {/* <Countuseeffect /> */}
                  <main>

                        <Navbar />
                        <Routes>
                              <Route element={<Home />} path='/' />
                              <Route element={<Movielist />} path='/movielist' />
                              {/* <Route element={<ProductUseff />} path='/productUseff' /> */}
                              <Route element={<GroceryList />} path='/groceryList' />
                              <Route element={<Formone />} path='/formone' />
                              <Route element={<Formtwo />} path='/formtwo' />
                              <Route element={<Login />} path='/login' />

                              <Route element={<Dashboard />} path='/dashboard' />

                        </Routes>
                        <Footer />
                  </main>
            </BrowserRouter>
      )
}


