import React from "react";
import PropTypes from "prop-types";

const ButtonFeedback = ({ btnName, countFeedback }) => {
  return btnName.map((name) => (
    <button onClick={() => countFeedback(name)} key={name}>
      {name}
    </button>
  ));
};
ButtonFeedback.propTypes = {
  btnName: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  countFeedback: PropTypes.func.isRequired,
};

export default ButtonFeedback;
