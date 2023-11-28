import React from "react";
import Header from "./header";

function defaultLayout({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">{children}</div>
    </React.Fragment>
  );
}

export default defaultLayout;
