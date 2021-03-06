import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home";
import CartButton from "./pages/cart/CartButton";
import Cart from "./pages/cart/Cart/Cart";
import ShoppingHelp from "./pages/help/ShoppingHelp";

const App = () => {
	return (
		<Router>
			<nav id="nav-container">
				<div id="nav-bar">
					<Link to="/" className="link-style">Store</Link>
          			<Link to="/cart" className="link-style"><CartButton/></Link>
				</div>
			</nav>
			<Routes>
				<Route path="/" element={<Home/>} />
        		<Route path="/cart" element={<Cart/>} />
				<Route path="/help" element={<ShoppingHelp/>} />
			</Routes>
		</Router>
	);
}

export default App;