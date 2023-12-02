import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "~/Routes/routes";
import { Default_Layout } from "~/commonest/Layout";
/* const Layout = router.layout === null ? react.Fragment : Default_Layout; */

import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/fonts/fontawesome-free-6.4.2-web/css/all.min.css";
import "./App.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, index) => {
                        const Page = router.component;
                        let Layout = Default_Layout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = react.Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
