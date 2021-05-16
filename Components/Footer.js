import PhoneIcon from '@material-ui/icons/Phone'
import "./Footer.css"
function Footer()
{
    return(
        <div>
            <div className="container-fluid">
                <div className="contaier">
                    <div className="row" id="footerRow">
                        <div className="col-4" id="col">
                            <h5 id="help">Need Help?</h5>
                            <button className="btn">Contact</button>
                            <br /><br />
                            <PhoneIcon/> UAN:042 111-11-6387
                            <p>Mon-Fri 9.00 to 2.00 PST</p>
                        </div>
                        <div className="col-4" id="col">
                            <ul>
                            <li className="FaqList"><h3>FAQ's</h3></li>
                                <li className="FaqList"><a className="PagesLink" href="#">FAQ's</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">How to Buy</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Item Availability</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Payment</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Shipping % Deliveries</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Exchanges & Returns</a></li>                               
                            </ul>
                        </div>
                        <div className="col-4" id="col">
                            <ul>
                            <li className="FaqList"><h3>About COLOSHOP</h3></li>
                                <li className="FaqList"><a className="PagesLink" href="#">About Us</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Stores</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Contact Us</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Track Your Order</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">Complaint Form</a></li>
                                <li className="FaqList"><a className="PagesLink" href="#">News</a></li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;