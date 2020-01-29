import React from "react";

export default ({ children }) => (
  <div
    style={{
      minWidth: "60%",
      minHeight: "60%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginLeft: "64px"
    }}
  >
    {children}
  </div>
);
