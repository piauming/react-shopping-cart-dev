import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home";

const App = () => {
	return (
		<Router>
			<nav id="nav">
				<div id="nav-items">
					<Link to="/"> Home </Link>
				</div>
			</nav>
			<Routes>
				<Route path="/" element={<Home/>} />
			</Routes>
		</Router>
	);
}

export default App;