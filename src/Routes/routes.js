import {
  Default_Layout,
  Smart_phone,
  Laptop_Layout,
  Tablet_Layout,
  Alone_product,
} from "~/commonest/Layout";
import Home from "~/Pages/Home/home";
import Smartphone from "~/Pages/Smart_phone/Smart_phone";
import Laptop from "~/Pages/LapTop/Laptop";
import Tablet from "~/Pages/Tablet/Tablet";
// public router
const publicRouter = [
  {
    path: "/",
    component: Home,
    layout: Default_Layout,
  },
  {
    path: "/smart_phone",
    component: Smartphone,
    layout: Smart_phone,
  },
  {
    path: "/laptop",
    component: Laptop,
    layout: Laptop_Layout,
  },
  {
    path: "/tablet",
    component: Tablet,
    layout: Tablet_Layout,
  },
  {
    path: "/product",
    component: Alone_product,
    layout: Alone_product,
  },
];
const privateRouter = [];
export {publicRouter, privateRouter};
