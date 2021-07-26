import React from 'react'
import ListEmailItem from "./ListEmailItem";
import PropTypes from "prop-types";


class ListEmails extends React.Component {

  constructor(){
    super();
    this.state = {

    }
  }

  render () {
    if (!this.props.emailList) {
      return (
        <div className="row">
          <div className="col">
              Inavlid Email List
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                From
              </div>
              <div className="col">
                Subject:
              </div>
            </div>
          {
          this.props.emailList.map((email, each) => {
            return <ListEmailItem key={each} email={email} callback={this.props.callback}/>
            })
          }
          </div>
        </div>
      );
    }
  }
}

ListEmails.propTypes = {
  emailList: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
};

export default ListEmails;