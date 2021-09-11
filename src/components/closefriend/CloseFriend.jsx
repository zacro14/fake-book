import './closefriend.css'
import { Avatar } from '@material-ui/core'

export default function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
        <Avatar className='sidebarFriendImg'
        variant='dot' 
        src={user.profilePicture}
         alt='img'/> 
        <span className='sidebarFrienName'>{user.username}</span>
    </li>
    )
}
