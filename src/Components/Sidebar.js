import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Sidebar.css'
import { BsFillCircleFill } from 'react-icons/bs';

function Sidebar(){
    return(
        <div className="header">
                <div className="header__oval">
                    <BsFillCircleFill/>
                </div>
                <div className="header__name">
                    Kishore
                </div>
                <div className="header__notification">
                    < NotificationsNoneIcon/>
                </div>
                <div className="header__questionmark">
                    <HelpOutlineIcon/>
                </div>
        </div>
    )
}

export default Sidebar