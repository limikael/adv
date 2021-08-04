import "preact/debug";
import AdvGame from "./app/AdvGame";

for (let el of document.getElementsByClassName("adv-game"))
	render(<AdvGame {...el.dataset}/>,el);
