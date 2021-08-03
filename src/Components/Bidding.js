import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "./Management-team.css";
import { Table } from "reactstrap";
import { BsPencil } from "react-icons/bs";
import { Button } from "reactstrap";
import { Input } from "reactstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "./Bidding.css";

function Bidding() {
  return (
    <div className="management">
      <div className="uppermanagement">
        <div className="arrow">
          <BiArrowBack />
        </div>
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
          <tr className="arealarge">
            <Link to="/manage" className="manage_link">
              <td>
                <AiOutlineMinusCircle />
                Bidding
              </td>
            </Link>
        
            <div className="bidinside">
              <p>All aspects in the bidding module</p>
              <div className="accesscontrol">
                <p>Access control</p>
              </div>
              <div className="inner">
                <div className="circletext ">
                  <Input type="radio" name="radio1" />
                  <p>All access</p>
                </div>
                <div className="lighttext firstlight">
                  <p>Can access all items</p>
                </div>
              </div>
             
              <div className="restricted">
                <Input type="radio" name="radio1" />
                <p>Restricted access</p>
              </div>

              <div className="lighttext secondlight">
                <p>Can access only assigned or created items</p>
              </div>

              <div className="permissions">
                <div className="permissionheading">
                  <p>Permissions</p>
                </div>
              </div>
              <div className="permissiondata">
                <div className="data">
                  <Input type="checkbox" />
                  <p>View items in access</p>
                </div>
                <div className="data">
                  <Input type="checkbox" />
                  <p>Edit items in access</p>
                </div>
                <div className="data">
                  <Input type="checkbox" />
                  <p>Create items in access</p>
                </div>
                <div className="data">
                  <Input type="checkbox" />
                  <p>Delete items in access</p>
                </div>
              </div>
            </div>

            <td></td>
            <td></td>
            <td></td>
            
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
          </tr>
          <tr className="area down">
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
          <tr className="area down">
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
          <tr className="area down">
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

          <tr className="area down">
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

export default Bidding;
