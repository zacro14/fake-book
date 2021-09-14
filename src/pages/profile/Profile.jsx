import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img 
                        src="/assets/post/6.jpeg" 
                        alt="" 
                        className="profileCoverImg" />
                        <img 
                        src="/assets/person/janssen.png" 
                        alt="" 
                        className="profileUserImg" />
                    </div> 
                    <div className="profileInfo">
                        <h1 className='profileUsername'>Janssen Penaredondo</h1>
                        <span className='profileDesc'>hello</span>
                    </div>                  
                </div>
                <div className="profileRightBottom">

                </div>
            </div>
            
        </>
    )
}
