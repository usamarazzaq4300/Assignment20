import {Link} from "react-router-dom"
import womens1 from "../assets/womens1.jpg"
import womens2 from "../assets/womens2.jpg"
import womens3 from "../assets/womens3.jpg"
import womens4 from "../assets/womens4.jpg"
import womens5 from "../assets/womens5.jpg"
import womens6 from "../assets/womens6.jpg"
function Womens()
{
    return(
      <div>
           <div className="container-fluid">
               <div className="container">
               <div className="row">
               <div className="col-4">
                        <Link to="Womens1"><img className="banner" src={womens1} alt="shirt" /></Link>
                        <p className="details">Flawless Striped Tee <br /> PKR 1,290</p>

                    </div>
                    <div className="col-4">
                        <Link to="Womens2"><img className="banner" src={womens2} alt="shirt" /></Link>
                        <p className="details">Jersey Culottes with Pin tucks Detail <br /> PKR 1,990</p>
                    </div>
                    <div className="col-4">
                        <Link to="Womens3"><img className="banner" src={womens3} alt="shirt" /></Link>
                        <p className="details">Tie Up Hem Blouse <br /> PKR 2,490</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Link to="Womens4"><img className="banner" src={womens4} alt="shirt" /></Link>
                        <p className="details">Striped Scarf with Frayed Hem <br /> PKR 1,690</p>

                    </div>
                    <div className="col-4">
                        <Link to="Womens5"><img className="banner" src={womens5} alt="shirt" /></Link>
                        <p className="details">Mini Crossbody Bag with a Chain Sling <br /> PKR 3,490</p>
                    </div>
                    <div className="col-4">
                        <Link to="Womens6"><img className="banner" src={womens6} alt="shirt" /></Link>
                        <p className="details">Cap Sleeves Button Down Shirt <br /> PKR 2,290</p>
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
export default Womens;