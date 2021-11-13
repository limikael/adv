import "./adved.css";
import AdvedApp from "./AdvedApp.jsx";
import {render} from "react";

for (let el of document.getElementsByClassName("adved-container"))
	render(<AdvedApp {...el.dataset}/>,el);
