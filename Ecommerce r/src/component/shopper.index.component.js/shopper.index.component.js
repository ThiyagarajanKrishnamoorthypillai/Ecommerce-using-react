import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import { ShopperCategoryComp } from "../shopper.component.home/shopper.component.category";
import { ShopperHomeComp } from "../shopper.Home/shopper.home";
import { ShopperDetailsComp } from "../Shopper.Details/shopper.details";
import { ShopperRegisterComp } from "../shopper.Register/shopper.register";
import { ShopperLoginComp } from "../shopper.Login/shopper.Login";
import { ShopperInvalidComp } from "../shopper.Invalid/shopper.invalid";
import {useCookies} from "react-cookie";



export function ShopperIndexComp(){
    const [cookie, setCookie, removeCookie] = useCookies();
    function SignOut(){
        removeCookie("UserId");
       
    }
    return (
        <div className="conatiner-fluid">
           <BrowserRouter>
           <header className="d-flex  justify-content-between p-2 m-2">
                <div><h2>Shopper.</h2></div>
                <nav className="">
                    <span><Link className="btn" to="home">Home</Link></span>
                    <span><Link className="btn" to="category/men's clothing">Men's Clothing</Link></span>
                    <span><Link className="btn" to="category/women's clothing">Women Clothing</Link></span>
                    <span><Link className="btn" to="category/jewelery">Jewellery</Link></span>
                    <span><Link className="btn" to="category/electronics" ><b>Sign in</b></Link></span>
                </nav>  
                <div className="p-2 ">
                    <button className="btn btn-link" onClick={SignOut}>SignOut</button>
                    <span className="m-2">Hello-{cookie["UserId"]}</span>
                    <span className="me-2 bi bi-heart"/>
                    <span className="me-4 bi bi-cart4"/>
                </div>
            </header>
            <div className="bg-dark text-white text-center p-2">
           <p> ⚡️ HAPPY HOLIDAY DEALS ON EVERYTHING ⚡️</p>
            </div>
           
            <Routes>
              <Route path="home" element={<ShopperHomeComp/>}/>
              <Route path="/" element={<ShopperHomeComp/>}/>
              <Route path="category/:catname" element={<ShopperCategoryComp />} />
              <Route path="*" element={<img src="Error.jpg" height={600} width={1200} alt="error"/>}/>
              <Route path="details/:id" element={<ShopperDetailsComp/>}/>
              <Route path="register" element={<ShopperRegisterComp/>}/>
              <Route path="login" element={<ShopperLoginComp/>}/>
              <Route path="invalid" element={<ShopperInvalidComp/>}/>
            </Routes>
           </BrowserRouter>
            
        
        </div>
    )
}