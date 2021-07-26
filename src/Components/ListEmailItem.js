import PropTypes from "prop-types";

//(display subject line + sender)
const ListEmailItem = (props) => {
	return (
		<div className="Row">
      <div className="Col">
        Individual Email Here
      </div>
		</div>
	);
};

ListEmailItem.propTypes = {
  email: PropTypes.object.isRequired
};

export default ListEmailItem