import mens1 from "../assets/mens1.jpg"
import mens2 from "../assets/mens2.jpg"
import mens3 from "../assets/mens3.jpg"
import mens4 from "../assets/mens4.jpg"
import mens5 from "../assets/mens5.jpg"
import mens6 from "../assets/mens6.jpg"

function Mens() {
    return (
        <div>
           
           <div className="container-fluid">
               <div className="container">
               <div className="row">
               <div className="col-4">
                        <img className="banner" src={mens1} alt="shirt" />
                        <p className="details">Denim Shirt with Press Buttons <br />PKR 2,890</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={mens2} alt="shirt" />
                        <p className="details">Button Down Textured Shirt <br /> PKR 2,490</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={mens3} alt="shirt" />
                        <p className="details">Lace Up Trainers <br /> PKR 3,990</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="banner" src={mens4} alt="shirt" />
                        <p className="details">Basic Joggers <br /> PKR 2,290</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={mens5} alt="shirt" />
                        <p className="details">Trainers with Contrast Sole <br /> PKR 3,990</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={mens6} alt="shirt" />
                        <p className="details"> Regular Tapered Jeans <br /> PKR 2,890</p>
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
export default Mens;