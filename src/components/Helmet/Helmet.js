import React from "react";

export const Helmet = ({ title, children }) => {
  document.title = "Maltimart - " + title;

  return <div className="w-100">{children}</div>;
};
