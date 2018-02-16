//on mouse over,  have  a popup that shows more info about whats on the square, 
//such as enemy type

//have a big switch statement based on cell contents and font awesome glyphs
import React from "react";
import PropTypes from "prop-types";
import { emptySpace } from "../assets/mapObjects"
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const MapItem = ({disbool, contents, fogofwar}) => {
	const disabled = disbool? "disabled" : ''
	const alsoDisabled = (!contents.visible && !contents.explored) ? "disabled" : ''
	
	//if you are going to refactor to remove the disbool requirement below,  make sure you know what you are doing.
	const cellContents = (contents && !disbool) ? contents.contains : '' 
	//use contents to create glyphs for hero
	const fontAwesome = {};
	
	//glyphcase for hero
	if(cellContents==="hero"){
		fontAwesome.glyph = <i className="fa fa-user"></i>
	}
	if(cellContents ==="enemy" && contents.name ==="Rat"){fontAwesome.glyph ="🐀"}
	if(cellContents ==="enemy" && contents.name ==="Goblin"){fontAwesome.glyph ="🦇"}
	if(cellContents ==="enemy" && contents.name ==="Gremlin"){fontAwesome.glyph ="😈"}
	if(cellContents ==="enemy" && contents.name ==="Villain"){fontAwesome.glyph ="🤵"}
	if(cellContents ==="enemy" && contents.name ==="OwlBear"){fontAwesome.glyph ="🐗"}
	if(cellContents ==="enemy" && contents.name ==="Chimera"){fontAwesome.glyph ="🦁"}
	if(cellContents ==="enemy" && contents.name ==="Golem"){fontAwesome.glyph="🕴"}
	if(cellContents ==="enemy" && contents.name ==="Centipede"){fontAwesome.glyph ="🐛"}
	if(cellContents ==="enemy" && contents.name ==="Drake"){fontAwesome.glyph ="🐉"}
	if(cellContents ==="enemy" && contents.name ==="Dragon"){fontAwesome.glyph ="🐲"}
	//glyph case for stairs
	//glyph case for enemies
	
	const notVis = (fogofwar===true && contents.visible===false && contents.explored===true) ? 'not-visible' : ''
	
	const classnames = []
	if(disabled){classnames.push(disabled)}
	if(fogofwar && alsoDisabled){classnames.push(alsoDisabled)}
	if(cellContents){classnames.push(cellContents)}
	if(fogofwar && notVis){classnames.push(notVis)}
	
	return <div className={`map-item ${classnames.join(' ')}`} >
	<p>
	{fontAwesome.glyph}
	</p>
	</div>
}

MapItem.defaultProps = {
	disbool: false,
	contents: {...emptySpace },
	fogofwar: true
}

MapItem.propTypes = {
	disbool: PropTypes.bool,
	contents: PropTypes.object,
	fogofwar: PropTypes.bool
}

export default MapItem