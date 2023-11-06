
export function ShopperHomeComp(){
    return(
        <div className="container-fluid">
            
            <div className="m-3">
                <img src="women.jpg" height={500} width={200} alt="women"/>
                <img src="men.jpg" height={500} width={430} alt="men"/>
                <img src="kid.jpg" height={500} width={440} alt="kid"/>
            </div>
            <div className="d-flex justify-content-between m-4 p-3">
                <button className="btn btn-dark w-25">Women<span className="bi bi-arrow-right ms-2"/></button>
                <button className="btn btn-dark w-25">Men<span className="bi bi-arrow-right ms-2"/></button>
                <button className="btn btn-dark w-25">Kids<span className="bi bi-arrow-right ms-2"/></button>
            </div>
        </div>
    )
}

