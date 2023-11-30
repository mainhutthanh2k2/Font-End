import {HeaderOnly, Default_Layout} from "~/commonest/Layout";
import Home from "~/Pages/Home/home";
import Following from "~/Pages/Following/following";
import Upload from "~/Pages/upload/upload";
import Header from "~/Pages/HeaderOnly/headerOnly";
import Search from "~/Pages/Search/Search";
// public router
const publicRouter = [
  {
    path: "/",
    component: Home,
    layout: Default_Layout,
  },
  {
    path: "/following",
    component: Following,
    layout: Default_Layout,
  },
  {
    path: "/upload",
    component: Upload,
  },
  {
    path: "/headerOnly",
    component: Header,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: Default_Layout,
  },
];
const privateRouter = [];
export {publicRouter, privateRouter};
