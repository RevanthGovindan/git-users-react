import React, { Component } from 'react';
import fetch from 'node-fetch';
import './App.css';
import UsersList from './UsersList.js'
import Pagination from './Pagination.js';
class App extends Component {
  constructor() {
    super();
    this.state = { name: '', searchName: '', data: '', clicked: false, page: 1 };
    this.firstLoad=this.firstLoad.bind(this);
  }
  handleChange(event) {
    const name = event.target.value;
    this.setState({ name: name });
    this.firstLoad=this.firstLoad.bind(this);
  }
  firstLoad(name,page) {
    alert(this.state.page)
    fetch('https://api.github.com/search/users?q=' + name + '&page=' +page).then(response => {
      return response.json();
    }).then(data => {
      this.setState({ data });
      console.log(data)
    }).catch(error => {
      console.log(error);
    });
    this.setState({ searchName: name, name: '', clicked: true });
  }
  updatePage(pageNum){  
    this.firstLoad(this.state.searchName,pageNum);
  }
  render() {
    return (
      <div className="App">
        <div className="box">
          <input type="text" value={this.state.name} placeholder="Search" onChange={this.handleChange.bind(this)}/>
          <button onClick={this.firstLoad.bind(this, this.state.name,1)}>
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>        
        {this.state.clicked && this.state.data !== '' ? <UsersList list={this.state.data} name={this.state.searchName} /> : ""}
        <div>{this.state.clicked ? <Pagination totalPages={this.state.data.total_count} action={this.updatePage.bind(this)}/> : ""}</div>
      </div>
    );
  }
}

export default App;
