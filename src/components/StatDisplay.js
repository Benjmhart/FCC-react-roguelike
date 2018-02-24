import React from "react";
import PropTypes from "prop-types";

const StatDisplay = ({ stat, trueStat, label }) => {
  const statText = stat !== -1 ? `(${stat})` : "";
  return (
    <p className="stat-display">
      {label}: {trueStat}
      {statText}
    </p>
  );
};

//proptypes & defaultprops
StatDisplay.defaultProps = {
  stat: -1
};

StatDisplay.propTypes = {
  stat: PropTypes.number,
  trueStat: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};
export default StatDisplay;
