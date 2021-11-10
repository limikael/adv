import {emStyle} from "../utils/react-util.js";

export default function MenuView(props) {
	if (!props.model.menuVisible)
		return null;

	menuItems={
		restart: "Restart",
		refresh: "Refresh",
		undo: "Undo",
		redo: "Redo"
	};

	let menuButtons=[];
	let i=0;
	for (let k in menuItems) {
		function dispatcher() {
			props.model.dispatcher("toggleMenu")();
			props.model.dispatcher(k)();
		}

		menuButtons.push(
			<a style={emStyle(0,i*2,9,2)} class="adv-bx text-black adv-menu-item"
					onclick={dispatcher}>
				{menuItems[k]}
			</a>
		);

		i++;
	}

	return (
		<Fragment>
			<div class="adv-modal-cover bg-body"
					onclick={props.model.dispatcher("toggleMenu")}/>
			<div style={emStyle(0,1,10,i*2+1)} class="adv-bx bg-white border-black">
				{menuButtons}
			</div>
		</Fragment>
	);
}