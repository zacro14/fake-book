import { Avatar, IconButton } from '@material-ui/core'
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">              
                            <Avatar src ='/assets/person/janssen.png' alt ='img'/>                     
                        <span className="postUserName">Janssen Peñaredondo</span>
                        <span className="postDate">1m</span>
                    </div>
                    <div className="postTopRight">
                        <IconButton>
                            <MoreHoriz />
                        </IconButton>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey you
                    </span>
                    <img className='postImg' src="/assets/post/10.jpeg" alt="post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/emote/like_fakebook.png" alt="like" />
                        <img className='likeIcon' src="/assets/emote/heart_fakebook.png" alt="heart" />
                        <img className='likeIcon' src="/assets/emote/care_fakebook.png" alt="heart" />
                        <span className='postLikeCounter'>100K</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="postcommentText">20 Comments</span>
                    <span className="postshareText">10 Shares</span>
                    </div>               
                </div>
            </div> 
        </div>
    )
}
