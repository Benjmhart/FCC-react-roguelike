//on mouse over,  have  a popup that shows more info about whats on the square, 
//such as enemy type

//have a big switch statement based on cell contents and font awesome glyphs
import React from "react";
import PropTypes from "prop-types";
import { emptySpace } from "../assets/mapObjects"
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const MapItem = ({disbool, contents}) => {
	const disabled = disbool? "disabled" : ''
	
	//if you are going to refactor to remove the disbool requirement below,  make sure you know what you are doing.
	const cellContents = (contents && !disbool) ? contents.contains: '' 
	//use contents to create glyphs for hero
	const fontAwesome = {};
	
	if(cellContents==="hero"){
		fontAwesome.glyph = <i className="fa fa-user"></i>
	}
	
	return <div className={`map-item ${disabled} ${cellContents}`} >
	<p>
	{fontAwesome.glyph}
	</p>
	</div>
}

MapItem.defaultProps = {
	disbool: false,
	contents: {...emptySpace }
}

MapItem.propTypes = {
	disbool: PropTypes.bool,
	contents: PropTypes.object
}

export default MapItem