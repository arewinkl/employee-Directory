import React, { Component } from "react";
import user from "../library/user.json";
import Card from "./card.js";
import "./style.css";

//creating a employee table class that extends from the component
//this component will cover the searches also.
export default class employeeTable extends Component {
  state = {
    original: [],
    current: [],
    sortDirection: 1
  };
  //component did mount/ user.
  componentDidMount() {
    this.setState({
      original: user,
      current: user
    });
  }

  
SortChange = ()=> {
  if (this.state.sortDirection === 1) {
    this.setState({ sortDirection: -1 });
  } else {
    this.setState({ sortDirection: 1 });
  }
}
    // handling the searches
  handleSearches = term => {
    const updatedList = this.state.original.filter(
      user =>
      // giving the user.name.first to lowercase to bee seen
        user.name.first.toLowerCase().includes(term.toLowerCase()) ||
        user.name.last.toLowerCase().includes(term.toLowerCase())
       );
      this.setState({
        // this.setState will update the list of employees with the search.
          current: updatedList
      })
      console.log(updatedList)
  };
  // this is where the rendering begins (be sire to make changes to classNames)
  render() {
   
    
    const sorted = this.state.current.sort((a, b) => {
      //sort based off of the criteria above
      if (this.state.sortDirection === 1) {
        return a.name.first > b.name.first ? 1 : -1
      } else {
        return a.name.first < b.name.first ? 1 : -1
      }
    });
    // this is where the return needs to be developed with HTML preferences.
    return (
      <>
      <div>
        <h1 className="title"><strong>Employee Directory</strong></h1>
      </div>
      
        <input 
         type="text" className="form-control search" aria-label="Large"
         placeholder="Search"
        onChange={event => this.handleSearches(event.target.value)} />
       {/*input for searches above */}
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th className="rows" scope="col">ID</th>
              {/* this will handle the button click, attached to FIRST NAME */}
              <th className="rows" scope="col"><button type="button" onClick={this.SortChange}>FIRST NAME</button></th>
              <th className="rows" scope="col">LAST NAME</th>
              <th className="rows" scope="col">EMAIL</th>
              {/* for any desired column add infor here and match in acompaning js */}
              <th className="rows" scope="col">AGE</th>
              <th className="rows" scope="col">CELL PHONE</th>
              <th className="rows" scope="col">GENDER</th>
              
            </tr>
          </thead>
          <tbody>
            {/* generates cards for the users */}
            {sorted.map((user, index) => (
              <Card User={user} index={index} key={user.id.value} />
            ))}
          </tbody>
        </table>
       
      </>
    );
  }
}