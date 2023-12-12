import React from "react";
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";
import style from "./Outstanding phone.scss";
const Styles = classNames.bind(style);
function Outstanding_phone() {
  return (
    <div className={Styles("Outstanding_phone")}>
      <div className={Styles("Outstanding_phone_center")}>
        <img src="https://images.fpt.shop/unsafe/filters:quality(90)…/Originals/2023/11/30/638369392838333568_html.png" />
      </div>
      <div className={Styles("Outstanding_phone_product")}>
        <div className={Styles("table_Outstanding_phone")}>
          <p className={Styles("phone_title")}>ĐIỆN THOẠI NỔI BẬT</p>
          <div className={Styles("img_Promotion")}>
            <div className={Styles("img_Promotion_children")}>
              <div className={Styles("hover_scale")}>
                <img src="	https://images.fpt.shop/unsafe/fit-in/540x420/filt…23/10/3/638319326499527430_frame-cate-270x210.png" />
              </div>
              <p className={Styles("infor_product")}>
                <NavLink to="/product">
                  <div className={Styles("name_productt")}>Name</div>
                  <div className={Styles("price_product")}>Price</div>
                  <div className={Styles("cdt-product__config__param")}>
                    <span>sdsasdasdassda</span>
                    <span>sdsdasdasdsads</span>
                    <span>sds</span>
                    <span>sds</span>
                    <span>sds</span>
                  </div>
                </NavLink>
                <NavLink to="/product" className={Styles("buy_now")}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outstanding_phone;
