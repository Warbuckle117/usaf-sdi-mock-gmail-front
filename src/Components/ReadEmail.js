import React from 'react'
import PropTypes from "prop-types";

class ReadEmail extends React.Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render () {
    if (!this.props.emailSelected) {
     return ( <div className="row">
      <div className="col">
        No Email Selected
      </div>
    </div>
     )
    } else {
      return (
        <div className="row">
          <div className="col">
          From: {this.props.emailList[this.props.emailId].sender}<br />
          To: {this.props.emailList[this.props.emailId].recipient}<br />
          Subject : {this.props.emailList[this.props.emailId].subject}<br />
          Date: {this.props.emailList[this.props.emailId].date}<br />
          Message: {this.props.emailList[this.props.emailId].message}<br />
          </div>
        </div>
      )
      }
  }
}

ReadEmail.propTypes = {
  emailList: PropTypes.array.isRequired,
  emailId: PropTypes.number.isRequired,
  emailSelected: PropTypes.bool.isRequired
};

export default ReadEmail;