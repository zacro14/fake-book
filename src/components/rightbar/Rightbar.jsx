
import AdsContainer from './adscontainer/AdsContainer';
import BirthDay from './birthdayCard/BirthDay';
import './rightbar.css'
import { Users } from '../../dummyData';
import OnlineUsers from '../online/OnlineUsers';



export default function Rightbar({ profile }) { 
    const HomeRightBar = () =>{

        return(
        <>
         <BirthDay />
                    <div className="rightbarSeparator"/>
                            <h4 className="rightbarTitle">Sponsored</h4>
                            <AdsContainer />
                        <div className="rightbarSeparator"/>

                        <h4 className="rightbarTitle">Contacts</h4>
                        <ul className="rightbarFriendList">
                        {
                            Users.map(u=>( 
                                <OnlineUsers key={u.id} user={u} /> ))
                        }
                        </ul>          
        </>)
    }

    const ProfileRightBar =() =>{
        return(
            <>
                <h4 className="rightbarTitle">About</h4>
                    <div className="rightbarInfo">
                        <div className="rightbarInfoItem">
                            <span className='rightbarinfoKey'>City:</span> 
                            <span className='rightbarinfoValue'>Naga City</span>                                             
                        </div>
                        <div className="rightbarInfoItem">
                            <span className='rightbarinfoKey'>From:</span> 
                            <span className='rightbarinfoValue'>Libmanan</span>                                             
                        </div>
                        <div className="rightbarInfoItem">
                            <span className='rightbarinfoKey'>Relationship:</span> 
                            <span className='rightbarinfoValue'>Single</span>                                             
                        </div>
                    </div>
                    <h4 className="rightbarTitle">Friends</h4>   
                        <div className="profileFollowings">
                            <div className="profileFollowing">
                                <img 
                                src="/assets/person/AvatarDanmar.png" 
                                alt="" 
                                className="ProfilefollowingImg" />
                                <span className="profileFollowingUsername">Danmar Guiruela</span>
                            </div>
                            <div className="profileFollowing">
                                <img 
                                src="/assets/person/AvatarMenard.png" 
                                alt="" 
                                className="ProfilefollowingImg" />
                                <span className="profileFollowingUsername">Danmar Guiruela</span>
                            </div>
                            <div className="profileFollowing">
                                <img 
                                src="/assets/person/1.jpeg" 
                                alt="" 
                                className="ProfilefollowingImg" />
                                <span className="profileFollowingUsername">Danmar Guiruela</span>
                            </div>
                            <div className="profileFollowing">
                                <img 
                                src="/assets/person/2.jpeg" 
                                alt="" 
                                className="ProfilefollowingImg" />
                                <span className="profileFollowingUsername">Danmar Guiruela</span>
                            </div>
                            <div className="profileFollowing">
                                <img 
                                src="/assets/person/3.jpeg" 
                                alt="" 
                                className="ProfilefollowingImg" />
                                <span className="profileFollowingUsername">Danmar Guiruela</span>
                            </div>
                            <div className="profileFollowing">
                                <img 
                                src="/assets/person/4.jpeg" 
                                alt="" 
                                className="ProfilefollowingImg" />
                                <span className="profileFollowingUsername">Danmar Guiruela</span>
                            </div>
                        </div>                       
                        <AdsContainer/>            
            </>
        )
    }
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper"> 
                        { profile ? <ProfileRightBar/>:<HomeRightBar/> }                              
            </div>
        </div>        
    )
}
