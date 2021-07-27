import PropTypes from "prop-types";

//(display subject line + sender)
const ReadEmailItem = (props) => {

  if (props.title && props.data) {
    return (
      <div className="row">
        <div className="col-3">
          {props.title}
        </div>
        <div className="col-9">
          {props.data}
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

ReadEmailItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};

export default ReadEmailItem