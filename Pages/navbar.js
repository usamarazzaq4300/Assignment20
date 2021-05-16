import {Link} from "react-router-dom"
function NavBar()
{
    return(
        <div>
        {/* In java Linking  */}
          {/* <ul>
              <li> <a href="#">About</a></li>
              <li><a href="#">Company</a></li>
          </ul>  */}


        {/* In React Linking */}
        <Link to="about">About</Link>
        </div>

    )
}
export default NavBar