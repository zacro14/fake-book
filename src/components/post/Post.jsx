import { Avatar, IconButton } from '@material-ui/core'
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react';

export default function Post({post}) {
 const [like, setLike ] = useState(post.like)
 const [isLiked, setisLiked ] = useState(false)

 const likeHandler =() =>{
setLike(isLiked ? like-1 : like + 1)
setisLiked(!isLiked)
 }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">              
                            <Avatar 
                            src = {Users.filter((u) => u.id===post.userId)[0].profilePicture } 
                            alt ='img'/>                     
                        <span className="postUserName">
                            {Users.filter((u) => u.id===post.userId)[0].username }
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <IconButton>
                            <MoreHoriz />
                        </IconButton>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className='postImg' src={post.photo} alt="post" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/emote/like.svg" onClick ={likeHandler} alt="like" />
                        <img className='likeIcon' src="/assets/emote/love.svg" onClick ={likeHandler} alt="heart" />
                        <img className='likeIcon' src="/assets/emote/care.svg" onClick ={likeHandler} alt="heart" />
                        <span className='postLikeCounter'>{like}</span>
                    </div>
                    <div className="postBottomRight">
                    <span className="postcommentText">{post.comment} Comments</span>
                    <span className="postshareText">{post?.share} Shares</span>
                    </div>               
                </div>
            </div> 
        </div>
    )
}
