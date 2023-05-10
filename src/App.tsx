import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./authentication";
import Home from "./home";
import { Grommet } from "grommet";
import "./style/globals.scss";

const App = () => {
	return (
		<Grommet>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/authentication" element={<Authentication />} />
				</Routes>
			</BrowserRouter>
		</Grommet>
	);
};

export default App;
