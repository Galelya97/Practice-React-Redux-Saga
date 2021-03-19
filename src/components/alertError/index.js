import React from "react";

const Error = ({ text }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
};

export default Error;
