import AdvadminApp from "./AdvadminApp.jsx";
import {render} from "react";

for (let el of document.getElementsByClassName("editor-adv-content"))
	render(<AdvadminApp {...el.dataset}/>,el);
