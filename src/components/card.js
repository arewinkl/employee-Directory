import React from "react";

const Employee = props => {
    return(
    <tr>
    <th scope="col">{props.index +1}</th>  
    <th scope="col">{props.User.name.first}</th>
    <th scope="col">{props.User.name.last}</th>
    <th scope="col">{props.User.email}</th> 
    <th scope="col">{props.User.dob.age}</th> 
    <th scope="col">{props.User.cell}</th>
    <th scope="col">{props.User.gender}</th>
    
    </tr>
    
    )
}

export default Employee