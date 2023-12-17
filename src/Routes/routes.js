<<<<<<< HEAD
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
=======
import { HeaderOnly, Default_Layout, MainLayout } from "~/commonest/Layout";
import Home from "~/Pages/Home/home";
import Following from "~/Pages/Following/following";
import Upload from "~/Pages/upload/upload";
import Header from "~/Pages/HeaderOnly/headerOnly";
import Search from "~/Pages/Search/Search";
import {
  ProductManager,
  CategoryManager,
  CustomerManager,
} from "~/Pages/Admin";

>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
// public router
const publicRouter = [
  {
    path: "/",
    component: Home,
<<<<<<< HEAD
=======
    layout: Default_Layout,
  },
  {
    path: "/following",
    component: Following,
>>>>>>> 1ff7c3981c6692c9f047e4f2ccb5c2e18d605b6d
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
  {
    path: "/admin/product",
    component: ProductManager,
    layout: MainLayout,
  },
  {
    path: "/admin/category",
    component: CategoryManager,
    layout: MainLayout,
  },
  {
    path: "/admin/customer",
    component: CustomerManager,
    layout: MainLayout,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
