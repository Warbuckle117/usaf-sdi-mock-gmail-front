import React from 'react'

class SearchEmails extends React.Component {

  constructor(){
    super();
    this.state = {
      queryParam: ''
    }

  }

  updateQuery(event) {
    this.setState({queryParam: event.target.value});
  }

  handleClick = () => {
    if(this.state.queryParam){
      fetch(`http://localhost:3001/search?query=${this.state.queryParam}`)
        .then(response => response.json())
        .then(data => this.props.callback(data));
    }
  }

  render () {
    return (
      <div className="row justify-content-center align-items-center text-center py-1 my-1">
        <div className="col-md-4 col-xs-6">
          <div className="search-bar form-inline">
            <input className="form-control" type="text" value={this.state.queryParam} onChange={(event) => this.updateQuery(event)}/>
          </div>
        </div>
        <div className="col-md-2 col-xs-4">
            <button className="" onClick={this.handleClick}>Search Emails</button>
        </div>
      </div>
    )
  }
}

//onClick={this.searchFunc(this.state.queryParam)}
//onClick={this.props.callback(this.state.queryParam)}
//this.setState({emailList: data, emailSelected: false})
export default SearchEmails;