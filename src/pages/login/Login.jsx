import './login.css'

export default function Login() {
    return (
        <div className='login'>
           <div className="loginWrapper">
               <div className="loginLeft">
                   <h1 className="loginLogo">
                       Fakebook
                   </h1>
                   <span className="loginDesc">
                       Connect with Friends  and the world around you in Fakebook.
                   </span>
               </div>
               <div className="loginRight">
                   <div className="loginBox">
                       <input 
                       placeholder="Email or Phone Number" 
                       className="loginInput" />
                       <input 
                       placeholder="Password" 
                       className="loginInput" />
                       <button 
                       className="loginButton">Log in</button>
                       <span className="loginForgot">
                       Forgot Password?
                       </span> 
                       <div className="loginSeparator"></div>                   
                       <button 
                       className="loginRegisterButton">Create  New Account</button>
                   </div>
               </div>
           </div>
        </div>
    )
}
