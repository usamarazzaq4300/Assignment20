import StarsIcon from '@material-ui/icons/Stars';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from "react"
import "./SepatatePageStyle.css"
import mens5 from "../assets/mens5.jpg"
function Mens5() {
    var counter = 0
    const [counter2, setCounter] = useState(0)
    const incrementHandler = () => {
        counter = counter + 1
        setCounter(counter2 + 1)
    }
    const decrementHandler = () => {
        counter = counter - 1
        setCounter(counter2 - 1)
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h1 id="main">Main Section</h1>
                            <img className="img" src={mens5} alt="BlueShirt" />
                        </div>
                        <div className="col-5">
                            <h2 id='detail'>Trainers with Contrast Sole</h2>
                            <h4>PKR 3,990</h4>
                            <StarsIcon /><StarsIcon /><StarsIcon />
                            <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reiciendis magnam vitae deleniti nihil maiores quam quae molestiae rerum
                             dignissimos iusto quo maxime vero, minima dolor ut sed quibusdam cum laboriosam!</p>
                            <h4>Quantity</h4>

                            <br />
                            <button className="btn" onClick={decrementHandler}> - </button>
                            <span style={{ padding: 20, fontSize: 20 }}>
                                {counter2}
                            </span>
                            <button className="btn" onClick={incrementHandler}> + </button>
                            <br /><br /><br />
                            <button className="btn">Buy Now</button>&nbsp; &nbsp; &nbsp;
                             <button className="btn"><ShoppingCartIcon /> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mens5;