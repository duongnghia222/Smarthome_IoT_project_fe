import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useNavigate } from "react-router"
import * as Yup from 'yup';
import "./Login.scss"
import { ErrorMessage, Field, Form, Formik } from "formik"

const Login = () => {
    const navigate = useNavigate();
    const { login, error, isLoading } = useLogin()
    return (
        <div className='body-login'>
            <div className='body-login-left'>
                <img src='./farm.jpg' />
            </div>
            <div className='body-login-right'>
                <h2>Welcome To Strawberry farm</h2>
        
                <Formik
       initialValues={{password: '', email: '' }}
       validationSchema={Yup.object({
         password: Yup.string()
           .min(8, 'Must be 8 characters or than')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={async (values, { setSubmitting }) => {
        await login(values.email, values.password)
        navigate("/")
       }}
     >
       <Form>
         <label htmlFor="email">Eamil Addesss</label>
         <Field name="email" type="text" />
         <ErrorMessage name="email">{msg=><div className="errorMessage">{msg}</div>}</ErrorMessage>
 
         <label htmlFor="password">Passwrod</label>
         <Field name="password" type="password"/>
         <ErrorMessage name="password" className="errorMessage">{msg=><div className="errorMessage">{msg}</div>}</ErrorMessage>
 
         <button type="submit" className="btn-login">Submit</button>
         <button type="button" className="btn-signup" onClick={()=>navigate("/signup")}>Go to Signup</button>

       </Form>
     </Formik>
            </div>
        </div>
    )
}

export default Login