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
      searchQuery: ''
    }
  }

  //this will run the first time the component mounts
  async componentDidMount() {
    if (this.state.searchQuery === '') {
      await fetch('http://localhost:3001/emails')
        .then(response => response.json())
        .then(data => this.setState({emailList: data, emailSelected: false}));
      } else {
        await fetch(`http://localhost:3001/search?query=${this.state.searchQuery}`)
          .then(response => response.json())
          .then(data => this.setState({emailList: data, emailSelected: false}));
      }
  }

  //this will run if the props or state changes, we will use this is the query param is updated
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      if (this.state.searchQuery === '') {
        await fetch('http://localhost:3001/emails')
          .then(response => response.json())
          .then(data => this.setState({emailList: data, emailSelected: false}));
        } else {
          await fetch(`http://localhost:3001/search?query=${this.state.searchQuery}`)
            .then(response => response.json())
            .then(data => this.setState({emailList: data, emailSelected: false}));
        }
    }
  }

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
            <SearchEmails callback={(info) => (this.setState({searchQuery: info}))}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-12 border">
            <h2>Inbox</h2>
            <ListEmails emailList={this.state.emailList} emailId={this.state.emailId} emailSelected={this.state.emailSelected} callback={(info) => (this.setState({emailId: info, emailSelected: true}))}/>
          </div>
          <div className="col-md-4 col-xs-12 border">
            <h2>Preview Pane</h2>
            <ReadEmail emailList={this.state.emailList} emailId={this.state.emailId} emailSelected={this.state.emailSelected}/>
          </div>
          <div className="col-md-4 col-xs-12 border">
            <h2>Send Email</h2>
            <SendEmail  />
          </div>
        </div>
      </div>
    );
  }
}

//callback={(queryParam) => (this.searchFunc(queryParam))}

export default App;
