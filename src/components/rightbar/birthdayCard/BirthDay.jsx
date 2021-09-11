import './birthday.css';
import { CloseOutlined } from  '@material-ui/icons'
import { IconButton } from '@material-ui/core'

export default function BirthDay() {
    return (
        <div className='birthdayWrapper'>
            <div className="birthdayContainer">
                    <div className="birthdayTop">
                        <div className="birthdayTopLeft">
                            <img src="/assets/birthday_fakebook.png" alt="birthday" className="birthDayImg" />
                            <span className="birthdayText">
                                <b>Birthdays</b>                       
                            </span>
                        </div>                      
                        <IconButton > 
                            <CloseOutlined />
                        </IconButton>                       
                    </div>
                     <div className="birthdayContent">                       
                            <button className='buttonName'>
                                <span className='birthdayNameText'>
                                <b>Menard</b>'s and<b> 2 others </b>have birthdays today.
                                </span> 
                            </button>                                                               
                     </div>
                </div> 
        </div>
    )
}
