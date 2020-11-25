import React from "react";

function Card(props) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th onClick={() => props.employeeArray()}>Name</th>
          <th>Email: </th>
          <th>Cell: </th>
          <th>Location: </th>
        </tr>
      </thead>
      <tbody className="list-group">
        {props.employees.map(
          ({ name, cell, email, login, picture, location }) => {
            if (name.last.includes(props.search)) {
              return (
                <tr className="list-group-item" key={login.uuid}>
                  <td>
                  <img src={picture.medium} alt="" />
                  </td>
                  <td>{name.last}, {name.first}</td>
                  <td>{email}</td>
                  <td>{cell}</td>
                  <td>{location.city}, {location.state}</td>
                </tr>
              );
            }
          }
        )}
      </tbody>
    </table>
  );
}

export default Card;