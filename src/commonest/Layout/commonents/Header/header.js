import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const style = classNames.bind(styles);
function Header() {
  return <header className={style('swap')}>Header</header>

}

export default Header;
