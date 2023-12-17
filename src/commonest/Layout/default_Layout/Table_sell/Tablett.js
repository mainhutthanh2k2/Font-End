import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Tablet.scss";
<<<<<<< HEAD
import Taplet_Api from "~/API/ProductAPI";
const Styles = classNames.bind(style);
function Table_sell() {
  const [Taplet, settaplet] = React.useState({});
  React.useEffect(() => {
    const Taplett = async () => {
      let Seen_Taplet = await Taplet_Api.getProducts({
        category: "TL",
      });
      while (Seen_Taplet.length < 5) {
        Seen_Taplet = Seen_Taplet.concat(Seen_Taplet);
      }
      settaplet(Seen_Taplet);
    };
    Taplett().catch(console.error);
  }, []);
=======
const Styles = classNames.bind(style);
function Table_sell() {
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
  return (
    <div className={Styles("Outstanding_Tablet")}>
      <div className={Styles("Outstanding_tablet_center")}>
        <img src="https://images.fpt.shop/unsafe/filters:quality(90)…/Originals/2023/11/30/638369392838333568_html.png" />
      </div>
      <div className={Styles("Outstanding_phone_product")}>
        <div className={Styles("table_Outstanding_phone")}>
          <p className={Styles("phone_title")}>TABLET BÁN CHẠY</p>
<<<<<<< HEAD
          <div className={Styles("img_Promotionn")}>
            {Taplet &&
              Taplet.length > 0 &&
              Taplet.map((e, index) => {
                return (
                  <div className={Styles("img_Promotion_children")} key={index}>
                    <div className={Styles("hover_scale")}>
                      <img src={e.images} />
                    </div>
                    <p className={Styles("infor_product")}>
                      <NavLink to="/product">
                        <div className={Styles("name_productt")}>{e.name}</div>
                        <div className={Styles("price_product")}>
                          {Intl.NumberFormat("vi", {
                            style: "currency",
                            currency: "VND",
                          }).format(e.price)}
                        </div>
                        <div className={Styles("cdt-product__config__param")}>
                          <span></span>
                        </div>
                      </NavLink>
                      <NavLink to="/product" className={Styles("buy_now")}>
                        <span className={Styles("span")}>Mua ngay</span>
                      </NavLink>
                    </p>
                  </div>
                );
              })}
=======
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
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table_sell;
