import {  useFormik , Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';

export function ShopperLoginComp(){
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    return(
        <div className="container-fluid m-4 p-2 d-flex aligns-items-center justify-content-center">
           
            <Formik 
              initialValues={{
                 "UserId":"",
                 "Password":""
              }}
              onSubmit={
                (values)=>{
                    axios({
                        method: "get",
                        url: "http://127.0.0.1:8080/users"
                    })
                    .then(response=>{
                        for(var user of response.data){
                            if(user.UserId===values.UserId && user.Password===values.Password) {
                                setCookie("UserId",values.UserId)
                                navigate("/home");
                                break;
                            } else {
                                navigate("/invalid");
                            }
                        }
                    })
                }
              }
            >
            {
                 
                <Form >
                   <span className="bi bi-person-fill"> <b>User Login</b></span>
                    <dl>
                        <dt className="form-label">User Id</dt>
                        <dd><Field className="form-text" type="text" name="UserId" /></dd>
                        <dt className="form-label">Password</dt>
                        <dd><Field type="password" className="form-text" name="Password" /></dd>
                    </dl>
                    <button className="btn btn-success w-75">Login</button>
                    <div>
                        <Link to="/register" className="btn btn-link">New User? Register</Link>
                    </div>
                </Form>
            }
            </Formik>
        </div>
    )
}