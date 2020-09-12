import React, {useState, useEffect} from 'react';
import {FaPlus, FaTrash, FaMinus, FaInfo} from 'react-icons/fa';
import {Table, Button} from "reactstrap"
// import css
import "./manageclass.css"

// react-router-dom
import {Link} from "react-router-dom";

import {} from "reactstrap"
function ManageClass({match}) {
  return (
    <div className="maincontent">
      <div className="container">
        <div className="row">
            <Link to={`${match.url}/add-classroom`}>
            <Button color='primary'>Add Classroom &nbsp;
            <FaPlus className='text-light'/></Button>
          </Link> 
        </div>
        {/* <div>
          <Table bordered>
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Class Number</th>
              </tr>
            </thead>
            <tbody>
                <td>
                    
                </td>

            </tbody>
          </Table>
        </div> */}
      </div>
      </div>
      );     
      }

      export default ManageClass;