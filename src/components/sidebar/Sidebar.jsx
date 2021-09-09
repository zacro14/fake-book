import './sidebar.css';
import {RssFeedRounded, ChatBubbleRounded,SchoolRounded, EventRounded,WorkRounded, PlayCircleFilledRounded, BookRounded, HelpRounded} from '@material-ui/icons'
import { Avatar } from '@material-ui/core';
export default function Sidebar() {
    return (
        <div className='sideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">BookMarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolRounded className='sidebarIcon'/>
                         <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>See More</button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendlist">
                    <li className="sidebarFriend">
                        <Avatar className='sidebarFriendImg'
                        variant='dot' 
                        src='/assets/person/AvatarMenard.png'
                         alt='img'/> 
                        <span className='sidebarFrienName'>Menard Peñaredondo</span>
                    </li>
                    <li className="sidebarFriend">
                        <Avatar className='sidebarFriendImg' 
                        src='/assets/person/AvatarMenard.png'
                         alt='img'/> 
                        <span className='sidebarFrienName'>Menard Peñaredondo</span>
                    </li>
                    <li className="sidebarFriend">
                        <Avatar className='sidebarFriendImg' 
                        src='/assets/person/AvatarMenard.png'
                         alt='img'/> 
                        <span className='sidebarFrienName'>Menard Peñaredondo</span>
                    </li>
                    <li className="sidebarFriend">
                        <Avatar className='sidebarFriendImg' 
                        src='/assets/person/AvatarMenard.png'
                         alt='img'/> 
                        <span className='sidebarFrienName'>Menard Peñaredondo</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
