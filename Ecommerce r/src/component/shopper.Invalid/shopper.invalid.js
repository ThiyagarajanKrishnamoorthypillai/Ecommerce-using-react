import { Link } from "react-router-dom";



export function ShopperInvalidComp(){
    return(
        <div className="text-danger">
            <h2>Invalid UserId / Password</h2>
            <div>
                <Link to="/login">Try again</Link>
            </div>
        </div>
    )
}