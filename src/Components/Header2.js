import React from "react";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import './Header2.css';
import { Button } from 'reactstrap';
import {BsPencil} from "react-icons/bs";
import {RiDeleteBin7Line} from "react-icons/ri";
import {HiOutlineRefresh} from "react-icons/hi";
import {FaWifi} from "react-icons/fa"

function Header2(){
    return(
        <div>
        <div className="header2">
            <div className="part1">
                <div className="logo1">
                <FaWifi/>
                </div>
                <p className="para">Permissions</p>
            </div>
            <div className="line">
                
            </div>
            <div className="part2">
                <div className="logo2">
                <BsFillGrid3X2GapFill/>
                </div>
                <p className="para">Approval Matrix</p>
            </div>
            <div className="part3">
                <div className="logo3">
                <HiOutlineRefresh/>
                </div>
                <p>Last synced 15min ago</p>
            </div>
            
        </div>
        <div className="hr"> <hr/> </div>  
   

     
       
        </div>
        
    )
}

export default Header2