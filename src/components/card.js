import React from "react"

const Card = props =>{
    return(
        <tr>
            <th scope="col">{props.index +1}</th>
            <th scope="col">{props.User.Name.First}</th>
            <th scope="col">{props.User.Name.Last}</th>
            <th scope="col">{props.User.Email}</th>
            <th scope="col">{props.User.Gender}</th>
            <th scope="col">{props.User.Cell}</th>
        </tr>
    )
}

export default Card