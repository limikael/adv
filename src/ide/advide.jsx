import "./advide.css";
import AdvideApp from "./AdvideApp.jsx";
import {render} from "react";

for (let el of document.getElementsByClassName("advide-container"))
	render(<AdvideApp {...el.dataset}/>,el);
