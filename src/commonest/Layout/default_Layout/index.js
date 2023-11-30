import React from "react";
import Header from "./header";
// import Hea from "~/commonest/Layout/commonents/Header"
import MiddleBar from "./middle_bar/middle_bar";
import Body from "./Body/body";
function defaultLayout({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <Body></Body>
      {/* <div className="container">{children}</div> */}
    </React.Fragment>
  );
}
export default defaultLayout;
