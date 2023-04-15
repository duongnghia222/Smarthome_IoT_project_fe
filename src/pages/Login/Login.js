import { Form, ButtonToolbar, Button, Panel, Divider } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Login.scss"
import {
  IconGithub,
  IconGoogle,
  IconFacebook,
  IconSign,
  IconCheck,
} from "../../assets/icon";


// import { setIdUser } from "@/store/userSlice";
// import { Toast } from "@/instance/toast.js";
// import { assignToken } from '@/utils';
// import api from "@/api/index.js";


const pathLoginAccount = "api/user/login";

function Login() {
  let navigate = useNavigate();
  // const dispatch = useDispatch();
  const [form, setForm] = useState({});

  useEffect(() => {
    window.document.title = 'Login Page';
  }, [])

  function loginAccount() {
    // const request = api.post(pathLoginAccount, form);
    // Toast({
    //   type: "promise",
    //   promise: request,
    //   payloadMessage: {
    //     loading: "Đang đăng nhập!",
    //     success: (response) => {
    //       try {
    //         const accessToken = response.data.accessToken;
    //         const refreshToken = response.data.refreshToken;
    //         assignToken({ accessToken, refreshToken }, (payload) => {
    //           dispatch(setIdUser(payload.idUser));
    //           navigate(`/dashboard/general`);
    //         })
    //         return "Bạn đã đăng nhập thành công👻";
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     },
    //     error: (err) => {
    //       return "Không thể đăng nhập!";
    //     },
    //   },
    // });
  }

  function hanldeKeyUp(event) {
    if (event.key === "Enter") {
      loginAccount();
    }
  }

  return (
    <div className=" flex justify-center items-center px-6">
      <div className="mx-auto w-[410px] min-w-[320px] my-3">
        <Panel
          className="mb-2.5 login-panel"
          header={<h3 className="text-center text-3xl">Đăng nhập</h3>}
          bordered
        >
          <Form
            fluid
            onKeyUp={hanldeKeyUp}
            onChange={(dataForm) => {
              setForm(dataForm);
            }}
          >
            <Form.Group>
              <Form.ControlLabel>Tên đăng nhập</Form.ControlLabel>
              <Form.Control name="name" className="w-full flex align-center justify-center"/>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Mật khẩu</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group className="relative pb-10">
              <ButtonToolbar>
                <Button
                  onClick={loginAccount}
                  className="w-full flex align-center justify-center leading-normal"
                  appearance="primary"
                >
                  Đăng nhập
                  <IconSign className="ml-2" />
                </Button>
                <Button className="absolute right-0 bottom-0" appearance="link">
                  Liệu bạn có, quên mật khẩu?
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Panel>
        <Divider>hoặc</Divider>
        <Panel className="mt-2.5" bordered>
          <Form.Group>
            <Button
              className="w-full mb-2.5 flex align-center justify-center leading-normal"
              appearance="primary"
              onClick={() => {
                navigate(`/signup`);
              }}
              block
              size="md"
            >
              Tiến hành đăng ký
              <IconCheck />
            </Button>
            <Divider>
              đăng nhập với
            </Divider>
            <div className="w-min flex m-auto">
              <div className="wrap w-8 h-8 relative cursor-pointer	">
              <div className="inset-0 bg-black absolute rounded-full"></div>
                <IconGithub
                  className="fill-white absolute left-0 top-0"
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-2.5 wrap w-8 h-8 cursor-pointer	">
                <IconGoogle className="fill-white" width={32} height={32} />
              </div>
              <div className="ml-2.5 wrap w-8 h-8 cursor-pointer	">
                <IconFacebook className="fill-white" width={32} height={32} />
              </div>
            </div>
          </Form.Group>
        </Panel>
      </div>
    </div>
  );
}

export default Login;
















































































// import { useState } from "react"
// import { useLogin } from "../../hooks/useLogin"
// import { useNavigate } from "react-router"
// import * as Yup from 'yup';
// import "./Login.scss"
// import { ErrorMessage, Field, Form, Formik } from "formik"

// const Login = () => {
//     const navigate = useNavigate();
//     const { login, error, isLoading } = useLogin()
//     return (
//         <div className='body-login'>
//             <div className='body-login-left'>
//                 <img src='./smart-home.png' />
//             </div>
//             <div className='body-login-right'>
//                 <h2>Welcome To Smart Home</h2>
        
//                 <Formik
//        initialValues={{password: '', email: '' }}
//        validationSchema={Yup.object({
//          password: Yup.string()
//            .min(8, 'Must be 8 characters or than')
//            .required('Required'),
//          email: Yup.string().email('Invalid email address').required('Required'),
//        })}
//        onSubmit={async (values, { setSubmitting }) => {
//         await login(values.email, values.password)
//         navigate("/")
//        }}
//      >
//        <Form>
//          <label htmlFor="email">Email Addesss</label>
//          <Field name="email" type="text" />
//          <ErrorMessage name="email">{msg=><div className="errorMessage">{msg}</div>}</ErrorMessage>
 
//          <label htmlFor="password">Password</label>
//          <Field name="password" type="password"/>
//          <ErrorMessage name="password" className="errorMessage">{msg=><div className="errorMessage">{msg}</div>}</ErrorMessage>
 
//          <button type="submit" className="btn-login">Submit</button>
//          <button type="button" className="btn-signup" onClick={()=>navigate("/signup")}>Go to Signup</button>

//        </Form>
//      </Formik>
//             </div>
//         </div>
//     )
// }

// export default Login