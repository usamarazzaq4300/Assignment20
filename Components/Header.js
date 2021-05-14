import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div>
            <div className="container-fluid" id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-3" id="mainName">
                            <span id="FLogo">COLO</span><span id="SLogo">SHOP</span>
                        </div>
                        <div className="col-6"  id="one">
                            <ul>
                                <li className="pagesList"><a className="PagesLink" href="#">Home</a></li>
                                <li className="pagesList"><a className="PagesLink" href="#">Men</a></li>
                                <li className="pagesList"><a className="PagesLink" href="#">Women</a></li>
                                <li className="pagesList"><a className="PagesLink" href="#">Kids</a></li>
                                <li className="pagesList"><a className="PagesLink" href="#">contact</a></li>
                                
                            </ul>
                        </div>
                        <div className="col-1"  id="one"></div>
                        <div className="col-2"  id="one">
                            <ul>
                                <li className="icons"><SearchIcon /></li>
                                <li className="icons"><PersonIcon /></li>
                                <li className="icons"><ShoppingCartIcon /></li>
                            </ul>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
export default Header;