import {Link} from "react-router-dom"
import acc1 from "../assets/accc1.jpg"
import acc2 from "../assets/acc2.jpg"
import acc3 from "../assets/acc3.jpg"
import acc4 from "../assets/acc4.jpg"
import acc5 from "../assets/acc5.jpg"
import menAcc1 from "../assets/menAcc1.jpg"
function Access()
{
    return(
        <div>
             <div className="container-fluid">
               <div className="container">
               <div className="row">
               <div className="col-4">
                        <Link to="Access1"><img className="banner" src={acc1} alt="shirt" /></Link>
                        <p className="details">Infinity Buckle Belt <br /> PKR 1,890</p>

                    </div>
                    <div className="col-4">
                        <Link to="Access6"><img className="banner" src={acc2} alt="shirt" /></Link>
                        <p className="details">Frayed Hem Scarf <br /> PKR 1,690</p>
                    </div>
                    <div className="col-4">
                        <Link to="Access3"><img className="banner" src={acc3} alt="shirt" /></Link>
                        <p className="details">Backpack with Chain Detail <br /> PKR 4,490</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Link to="Access4"><img className="banner" src={acc4} alt="shirt" /></Link>
                        <p className="details">Tie-Dye P-Cap <br /> PKR 1,490</p>

                    </div>
                    <div className="col-4">
                        <Link to="Access5"><img className="banner" src={acc5} alt="shirt" /></Link>
                        <p className="details">Set of Anklet Socks <br /> PKR 790</p>
                    </div>
                    <div className="col-4">
                        <Link to="Access2"><img className="banner" src={menAcc1} alt="shirt" /></Link>
                        <p className="details">Cross Body Bag with Neon Accent and Buckle Closure<br />PKR 3,490 </p>
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
export default Access