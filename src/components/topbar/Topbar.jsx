import './topbar.css';
import { SearchRounded, PersonOutlineRounded, ChatBubbleOutlineRounded, NotificationsOutlined,  } from '@material-ui/icons';
import { Avatar, Badge, IconButton  , Button } from '@material-ui/core';


 

export default function Topbar() {
  
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Fakebook</span>
            </div> 
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchRounded className ='searchIcon'/>
                    <input placeholder='Search Fakebook' className="searchInput"></input>
                </div>
                </div> 
            <div className="topbarRight">

                <div className="topbarLinks">
                    <Button className='topbarLink' size='small'>Home</Button>
                    <Button className='topbarLink' size='small'>Timeline</Button>
                   {/*<span className="topbarLink">Home</span>
                   <span className="topbarLink">Timeline</span>*/}
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <IconButton>  
                        <Badge badgeContent={5} color="secondary" >
                            <PersonOutlineRounded />
                        </Badge>
                    </IconButton>
                        {/*<span className="topbarBadge">2</span>*/}
                    </div>
                    <div className="topbarIconItem">
                            <IconButton className='topbarIcon' >
                                 <Badge badgeContent={2} color="secondary" >
                                     <ChatBubbleOutlineRounded /> 
                                </Badge> 
                            </IconButton>   
                        {/*<span className="topbarBadge">2</span>*/}
                    </div>
                    <div className="topbarIconItem">
                        <IconButton >
                            <Badge  badgeContent={13} color="secondary" >  
                                <NotificationsOutlined />
                            </Badge> 
                        </IconButton>
                        {/*<span className="topbarBadge">2</span>*/} 
                    </div>
                </div>
                   <Avatar 
                    src ='/assets/person/janssen.png' 
                    alt ='image' />
            </div> 
        </div>
    )
}
