import PropTypes from "prop-types";

//(display subject line + sender)
const ListEmailItem = (props) => {

  function onSubjectClick() {
    props.callback(props.email.id);
  }

  if (props.email) {
    return (
      <div className="row">
        <div className="col">
          {props.email.sender}
        </div>
        <div className="col" onClick={onSubjectClick}>
          {props.email.subject}
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
};

ListEmailItem.propTypes = {
  email: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
};

export default ListEmailItem