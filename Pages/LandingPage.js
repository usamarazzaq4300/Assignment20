import "./LandingPage.css"
import {Link} from "react-router-dom"
import bannerImage from "../assets/outfit.jpg"
import mens1 from "../assets/mens1.jpg"
import Womens1 from "../assets/womens1.jpg"
import kids1 from "../assets/kids1.jpg"
import acc1 from "../assets/accc1.jpg"
import womens2 from "../assets/womens2.jpg"
import mensAcc1 from "../assets/menAcc1.jpg"
import kids2 from "../assets/kids2.jpg"
import kids3 from "../assets/kids3.jpg"
import womens3 from "../assets/womens3.jpg"
function LandingBanner() {
    return (
        // Landing Banner
        <div>
            <img className="banner" src={bannerImage} alt="bannerImage" />
            {/* Landing Banner */}

            {/* // Landing Categories */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row" id="categoriesRow">
                        <div className="col-12">
                            <h1 id="cat">CATEGORIES</h1>
                        </div>
                    </div>
                    <div className="row" id="categoriesRow">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <ul>
                                <li className="categoriesList"><Link to="Mens"><button className="btn">Men's</button></Link></li>
                                <li className="categoriesList"><Link to="Womens"><button className="btn">Women's</button></Link></li>
                                <li className="categoriesList"><Link to="Juniors"><button className="btn">Junior's</button></Link></li>
                                <li className="categoriesList"><Link to="Accessories"><button className="btn">Accessories</button></Link></li>
                            </ul>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
            {/* Landing Categories */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Link to="Mens1"><img className="banner" src={mens1} alt="shirt" /></Link>
                        <p className="details">Denim Shirt with Press Buttons <br />PKR 2,890</p>

                    </div>
                    <div className="col-4">
                    <Link to="Womens1"><img className="banner" src={Womens1} alt="shirt" /></Link>
                        <p className="details">Flawless Striped Tee<br />PKR 1,290</p>
                    </div>
                    <div className="col-4">
                    <Link to="kids1"><img className="banner" src={kids1} alt="shirt" /></Link>
                        <p className="details">OFTR Patch Pocket Button Down Shirt <br /> PKR 1,890</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Link to="access1"><img className="banner" src={acc1} alt="shirt" /></Link>
                        <p className="details">Infinity Buckle Belt <br /> PKR 1,890</p>

                    </div>
                    <div className="col-4">
                        <Link to="Womens2"><img className="banner" src={womens2} alt="shirt" /></Link>
                        <p className="details">Jersey Culottes with Pin tucks Detail <br /> PKR 1,990</p>
                    </div>
                    <div className="col-4">
                        <Link to="Access2"><img className="banner" src={mensAcc1} alt="shirt" /></Link>
                        <p className="details">Cross Body Bag with Neon Accent and Buckle Closure <br /> PKR 3,490</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Link to="Kids2"><img className="banner" src={kids2} alt="shirt" /></Link>
                        <p className="details">Character Sweatshirt<br />PKR 690 </p>

                    </div>
                    <div className="col-4">
                        <Link to="Kids3"><img className="banner" src={kids3} alt="shirt" /></Link>
                        <p className="details">Broad Checkered Button Down Shirt <br /> PKR 1,690</p>
                    </div>
                    <div className="col-4">
                        <Link to="Womens3"><img className="banner" src={womens3} alt="shirt" /></Link>
                        <p className="details">Tie Up Hem Blouse <br /> PKR 2,490</p>
                    </div>
                </div>

            </div>
            <div className="container">
                <hr />
            </div>
        </div>






    )
}
export default LandingBanner;