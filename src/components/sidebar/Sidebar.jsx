import './sidebar.css';
import { Users } from '../../dummyData';
import CloseFriend from '../closefriend/CloseFriend';
import { ExpandMore } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className='sideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <img src='/assets/icons/friends_fakebook.png' alt='' className='sidebarIcon'/>
                        {/* <RssFeedRounded className='sidebarIcon'/> */}
                         <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/message_fakebook.png' alt='' className='sidebarIcon'/>
                        {/* <ChatBubbleRounded className='sidebarIcon'/> */}
                         <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/video_fakebook.png' alt='' className='sidebarIcon'/>
                        {/* <PlayCircleFilledRounded className='sidebarIcon'/> */}
                         <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/bookmark_fakebook.png' alt='' className='sidebarIcon'/>
                        {/* <BookRounded className='sidebarIcon'/> */}
                         <span className="sidebarListItemText">BookMarks</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/groups_fakebook.png' alt='' className='sidebarIcon'/>
                         <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/job_fakebook.png' alt='' className='sidebarIcon'/>
                          {/*<WorkRounded className='sidebarIcon'/>*/}
                         <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/event_fakebook.png' alt='' className='sidebarIcon'/>
                        {/*<EventRounded className='sidebarIcon'/>*/}
                         <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                    <img src='/assets/icons/pages_fakebook.png' alt='' className='sidebarIcon'/>
                         <span className="sidebarListItemText">Pages</span>
                    </li>
                    <li className="sidebarListItem">
                        <ExpandMore className='sidebarIcon' />               
                        <span className='sidebarListItemText'>  See More  </span>  
                    </li>
                       
                </ul>
                         
                <div className='sidebarSeparator' />
                <ul className="sidebarFriendlist">
                    {
                        Users.map(u=>(
                            <CloseFriend key={u.id} user={u}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
