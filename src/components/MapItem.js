//on mouse over,  have  a popup that shows more info about whats on the square, 
//such as enemy type

//have a big switch statement based on cell contents and font awesome glyphs
import React from "react";
import PropTypes from "prop-types";

const MapItem = ({disbool, contents}) => {
	const disabled = disbool? "disabled" : ''
	const cellContents = contents ? contents.contains: '' 
	return <div className={`map-item ${disabled} ${cellContents}`} />
}

export default MapItem