
import * as yup from "yup";
import { useFormik ,Formik,Form,Field,ErrorMessage} from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export function ShopperRegisterComp(){
    const navigate = useNavigate();
    return(
      <div className="container-fluid m-4 p-2 d-flex aligns-items-center justify-content-center">
            <Formik 
              initialValues={{
                "UserId":"",
                "UserName":"",
                "Mobile":"",
                "Age":0,
                "Email":"",
                "Password":""
              }}
              validationSchema={yup.object({
                UserId:yup.string().required("UserId required").max(8,"UserId Should not be greater then 8").min(4,"UserId should not be less then 4"),
                UserName:yup.string().required("Name Required").max(10,"UserName Should not be greater then 10").min(4,"UserName should not be less then 4").matches(/(?=.*[A-z])\w{4,10}/,"First Letter should be capital"),
                Mobile:yup.string().matches(/\+91\d{10}/,"Invalid"),
               Age:yup.number().required("Age required"),
               Email:yup.string().required("Email Required").email("Invalid Email"),
               Password:yup.string().required("Password required").matches(/(?=.*[A-Z])(?=.*[0-9])(?=.*\W)\w{6,10}/,"Should have One Uppercase letter,Number and special symbol")
              })}
              onSubmit={
                (values)=>{
                    axios({
                        method:"post",
                        url:"http://127.0.0.1:8080/registeruser",
                        data:values
                    }).then(()=>{
                        alert("register succesfully");
                        navigate("/login")
                    })
                }
              }
            >
              
                <Form>
                <h2><span className="bi bi-person"/>Sign Up</h2>

                  <dl>
                    <dt className="form-label">UserId</dt>
                    <dd className="form-label-text"><Field type="text" name="UserId" /></dd>
                    <dd className="text-danger"><ErrorMessage name="UserId"/></dd>
                    <dt className="form-label">Name</dt>
                    <dd className="form-label-text"><Field type="text" name="UserName" /></dd>
                    <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                    <dt className="form-label">Mobile</dt>
                    <dd className="form-label-text"><Field type="text" name="Mobile" /></dd>
                    <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                    <dt className="form-label">Age</dt>
                    <dd className="form-label-text"><Field type="text" name="Age" /></dd>
                    <dd className="text-danger"><ErrorMessage name="Age"/></dd>
                    <dt className="form-label">Email</dt>
                    <dd className="form-label-text"><Field type="text" name="Email" /></dd>
                    <dd className="text-danger"><ErrorMessage name="Email"/></dd>
                    <dt className="form-label">Password</dt>
                    <dd className="form-label-text"><Field type="password" name="Password" /></dd>
                    <dd className="text-danger"><ErrorMessage name="Password"/></dd>
                  </dl>
                  <button className="btn btn-warning w-50">Register</button>
                  <div>
                <Link  to={"/login"}>Existing User? Login</Link>
            </div>

                </Form>
            </Formik>
        </div>
    )
}