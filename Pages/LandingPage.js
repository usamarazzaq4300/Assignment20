import "./LandingPage.css"
import bannerImage from "../assets/outfit.jpg"
function LandingBanner() {
    return (
            <div>
                <img className="banner" src={bannerImage} alt="bannerImage" />   
            </div>
      
    )
}
export default LandingBanner;