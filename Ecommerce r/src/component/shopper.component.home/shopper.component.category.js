import {useNavigate, useParams} from 'react-router-dom';
import {Routes,Route,Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import {useCookies} from 'react-cookie';
import { Navigate } from 'react-router-dom';

export function ShopperCategoryComp(){

    const params = useParams();
    const [product, setProduct]= useState([]);
    const [cookie, setCookie,removeCookie] = useCookies();
    const navigate = useNavigate();
   
    useEffect(()=>{
        if(cookie["UserId"]== undefined){
            navigate("/login")
        }
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/category/${params.catname}`,
        })
        .then(response=> {
            setProduct(response.data);
        })
    },[params.catname])
   
    return(
        <div className="container-fluid">
            <div className='d-flex flex-wrap'>
                {
                    product.map(product=>
                      <div className='card m-2 p-4' style={{width:'300px'}} key={product.id}>  
                      <img src={product.image} height={250} width={250} alt={product.title}/>
                      <div className='card-header' style={{height:'200px'}}>
                        <p>{product.title}</p>
                      </div>
                      <div className='card-footer'>
                        <Link to={'/details/'+ product.id} className='btn btn-warning w-100 text-center'>Details</Link>
                      </div>
                      </div>
                        ) 
                }

            </div>
        </div>
    )
}