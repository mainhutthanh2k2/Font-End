import React from "react";
<<<<<<< HEAD
import Header from "~/commonest/Layout/default_Layout/header/index";
=======
import Header from "./header";
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
// import Hea from "~/commonest/Layout/commonents/Header"
import MiddleBar from "./middle_bar/middle_bar";
import Container_one from "./container_one/body";
import Promotion from "./Promotion/Promotion";
import Outstanding_phone from "./Outstanding_phone/Outstanding_phone";
import Laptops_sell_well from "./Laptops_sell_well/Laptops_sell_welll";
import Table from "./Table_sell/Tablett";
<<<<<<< HEAD
import Footer from "./Footer/footer";
=======
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
function defaultLayout({children}) {
  return (
    <React.Fragment>
      <Header></Header>
      <MiddleBar></MiddleBar>
      <Container_one></Container_one>
      <Promotion></Promotion>
      <Outstanding_phone></Outstanding_phone>
      <Laptops_sell_well></Laptops_sell_well>
      <Table></Table>
<<<<<<< HEAD
      <Footer></Footer>
=======
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
      {/* <div className="container">{children}</div> */}
    </React.Fragment>
  );
}
export default defaultLayout;
