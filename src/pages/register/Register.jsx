import './register.css'

export default function Register() {
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
                       type='email'
                       placeholder=" Mobile Number or Email" 
                       className="loginInput" />
                       <input
                       type='email'
                       placeholder="Username" 
                       className="loginInput" />
                        <input
                       type='password'
                       placeholder="Password" 
                       className="loginInput" />
                       <input
                       type='password'
                       placeholder="Password Again" 
                       className="loginInput" />
                       <button 
                       className="loginButton">Sign Up</button>
                       <div className="loginSeparator"></div>                   
                       <button 
                       className="loginRegisterButton">Log in</button>
                   </div>
               </div>
           </div>
        </div>
    )
}
