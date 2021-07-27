import PropTypes from "prop-types";

//(display subject line + sender)
const ReadEmailMessage = (props) => {

  if (props.data) {
    return (
      <div className="row">
        <div className="col">
          <hr></hr>
          {props.data}:
        </div>
      </div>
    );
  } else {
    return (
    <div className="row">
      <div className="col">
        Invalid Data
      </div>
    </div>
    );
  }
};

ReadEmailMessage.propTypes = {
  data: PropTypes.string.isRequired
};

export default ReadEmailMessage