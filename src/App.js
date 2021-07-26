import './App.css';
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
      emailSelected: false
    }
  }

  //function to set email displayed to selected email


  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center border">
            <SearchEmails />
          </div>
        </div>
        <div className="row">
          <div className="col-4 border">
            <ListEmails />
          </div>
          <div className="col-4 border">
            <ReadEmail />
          </div>
          <div className="col-4 border">
            <SendEmail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
