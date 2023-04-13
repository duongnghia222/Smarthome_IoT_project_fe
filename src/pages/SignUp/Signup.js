import { Form, Button, Panel } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
// import { setIdUser } from "@/store/userSlice";
// import { Toast } from '@/instance/toast.js';
import LoginIcon from '@mui/icons-material/Login';
import ReplayIcon from '@mui/icons-material/Replay';
// import { assignToken } from '@/utils';

// import api from "@/api/index.js";
// import { IconUndo, IconSign } from "@/icons";

const pathSignupAccount = "api/user/Signup";

function Signup() {
  let navigate = useNavigate();
//   const dispatch = useDispatch();
  const [form, setForm] = useState({});
//   const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);

  useEffect(() => {
    window.document.title = 'Miru | Signup Page';
  }, [])

  function resgisterAccount() {
    // try {
    //   const request = api.post(pathSignupAccount, form);
    //   Toast({
    //     type: 'promise', 
    //     promise: request,
    //     payloadMessage: {
    //       loading: "Đang tạo tài khoản!",
    //       success: (response) => {
    //         const accessToken = response.data.accessToken;
    //         const refreshToken = response.data.refreshToken;
    //         assignToken({ accessToken, refreshToken }, (payload) => {
    //           dispatch(setIdUser(payload.idUser));
    //           navigate(`/dashboard/general`);
    //         })
    //         return "Bạn đã tạo tài khoản thành công👻";
    //       },
    //       error: "Không thể tạo tài khoản!",
    //     }
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="h-screen flex justify-center items-center px-6">
      <div className="mx-auto  w-[410px] min-w-[320px]">
        <Panel
          header={<h3 className="text-center text-3xl">Đăng ký</h3>}
          bordered
        >
          <Form
            fluid
            onChange={(dataAccount) => {
              setForm(dataAccount);
            }}
          >
            <Form.Group>
              <Form.ControlLabel>Tên đăng ký</Form.ControlLabel>
              <Form.Control name="name" type="text" placeholder="vd: jakob" />
              <Form.HelpText tooltip>Tên tài khoản là bắt buộc!</Form.HelpText>
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control
                name="email"
                type="text"
                autoComplete="off"
                placeholder="vd: name@gmail.com"
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Mật khẩu</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Nhập lại mật khẩu</Form.ControlLabel>
              <Form.Control
                name="re-password"
                type="password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <Button
                className="flex align-center justify-center leading-normal"
                block
                appearance="primary"
                size="md"
                onClick={resgisterAccount}
              >
                Đăng ký
                <LoginIcon className="ml-2" />
              </Button>
            </Form.Group>
            <Form.Group>
              <Button
                onClick={() => {
                  navigate(`/login`);
                }}
                className="flex align-center justify-center leading-normal"
                block
                appearance="ghost"
                size="md"
                color="blue"
              >
                <ReplayIcon />
                Trở lại đăng nhập
              </Button>
            </Form.Group>
          </Form>
        </Panel>
      </div>
    </div>
  );
}

export default Signup;









































// import { useState } from "react"
// import { useSignup } from "../../hooks/useSignup"
// import FileBase from 'react-file-base64';
// import { useNavigate } from "react-router";
// import "../Login/Login"

// const Signup = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState();

//     const { signup, error, isLoading } = useSignup()

//     const handleSubmit = async (e) => {
//         console.log(confirmPassword, password)
//         e.preventDefault()
//         if(password !== confirmPassword) {
//             console.log("oke")
//             alert("Password nhập lại không chính xác")
//         }

//         else await signup(email, password)
//     }

//     return (
//         <div className='body-login'>
//             <div className='body-login-left'>
//                 <img src='./smart-home.png' width="100" />
//             </div>
//             <div className='body-login-right'>
//                 <h2>Welcome To Smart Home</h2>

//                 <form className="signup" onSubmit={handleSubmit}>
//                     <h3>Sign Up</h3>

//                     <label>Email address:</label>
//                     <input
//                         type="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                     />
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                     />
//                     <label>Confirm Password:</label>
//                     <input
//                         type="password"
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         value={confirmPassword}
//                     />
//                     <button className="btn-signup">Sign up</button>
//                     <button  className="btn-signup" onClick={()=>navigate("/login")}>go to login</button>
//                     {error && <div className="error">{error}</div>}
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup