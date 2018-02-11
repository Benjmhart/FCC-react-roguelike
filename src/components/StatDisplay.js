import React from 'react';
import PropTypes from "prop-types";

const StatDisplay = ({stat, trueStat, label}) => {
	const statText = stat ? `(${stat})` : ''
	return (<p className="stat-display"> 
		{label}: {trueStat}{statText}
	</p>)
}

//proptypes & defaultprops
StatDisplay.defaultprops = {
	stat: false
}

StatDisplay.propTypes = {
	stat: PropTypes.number,
	trueStat: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired
}
export default StatDisplay