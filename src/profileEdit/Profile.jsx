import './profile.css'
import Topbar from "../components/topbar/Topbar";


export default function Profile() {
    return (
        <>
        <Topbar />
 
        <div className="profile">
                  <div className="profileImg">
                     <div className="profileContentImg">
                         <img src="/assets/post/6.jpeg" alt="" className='profileCover' />
                         <img src="/assets/person/janssen.png" alt="" className='profileUserimg' />
                     </div>
                  </div>
                  <div className="profileDesc">
                      <div className="profileDescWrapper">
                        <h1 className='profileUsernameText'>Janssen Penaredondo</h1>
                        <span className='profileDescText'>hello guys</span>

                       
                      </div> 

                      <div className="profileSeparetor"></div>            
                  </div>
                 
                  <div className="profileMenu">
                      menu
                  </div>

                  <div className="profileContent">
                  conttent                 
              </div>    
                        
              </div>
               
                
    </>
    )
}
