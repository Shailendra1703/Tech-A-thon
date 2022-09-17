
import './login.scss'
import pic from '../Bug_Blogs.png'


export default function Login() {
  
  return (
    <div className="login">
      <div className='top'>
           <img className="logo" src={pic} alt='' />
      </div>
        <div className="container">
          <form className='form'>
          
          <h1>Sign In</h1>
          <input type={'email'}  placeholder='Email Address or Phone number' />
          <input type={'password'}  placeholder='Enter Password'/>
          <button className="loginButton">Sign In</button>
          <span>New to Bug-Byte? <b>Sign up Now!</b></span>
          <small>This page is protected by blah blah </small>
          </form>
        </div>
       </div>
  );

}
