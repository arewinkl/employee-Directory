import React, { Component } from "react";
import API from "../components/utils/API";
import Card from "./Card";
import SearchForm from "./SearchForm.js";



class EmployeeContainer extends Component {
  state = {
    employees: [],
    search: "",
    sort: false
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search(query)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const search = event.target.name;
    this.setState({
      [search]: value
    });
  };


  employeeArr = () => {
    if (this.state.sort === false){
    const newArr = [...this.state.employees].sort((a,b) => a.name.last > b.name.last ? 1 : -1)
    this.setState({
      ...this.state,
      employees: newArr,
      sort: true
    });
  } else {
    const newArr = [...this.state.employees].sort((a,b) => a.name.last > b.name.last ? -1 : 1)
    this.setState({
      ...this.state,
      employees: newArr,
      sort: false
    });
  }
  };
  // When the form is submitted, search the API for the value of `this.state.search`
  

  render() {
    // console.log(this.state)
    return (
        <div>
            <h1> Employee List</h1>
            <h2>search the employee list</h2>
            <div className="searching">
                <searching
                search = {this.state.search}
                handleInputChange = {this.handleInputChange}
                />
                </div>
                <div className="cards">
                    <Card
                        employees = {this.state.employees}
                        search = {this.state.search}
                        employeeArr = {this.employeeArr}
                    />
            </div>
        </div>
    );
  }
}

export default EmployeeContainer;
