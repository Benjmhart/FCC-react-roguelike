import React from "react";
import PropTypes from "prop-types";

const DisplayBar = ({ min, max, color, label }) => {
  const barFullStyle = { backgroundColor: "white", height: "20px" };
  const barActualStyle = {
    backgroundColor: color,
    width: `${min / max * 100}%`,
    height: "20px"
  };

  return (
    <div className="display-bar">
      <div className="bar-full" style={barFullStyle}>
        <div className="bar-actual" style={barActualStyle} />
      </div>
      <p className="display-bar-text">
        {label}: {min}/{max}
      </p>
    </div>
  );
};

//proptypes
DisplayBar.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
export default DisplayBar;
