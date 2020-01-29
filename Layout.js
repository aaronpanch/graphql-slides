import React from "react";

export default ({ children, style }) => (
  <div
    style={{
      width: "60vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      ...style
    }}
  >
    {children}
  </div>
);
