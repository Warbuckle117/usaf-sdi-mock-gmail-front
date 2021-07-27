import './App.scss';
import React from 'react'
import SearchEmails from "./Components/SearchEmails";
import ListEmails from "./Components/ListEmails";
import ReadEmail from "./Components/ReadEmail";
import SendEmail from "./Components/SendEmail";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      emailList: [],
      emailId: 0,
      emailSelected: false,
      searchQuery: undefined
    }

  }

  //function to set email displayed to selected email
  componentDidMount() {
    //fetch emailList from http://localhost:3001/emails
    //update state with emailList
    if (this.state.searchQuery === undefined) {
      fetch('http://localhost:3001/emails')
        .then(response => response.json())
        .then(data => this.setState({emailList: data, emailSelected: false}));
      }
  }

  //http://localhost:3001/search?query=meeting


  render(){
    return (
      <div className="container bg-light">
        <div className="row">
          <div className="col text-center align-items-center">
            <h1>SDI Email Client</h1>
          </div>
        </div>
        <div className="row py-1 my-1">
          <div className="col text-center align-items-center">
            <SearchEmails callback={(info) => (this.setState({emailList: info}))}/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 border">
            <ListEmails emailList={this.state.emailList} emailId={this.state.emailId} emailSelected={this.state.emailSelected} callback={(info) => (this.setState({emailId: info, emailSelected: true}))}/>
          </div>
          <div className="col-4 border">
            <ReadEmail emailList={this.state.emailList} emailId={this.state.emailId} emailSelected={this.state.emailSelected}/>
          </div>
          <div className="col-4 border">
            <SendEmail  />
          </div>
        </div>
      </div>
    );
  }
}

//callback={(queryParam) => (this.searchFunc(queryParam))}

export default App;
