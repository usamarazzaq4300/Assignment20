import "./LandingPage.css"
import bannerImage from "../assets/outfit.jpg"
import mens1 from "../assets/mens1.jpg"
import womens1 from "../assets/womens1.jpg"
import kids1 from "../assets/kids1.jpg"


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
                                <li className="categoriesList"><button className="btn">Men's</button></li>
                                <li className="categoriesList"><button className="btn">Women's</button></li>
                                <li className="categoriesList"><button className="btn">Kid's</button></li>
                                <li className="categoriesList"><button className="btn">Accessories</button></li>
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
                        <img className="banner" src={mens1} alt="shirt" />
                        <p className="details">Denim Shirt with Press Buttons <br />PKR 2,890</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={womens1} alt="shirt" />
                        <p className="details">Flawless Striped Tee<br />PKR 1,290</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={kids1} alt="shirt" />
                        <p className="details">OFTR Patch Pocket Button Down Shirt <br /> PKR 1,890</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="banner" src={mens1} alt="shirt" />
                        <p className="details">Denim Shirt with Press Buttons <br />PKR 2,890</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={womens1} alt="shirt" />
                        <p className="details">Flawless Striped Tee<br />PKR 1,290</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={kids1} alt="shirt" />
                        <p className="details">OFTR Patch Pocket Button Down Shirt <br /> PKR 1,890</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="banner" src={mens1} alt="shirt" />
                        <p className="details">Denim Shirt with Press Buttons <br />PKR 2,890</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={womens1} alt="shirt" />
                        <p className="details">Flawless Striped Tee<br />PKR 1,290</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={kids1} alt="shirt" />
                        <p className="details">OFTR Patch Pocket Button Down Shirt <br /> PKR 1,890</p>
                    </div>
                </div>

            </div>
        </div>






    )
}
export default LandingBanner;