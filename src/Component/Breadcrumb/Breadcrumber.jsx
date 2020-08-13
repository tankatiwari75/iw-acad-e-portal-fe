import React from 'react';
// import css
import "./breadcrumber.css"

import {
    Breadcrumb, BreadcrumbItem
} from "reactstrap"


function Breadcrumber(props) {
return (
<div className="maincontent">
    <Breadcrumb>
        <BreadcrumbItem active>Main-Page</BreadcrumbItem>
    </Breadcrumb>
</div>
);
}

export default Breadcrumber;