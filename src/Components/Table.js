import React from 'react';
import { Table } from 'reactstrap';
import './Table.css';
import { Button } from 'reactstrap';
import {  Input } from 'reactstrap';
import {AiOutlineEye} from "react-icons/ai";
import {BsPencil} from "react-icons/bs";
import {RiDeleteBin7Line} from "react-icons/ri";
import { Link } from 'react-router-dom';


const Tablebody = (props) => {
  return (
      <div>
    <div className="bottomheader2">
    <Button className="btn"><b>+  Add Role</b></Button>
    <div className="pencil">
    <BsPencil/>
    </div>
    <div className="bin">
    <RiDeleteBin7Line/>
    </div>
    </div>
    <Table className="table">

      <thead className="theading">
        <tr >
    
          <td>Department/Role name</td>
          <td>Access level</td>
          <td>Number of members</td>
          <td>Last Updated</td>
        
        </tr>
    
      </thead>
      <tbody>
        <tr className="area">
        <Link to= "/manage" className="header__link">
          <td > <Input type="radio" name="radio1" /> Management Team</td>
        </Link>
          <td> <Button className="greenbutton">All access</Button></td>
          <td >4</td>
          <td>1 min ago</td>
          <td><AiOutlineEye/></td>
        </tr>
        <tr className="area">
          <td >  <Input type="radio" name="radio1" /> Procurement Team</td>
          <td><Button className="greenbutton">All access</Button></td>
          <td>8</td>
          <td>1 min ago</td>
          <td><AiOutlineEye/></td>
        </tr>
        <tr className="area">
          <td >  <Input type="radio" name="radio1" /> Project Team</td>
          <td><Button className="redbutton">Restricted Access</Button></td>
          <td>16</td>
          <td>1 min ago</td>
          <td className="eye"><AiOutlineEye/></td>
        </tr>
        <tr className="area">
          <td >  <Input type="radio" name="radio1" /> IT Team</td>
          <td><Button className="redbutton">Restricted Access</Button></td>
          <td>4</td>
          <td>1 min ago</td>
          <td><AiOutlineEye/></td>
        </tr>
        <tr className="area">
          <td >   Super admit</td>
          <td> <Button className="redbutton">Restricted Access</Button></td>
          <td>1</td>
          <td>1 min ago</td>
          <td><AiOutlineEye/></td>
        </tr>

      </tbody>
    </Table>
    </div>
  );
}

export default Tablebody;