import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Mens from "./Men"
import Header from "../Components/Header";
import LandingBanner from "./LandingPage";
import Footer from "../Components/Footer";
import Mens1 from "./Mens1";
import Mens2 from "./Mens2";
import Mens3 from "./Mens3";
import Mens4 from "./Mens4";
import Mens5 from "./Mens5"
import Mens6 from "./Mens6"
import Womens from "./Women";
import Womens1 from "./Womens1";
import Womens2 from "./Womens2";
import Womens3 from "./Womens3"
import Womens4 from "./Womens4"
import Womens5 from "./Womens5"
import Womens6 from "./Womens6"
import Kids1 from "./Kids1"
import Kids2 from "./Kids2";
import Kids3 from "./Kids3";
import Kids4 from "./Kids4";
import Kids5 from "./Kids5";
import Kids6 from "./Kids6";
import Juniors from "./Juniors";
import Access from "./Accessorries";
import Access1 from "./Access1"
import Access2 from "./Access2";
import Access3 from "./Access3";
import Access4 from "./Access4";
import Access5 from "./Access5";
import Access6 from "./Access6";

function Routing() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path ="/">
                        <LandingBanner/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Home">
                        <LandingBanner />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens">
                        <Mens />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens">
                        <Womens />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Juniors">
                        <Juniors />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Accessories">
                        <Access />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens1">
                        <Mens1 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens2">
                        <Mens2 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens3">
                        <Mens3 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens4">
                        <Mens4 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens5">
                        <Mens5 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Mens6">
                        <Mens6 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens1">
                        <Womens1 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Kids1">
                        <Kids1 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/access1">
                        <Access1 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens2">
                        <Womens2 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Access2">
                        <Access2 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Access3">
                        <Access3 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Access4">
                        <Access4 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Access5">
                        <Access5 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Access6">
                        <Access6 />
                    </Route>
                </Switch>

                <Switch>
                    <Route path="/Kids2">
                        <Kids2 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Kids3">
                        <Kids3 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Kids4">
                        <Kids4 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Kids5">
                        <Kids5 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Kids6">
                        <Kids6 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens3">
                        <Womens3 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens4">
                        <Womens4 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens5">
                        <Womens5 />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/Womens6">
                        <Womens6 />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}
export default Routing;