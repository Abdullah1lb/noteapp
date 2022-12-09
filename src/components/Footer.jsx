import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div
      className="Footer py-1"
      style={{ position: "fixed", bottom: "0", marginLeft: "35em" }}
    >
      <h6>Copy rights reserved @ {date}</h6>
    </div>
  );
};
export default Footer;
