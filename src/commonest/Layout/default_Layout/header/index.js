import React from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
<<<<<<< HEAD

import LoginModal from "~/commonest/modals/LoginModal";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "~/store/slice/userSlice";
import _ from "lodash";
=======
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { NavLink } from "react-router-dom";

import LoginModal from "~/commonest/modals/LoginModal";
import { logout } from "~/store/slice/userSlice";
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d

// import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional

import "tippy.js/dist/tippy.css"; // optional
import style from "./style_header.scss";
const Styles = classNames.bind(style);

function Header() {
  const get_localStorage = JSON.parse(localStorage.getItem("searchs")); // lay du lieu tu localStorage ra

  const [search, set_count] = React.useState("");
  const [searchs, set_counts] = React.useState(get_localStorage);
  const [showModal, setShowModal] = React.useState(false);
  const user = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handlesubmit = () => {
    set_counts((e) => {
      const new_search = (e && [...e, search]) || [search];
      const string = JSON.stringify(new_search);
      localStorage.setItem("searchs", string); // them vao localStorage de luu ket qua tim kiem
      return new_search;
    });
    set_count("");
  };

  const handleModalLogin = (e) => {
    e.preventDefault();
  };

<<<<<<< HEAD
  const handleLogout = () => {};

=======
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
  return (
    <header className={Styles("header_web_fpt")}>
      <div className={Styles("header_web_fpt_one")}>
        <div className={Styles("flex_header")}>
          <div className={Styles("logo_fpt")}></div>
          <span className={Styles("span_shop")}>
            Shop<span className={Styles("span_comvn")}>.com.vn</span>
          </span>
          <Tippy
            visible={search.length > 0}
            interactive
            render={(attrs) => (
              <div className={Styles("result_search")} tapIndex="-1" {...attrs}>
                <div className={Styles("result")}>
                  <span className={Styles("span_result")}>
                    Kết quả tìm kiếm
                  </span>
                </div>
                <ul className={Styles("ul_search")}>
                  {searchs &&
                    searchs.map((result, index) => (
                      <li key={index}> {result}</li>
                    ))}
                </ul>
              </div>
            )}
          >
            <form action className={Styles("form_search")}>
              <input
                className={Styles("search")}
                type={Text}
                placeholder="Nhập tên điện thoại, máy tính phụ kiện... cần tìm"
                autoComplete="off"
<<<<<<< HEAD
                required
=======
                // required
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
                value={search}
                onChange={(e) => set_count(e.target.value)}
              />

              <button className={Styles("button")} onClick={handlesubmit}>
<<<<<<< HEAD
                <i class="fas fa-search"></i>
=======
                <i className="fas fa-search"></i>
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
              </button>
            </form>
          </Tippy>
          <ul className={Styles("ul_header")}>
            <li className={Styles("infor")}>
              <a href="">
<<<<<<< HEAD
                <i className={Styles("fas fa-file-alt icon")}></i>
=======
                <i className="fas fa-file-alt icon  "></i>

>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
                <p>Thông tin hay</p>
              </a>
              <div className={Styles("box_infor")}>
                <ul className={Styles("ul_boxinfor")}>
                  <li>
                    <a href=""> Tin mới</a>
                  </li>
                  <li>
                    <a href=""> Khuyến mãi</a>
                  </li>
                  <li>
                    <a href=""> Điện máy - Gia Dụng</a>
                  </li>
                  <li>
                    <a href=""> Thủ Thuật</a>
                  </li>
                  <li>
                    <a href=""> For Gamers</a>
                  </li>
                  <li>
                    <a href="">Video hot</a>
                  </li>
                  <li>
                    <a href="">Đánh giá - Tư vấn</a>
                  </li>
                  <li>
                    <a href="">App - Game</a>
                  </li>
                  <li>
                    <a href="">Sự Kiện</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">
<<<<<<< HEAD
                <i class="fas fa-file-invoice-dollar icon"></i>
=======
                <i className="fas fa-file-invoice-dollar icon"></i>
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d

                <p>Thanh toán & tiện ích</p>
              </a>
            </li>
            <li>
              <a
                className="user_container"
                href=""
                onClick={(e) => {
                  handleModalLogin(e);
                  if (_.isEmpty(user)) {
                    handleShowModal();
                  }
                }}
              >
<<<<<<< HEAD
                <i class="fas fa-user-circle icon"></i>
                <p> {user?.name || "Tài khoản của tôi"}</p>
                {user && !_.isEmpty(user) && (
                  <ul className="user_option">
                    <li onClick={() => dispatch(logout())}>
                      <i class="fa-solid fa-right-from-bracket"></i>
=======
                <i className="fas fa-user-circle icon"></i>
                <p> {user?.name || "Tài khoản của tôi"}</p>
                {user && !_.isEmpty(user) && (
                  <ul className="user_option">
                    {user.role === "R0" && (
                      <li>
                        <NavLink to={"/admin/product"}>
                          <i className="fa-solid fa-user-tie"></i>
                          Trang quản trị
                        </NavLink>
                      </li>
                    )}
                    <li onClick={() => dispatch(logout())}>
                      <i className="fa-solid fa-right-from-bracket"></i>
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
                      Đăng xuất
                    </li>
                  </ul>
                )}
              </a>
            </li>
            <li>
              <a href="">
<<<<<<< HEAD
                <i class="fas fa-cart-arrow-down icon"></i>
=======
                <i className="fas fa-cart-arrow-down icon"></i>
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
                <p>Giỏ hàng</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <LoginModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      ></LoginModal>
    </header>
  );
}

export default Header;
