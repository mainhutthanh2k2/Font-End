import classNames from "classnames/bind";
import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Promotion.scss";
const Styles = classNames.bind(styles);
function Promotion() {
  // className={Styles("Promotion_main")}
  return (
    <React.Fragment>
      <div className={Styles("Promotion_main")}>
        <div className={Styles("Promotion_img")}>
          <NavLink to="/headerOnly">
            <div className={Styles("imgg")}>
              <img src="https://images.fpt.shop/unsafe/fit-in/1200x100/fil…nals/2023/12/1/638370210308759071_H7_1200x100.png" />
            </div>
          </NavLink>
        </div>
        <div className={Styles("Promotion_hot")}>
          <p>
            <i className={Styles("fab fa-gripfire fire")}></i>
            <span>KHUYẾN MÃI HOT </span>
          </p>
          <div className={Styles("img_Promotion")}>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p>
                <div>Name</div>
                <div>Price</div>
              </p>
            </div>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p>
                <div>Name</div>
                <div>Price</div>
              </p>
            </div>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p>
                <div>Name</div>
                <div>Price</div>
              </p>
            </div>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p>
                <div>Name</div>
                <div>Price</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Promotion;
