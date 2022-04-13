import RecentDrinks from "./RecentDrinks";
import {Link} from "react-router-dom";
import Cart from "./Cart";

const Homepage = () => {
  return(
      <div>
        <div className="float-end">
        <Link to="/home">Home</Link> |
        <Link to="/login">Log In</Link> |
        <Link to="/search">Shop</Link> |
        <Link to="/privacy">Privacy</Link>
          <Cart/>
        </div>
        <RecentDrinks/>
      </div>
  )

}
export default Homepage;