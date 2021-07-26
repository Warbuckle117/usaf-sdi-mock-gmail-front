import React from 'react'
import ListEmailItem from "./ListEmailItem";

class ListEmails extends React.Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render () {
    return (
      <div className="row">
        <div className="col">
          List Emails Component Rendering
          <ListEmailItem email={0}/>
        </div>
      </div>
    )
  }
}

export default ListEmails;