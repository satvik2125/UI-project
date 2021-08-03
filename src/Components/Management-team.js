import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "./Management-team.css";
import { Table } from "reactstrap";
import { BsPencil } from "react-icons/bs";
import { Button } from "reactstrap";
import { Input } from "reactstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";





function Management() {
    
  return (
    <div className="management">
      <div className="uppermanagement">
      <Link to="/" className="manage__link">
        <div className="arrow">
          <BiArrowBack />
        </div>
        </Link>
        <p className="para">Management</p>
        <div class="pencil">
          <BsPencil />
        </div>
      </div>
      <div className="lowermanagement">
        <div>
          <div className="Access">
            <p>Access Control</p>
          </div>
          <div className="line"></div>
          <div className="Assigned">
            <p>Assigned Members</p>
          </div>
        </div>
      </div>

      <Table className="table123">
        <thead className="theading">
          <tr>
            <td>Department/Role name</td>
            <td>Access level</td>
            <td>Summary</td>
            <td>Last Updated</td>
          </tr>
        </thead>
        <tbody>
          <tr className="area">
            <td>
              {" "}
              <BsPlusCircle />
              Budget{" "}
            </td>
            <td>
              {" "}
              <Button className="greenbutton">All access</Button>
            </td>
            <td>View | Create | Edit | Delete</td>
            <td>1 min ago</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          <tr className="area">
          <Link to= "/bidding" className="bidding__link">
            <td>
            <BsPlusCircle />
               Bidding
            </td>
            </Link>
            
            <td>
              <Button className="graybutton">No access</Button>
            </td>
            <td>-</td>
            <td>1 min ago</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          <tr className="area">
            <td>
              {" "}
              <BsPlusCircle />
              Vendor Portal{" "}
            </td>
            <td>
              <Button className="redbutton">Restricted Access</Button>
            </td>
            <td>View | Create</td>
            <td>1 min ago</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          <tr className="area">
            <td>
              {" "}
              <BsPlusCircle /> Purchase order/ Work order
            </td>
            <td>
              <Button className="redbutton">Restricted Access</Button>
            </td>
            <td>View | Create</td>
            <td>1 min ago</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          <tr className="area">
            <td>
              {" "}
              <BsPlusCircle /> Organisational profile
            </td>
            <td>
              <Button className="greenbutton">All access</Button>
            </td>
            <td>View | Create | Edit | Delete</td>
            <td>1 min ago</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>

          <tr className="area">
            <td>
              {" "}
              <BsPlusCircle /> Permission and access control
            </td>
            <td>
              <Button className="graybutton">No access</Button>
            </td>
            <td>1</td>
            <td>1 min ago</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Management;
