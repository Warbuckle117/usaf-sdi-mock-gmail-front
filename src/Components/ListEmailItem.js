import PropTypes from "prop-types";
import React from "react";

//(display subject line + sender)
class ListEmailItem extends React.Component {

  constructor(){
    super();
    this.state = {
      selected: false,
      hover: false
    }
  }

  onSubjectClick = () => {
    this.props.callback(this.props.id);
  }

  onMouseOver() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let style = {};
    if (this.props.emailSelected === true && this.props.id === this.props.emailId) {
      style['fontWeight'] = 'bold';
    };
    if (this.state.hover) {
      style['fontStyle'] = 'italic';
      style['textDecoration'] = 'underline';
    }

    if (this.props.email) {
      return (
        <div className="row" onMouseEnter={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseOver.bind(this)}>
          <div className="col" style={style}>
            {this.props.email.sender}
          </div>
          <div className="col" style={style} onClick={this.onSubjectClick}>
            {this.props.email.subject}
          </div>
        </div>
      );
    } else {
      return (
      <div className="row">
        <div className="col">
          Invalid Email Data
        </div>
      </div>
      );
    }
  }
}

ListEmailItem.propTypes = {
  email: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
};

export default ListEmailItem