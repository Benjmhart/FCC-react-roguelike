import React from 'react';
import PropTypes from "prop-types";

const InvDisplay = ({type, label}) => {
	return (<p className="inv-item"> 
		{label}: {type.name}
	</p>)
}
//proptypes
InvDisplay.propTypes = {
	type: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired
}
export default InvDisplay