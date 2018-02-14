import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import StatDisplay from "./StatDisplay";
import InvDisplay from "./InvDisplay";
import DisplayBar from "./DisplayBar"
import MsgBox from "./MsgBox";
import toggleFog from "../actions/action_toggleFog";

export const HUD = ({ character, fogofwar, toggleFog }) => {
	const fog =  fogofwar ? 'fog on': 'fog off'
  return <div className="hud-component" >
	<div className="left-hud-container">
		<div className="display-bars-container">
			<DisplayBar min={character.HP} max={character.HPMAX} color="red" label="HP"/>
			<DisplayBar min={character.EXP} max={character.nextLVL} color="purple" label="EXP"/> 
			<button className="fogbtn" onClick={() => toggleFog()}>{fog}</button>
		</div>
		<div className="stat-display-container" >
			<StatDisplay label="STR" stat={character.STR} trueStat={character.trueSTR} />
			<StatDisplay label="AGI" stat={character.AGI} trueStat={character.trueAGI} />
			<StatDisplay label="WIS" stat={character.WIS} trueStat={character.trueWIS} />
			<StatDisplay label="PER" stat={character.PER} trueStat={character.truePER} />
			<StatDisplay label="CHA" stat={character.CHA} trueStat={character.trueCHA} />
			<StatDisplay label="LUK" stat={character.LUK} trueStat={character.trueLUK} />
			<StatDisplay label="Armor" trueStat={character.totalArmor} />
		</div>
	</div>
	<div className="mid-hud-container" >
		<h5>Equipment</h5>
		<InvDisplay type={character.armor} label="Armor" />
		<InvDisplay type={character.weapon} label="Weapon" />
		<InvDisplay type={character.helmet} label="Head" />
		<InvDisplay type={character.shoes} label="Shoes" />
		<InvDisplay type={character.ring} label="Ring" />
	</div>
	<MsgBox />
	
  </div>;
};

HUD.defaultProps = {
	fogofwar: true,
	toggleFog: toggleFog
}
HUD.propTypes = {
	character: PropTypes.object.isRequired,
	fogofwar: PropTypes.bool,
	toggleFog: PropTypes.func
}
function mapStateToProps(state) {
	const { character, fogofwar } = state;
	return { character, fogofwar }
 }
 function mapDispatchToProps(dispatch){
 	return bindActionCreators({ toggleFog }, dispatch)
 }
export default connect(mapStateToProps, mapDispatchToProps)(HUD);
