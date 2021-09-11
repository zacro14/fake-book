import './online.css'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles ((theme) =>({
    small:{
        width: '30px',
        height: '30px',
    }
}))

export default function OnlineUsers({user}) {
    const classes = useStyles();
    return (        
             <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <Avatar 
                            className ={ classes.small}                           
                            src={user.profilePicture} 
                            alt='Profile'
                            sizes='small'
                            />
                            <span className="rightbarOnline"></span>                  
                        </div>
                            <span className="rightbarProfileName">
                                   {user.username}
                            </span> 
                    </li>
    )
}
