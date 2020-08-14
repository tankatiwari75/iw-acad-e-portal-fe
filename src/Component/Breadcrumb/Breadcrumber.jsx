import React from 'react';
import {useLocation} from "react-router-dom"
// import css
import "./breadcrumber.css"

import {
    Breadcrumb, BreadcrumbItem
} from "reactstrap"
import { Route } from 'react-router-dom';


function Breadcrumber(props) {
    let location = useLocation();
return (
<div className="maincontent">
    <h3 className="display-5 text-secondary">{location.pathname === "/"? "Dashboard" : location.pathname}</h3>
</div>
);
}

export default Breadcrumber;