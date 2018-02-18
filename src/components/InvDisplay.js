import React from "react";
import PropTypes from "prop-types";

const InvDisplay = ({ type, label }) => {
  const attack =
    type.attackMin && type.attackMax
      ? ` ${type.attackMin}-${type.attackMax} dmg`
      : "";
  return (
    <p className="inv-item">
      {label}: {type.name}
      {attack}
    </p>
  );
};
//proptypes
InvDisplay.propTypes = {
  type: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};
export default InvDisplay;
