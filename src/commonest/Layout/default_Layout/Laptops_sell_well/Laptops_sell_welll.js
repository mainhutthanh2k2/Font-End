import React from "react";
import {NavLink} from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import style from "./Laptopss_sell_well.scss";
const Styles = classNames.bind(style);
function Laptops_sell_well() {
  return (
    <div className={Styles("Outstanding_laptop")}>
      <Tippy content="thanh" placement="top">
        <div className={Styles("Outstanding_laptop_center")}>
          <img src="https://images.fpt.shop/unsafe/filters:quality(90)…/Originals/2023/11/30/638369392838333568_html.png" />
        </div>
      </Tippy>
      <div className={Styles("Outstanding_phone_product")}>
        <div className={Styles("table_Outstanding_phone")}>
          <p className={Styles("phone_title")}>LAPTOP BÁN CHẠY</p>
          <div className={Styles("img_Promotion")}>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p className={Styles("infor_product")}>
                <NavLink to="">
                  <div className={Styles("name_productt")}>Name</div>
                </NavLink>
                <div className={Styles("price_product")}>Price</div>
                <div className={Styles("cdt-product__config__param")}>
                  <span>sdsasdasdassda</span>
                  <span>sdsdasdasdsads</span>
                  <span>sds</span>
                  <span>sds</span>
                  <span>sds</span>
                </div>
                <NavLink to="" className={Styles("buy_now")}>
                  <span>Mua ngay</span>
                </NavLink>
              </p>
            </div>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p className={Styles("infor_product")}>
                <NavLink to="">
                  <div className={Styles("name_productt")}>Name</div>
                </NavLink>
                <div className={Styles("price_product")}>Price</div>

                <div className={Styles("cdt-product__config__param")}>
                  <span>sdsasdasdassda</span>

                  <span>sdsdasdasdsads</span>
                  <span>sds</span>
                  <span>sds</span>
                  <span>sds</span>
                </div>

                <NavLink to="" className={Styles("buy_now")}>
                  <span>Mua ngay</span>
                </NavLink>
              </p>
            </div>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p className={Styles("infor_product")}>
                <NavLink to="">
                  <div className={Styles("name_productt")}>Name</div>
                </NavLink>
                <div className={Styles("price_product")}>Price</div>
                <div className={Styles("cdt-product__config__param")}>
                  <Tippy content="thanh" placement="top">
                    <span>thanh</span>
                  </Tippy>
                  <span>sdsdasdasdsads</span>
                  <span>sds</span>
                  <span>sds</span>
                  <span>sds</span>
                </div>
                <NavLink to="" className={Styles("buy_now")}>
                  <span>Mua ngay</span>
                </NavLink>
              </p>
            </div>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p className={Styles("infor_product")}>
                <NavLink to="">
                  <div className={Styles("name_productt")}>Name</div>
                </NavLink>
                <div className={Styles("price_product")}>Price</div>
                <div className={Styles("cdt-product__config__param")}>
                  <span>sdsasdasdassda</span>
                  <span>sdsdasdasdsads</span>
                  <span>sds</span>
                  <span>sds</span>
                  <span>sds</span>
                </div>
                <NavLink to="" className={Styles("buy_now")}>
                  <span>Mua ngay</span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptops_sell_well;
