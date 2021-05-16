import Kids1 from "../assets/kids1.jpg"
import Kids2 from "../assets/kids2.jpg"
import Kids3 from "../assets/kids3.jpg"
import Kids4 from "../assets/kids4.jpg"
import Kids5 from "../assets/kids5.jpg"
import Kids6 from "../assets/kids6.jpg"
function Juniors() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img className="banner" src={Kids1} alt="shirt" />
                            <p className="details">OFTR Patch Pocket Button Down Shirt <br /> PKR 1,890</p>

                        </div>
                        <div className="col-4">
                            <img className="banner" src={Kids2} alt="shirt" />
                            <p className="details">Frill Hem & Sleeve Shirt <br /> PKR 1,890</p>
                        </div>
                        <div className="col-4">
                            <img className="banner" src={Kids3} alt="shirt" />
                            <p className="details">Broad Checkered Button Down Shirt <br /> PKR 1,690</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img className="banner" src={Kids4} alt="shirt" />
                            <p className="details">Basic Button Down Shirt with Tie <br /> PKR 1,590</p>

                        </div>
                        <div className="col-4">
                            <img className="banner" src={Kids5} alt="shirt" />
                            <p className="details">Checkered Button Down Shirt <br /> PKR 1,490</p>
                        </div>
                        <div className="col-4">
                            <img className="banner" src={Kids6} alt="shirt" />
                            <p className="details">Striped Jumpsuit <br /> PKR 1,890</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
            </div>
        </div>
    )
}
export default Juniors;