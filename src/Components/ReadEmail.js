import React from 'react'
import PropTypes from "prop-types";
import ReadEmailItem from "./ReadEmailItem";
import ReadEmailMessage from "./ReadEmailMessage";

class ReadEmail extends React.Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render () {
    if (!this.props.emailSelected || this.props.emailList.length === 0 || !this.props.emailId) {
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
          <ReadEmailItem title='From: ' data={this.props.emailList[this.props.emailId].sender} />
          <ReadEmailItem title='To: ' data={this.props.emailList[this.props.emailId].recipient} />
          <ReadEmailItem title='Subject: ' data={this.props.emailList[this.props.emailId].subject} />
          <ReadEmailItem title='Date: ' data={this.props.emailList[this.props.emailId].date} />
          <ReadEmailItem title='Message: ' data=' ' />
          <ReadEmailMessage data={this.props.emailList[this.props.emailId].message} />
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