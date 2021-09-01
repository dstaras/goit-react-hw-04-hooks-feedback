import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <h4>{message}</h4>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
