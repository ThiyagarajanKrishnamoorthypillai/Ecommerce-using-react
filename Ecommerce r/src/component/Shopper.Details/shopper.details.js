import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios  from "axios";

export function ShopperDetailsComp(){
  const [detailsData, setDetails] = useState({title:'',price:0,description:'',image:'',rating:{rate:0,count:0}});
  const params = useParams();
  useEffect(
    ()=>{
        axios({
            method:'get',
            url:`http://fakestoreapi.com/products/${params.id}`,
        }).then(response =>{
            setDetails(response.data);
        })
    },[params.id]);
  
    return (
        <div className="container-fluid">
            <div className="row mt-3 p-4" key={detailsData.id}>
              <div className="col-4">
                <img src={detailsData.image} alt={detailsData.title} height={500} width={400}/>
              </div>
                <div className="col-4">
                    <dl>
                     <dt>Name</dt>
                     <dd>{detailsData.title}</dd>
                     <dt className="mt-3">Description</dt>
                     <dd>{detailsData.description}</dd>
                     <dt className="mt-3">price</dt>
                     <dd> &#8377;{detailsData.price}</dd>
                     <dt className="mt-3">Rate</dt>
                     <dd><span className="bi bi-star-fill "/>
                     <span className="bi bi-star-fill "/><span className="bi bi-star-fill "/><span className="bi bi-star-fill "/><span className="bi bi-star-half"/>
                     {detailsData.rating.rate}[{detailsData.rating.count}]</dd>
                     </dl>
                     <button className="btn btn-warning w-50">Add to cart</button>
                     <div>
                     <Link to={"/category/" + detailsData.category}>Back to {detailsData.category}</Link>
                     </div>
               </div>
               <div className="col-4">

               </div>
            </div>  
         </div>
    )
}