import acc1 from "../assets/accc1.jpg"
import acc2 from "../assets/acc2.jpg"
import acc3 from "../assets/acc3.jpg"
import acc4 from "../assets/acc4.jpg"
import acc5 from "../assets/acc5.jpg"
import acc6 from "../assets/acc6.jpg"
function Access()
{
    return(
        <div>
             <div className="container-fluid">
               <div className="container">
               <div className="row">
               <div className="col-4">
                        <img className="banner" src={acc1} alt="shirt" />
                        <p className="details">Infinity Buckle Belt <br /> PKR 1,890</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={acc2} alt="shirt" />
                        <p className="details">Frayed Hem Scarf <br /> PKR 1,690</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={acc3} alt="shirt" />
                        <p className="details">Backpack with Chain Detail <br /> PKR 4,490</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="banner" src={acc4} alt="shirt" />
                        <p className="details">Tie-Dye P-Cap <br /> PKR 1,490</p>

                    </div>
                    <div className="col-4">
                        <img className="banner" src={acc5} alt="shirt" />
                        <p className="details">Set of Anklet Socks <br /> PKR 790</p>
                    </div>
                    <div className="col-4">
                        <img className="banner" src={acc6} alt="shirt" />
                        <p className="details">Eyelet Belt <br /> PKR 1,690</p>
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