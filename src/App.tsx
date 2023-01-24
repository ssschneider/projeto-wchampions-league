import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/background";
import Header from "./components/header";
import CurrentSeason from "./pages/currentSeason";
import Home from "./pages/home";

function App() {
	return (
		<BrowserRouter>
		<Background />
		<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/currentSeason" element={<CurrentSeason />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
