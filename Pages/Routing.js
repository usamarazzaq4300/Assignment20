import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Mens from "./Men"
import Header from "../Components/Header";
import LandingBanner from "./LandingPage";
import Footer from "../Components/Footer";
import Womens from "./Women";
import Juniors from "./Juniors";
import Access from "./Accessorries";
import Mens1 from "./Mens1";
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
                <Footer/>
            </Router>
        </div>
    )
}
export default Routing;