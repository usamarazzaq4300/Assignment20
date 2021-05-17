import StarsIcon from '@material-ui/icons/Stars';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from "react"
import "./SepatatePageStyle.css"
import acc5 from "../assets/acc5.jpg"
function Access5() {
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
                            <img className="img" src={acc5} alt="BlueShirt" />
                        </div>
                        <div className="col-5">
                            <h2 id='detail'>Set of Anklet Socks</h2>
                            <h4>PKR 790</h4>
                            <StarsIcon /><StarsIcon />
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
export default Access5;