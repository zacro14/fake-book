
import AdsContainer from './adscontainer/AdsContainer';
import BirthDay from './birthdayCard/BirthDay';
import './rightbar.css'
import { Users } from '../../dummyData';
import OnlineUsers from '../online/OnlineUsers';



export default function Rightbar() {
    
    return (
      
        <div className='rightBar'>
            <div className="rightBarWrapper"> 

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
            </div>
        </div> 
    )
}
