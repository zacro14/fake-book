import { Avatar } from '@material-ui/core'
import { Image, InsertEmoticon, Videocam } from '@material-ui/icons'
import './share.css'

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    
                    <Avatar className='shareAvatar' src='/assets/person/janssen.png' alt='img'/>
                   
                    <input  placeholder='What`s on your  mind, Janssen?' className='shareInput' />
                </div>
                <hr className='shareHr'/>
                <div className="shareBottom">
                    <div className='shareOptions'>
                        <div className='shareOption' >
                           
                                <Videocam htmlColor='#E42645' className='shareIcon'/>
                                <span className="shareOptionText">Live Video</span>
                            
                        </div>
                        <div className='shareOption'>
                            
                                <Image htmlColor='#41B35D' className='shareIcon'/>
                                <span className="shareOptionText">Photo/Video</span>
                           
                        </div>
                            <div className='shareOption'>
                                 
                                    <InsertEmoticon htmlColor='#EBB639' className='shareIcon'/>
                                    <span className="shareOptionText">Feeling/Activity</span>
                                
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}
