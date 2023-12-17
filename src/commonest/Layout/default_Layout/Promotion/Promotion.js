import classNames from "classnames/bind";
import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Promotion.scss";
<<<<<<< HEAD
import Api_product from "~/API/ProductAPI";
const Styles = classNames.bind(styles);
function Promotion() {
  // className={Styles("Promotion_main")}
  const [product_hot, setProduct_hot] = React.useState({});
  React.useEffect(() => {
    const product_hoot = async () => {
      const dd = await Api_product.getProducts();
      setProduct_hot(dd);
    };
    product_hoot().catch(console.error);
  }, []);

=======
const Styles = classNames.bind(styles);
function Promotion() {
  // className={Styles("Promotion_main")}
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
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
<<<<<<< HEAD
            {product_hot &&
              product_hot.length > 0 &&
              product_hot.map((e, index) => {
                return (
                  <div className={Styles("img_Promotion_children")} key={index}>
                    <NavLink to="/laptop">
                      <div className={Styles("hover_scale")}>
                        <img src={e.images} />
                      </div>
                      <p>
                        <div>{e.name}</div>
                        <div className={Styles("price_productt")}>
                          {Intl.NumberFormat("vi", {
                            style: "currency",
                            currency: "VND",
                          }).format(e.price)}
                        </div>
                      </p>
                    </NavLink>
                  </div>
                );
              })}
=======
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
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Promotion;
