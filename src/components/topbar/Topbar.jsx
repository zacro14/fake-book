import './topbar.css';
import { SearchRounded, ChatBubbleRounded, NotificationsRounded, PersonRounded,  } from '@material-ui/icons';
import { Avatar, Badge, IconButton , Chip , Button } from '@material-ui/core';





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
                            <PersonRounded />
                        </Badge>
                    </IconButton>
                        {/*<span className="topbarBadge">2</span>*/}
                    </div>
                    <div className="topbarIconItem">
                            <IconButton className='topbarIcon' >
                                 <Badge badgeContent={2} color="secondary" >
                                     <ChatBubbleRounded /> 
                                </Badge> 
                            </IconButton>   
                        {/*<span className="topbarBadge">2</span>*/}
                    </div>
                    <div className="topbarIconItem">
                        <IconButton >
                            <Badge  badgeContent={13} color="secondary" >  
                                <NotificationsRounded />
                            </Badge> 
                        </IconButton>
                        {/*<span className="topbarBadge">2</span>*/} 
                    </div>
                </div>
                    <Chip className ='topbarAvatar' 
                    avatar ={<Avatar 
                    src ='/assets/person/janssen.png' 
                    alt ='image' />} 
                    clickable = 'true' 
                    label='Janssen'
                    variant='outlined' />                  
                    {/*<img src='/assets/person/janssen.png' alt ='img' className="topbarImg" /> */}  
            </div> 
        </div>
    )
}
