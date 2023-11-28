import React from "react";
import Header from "./header";
import MiddleBar from "./middle_bar/middle_bar";
function defaultLayout({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <div className="container">{children}</div>
    </React.Fragment>
  );
}
export default defaultLayout;
