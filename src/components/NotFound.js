import React from "react";

const NotFound = () => (
  <div className="error-page">
    <img
      src={require("../error.png")}
      alt="404"
      style={{
        width: 400,
        height: 400,
        display: "block",
        margin: "auto",
      }}
    />
  </div>
);
export default NotFound;
