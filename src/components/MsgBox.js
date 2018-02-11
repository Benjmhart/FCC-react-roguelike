import React from 'react';
import { connect } from "react-redux"
import PropTypes from "prop-types";

export const MsgBox = ({ messages }) => {
	const renderMsgs = () =>{
		const content = messages.map((msg) => {
			return (<p className="msg-item">{msg}</p>)
		})
		return content
	}
	return (<div className="msg-container">
		{renderMsgs()}
	</div>)
}
//proptypes
MsgBox.propTypes = {
	messages: PropTypes.array.isRequired
}

//connect
function mapStateToProps(state) {
	const { messages } = state;
	return { messages }	
}

export default connect(mapStateToProps)(MsgBox);