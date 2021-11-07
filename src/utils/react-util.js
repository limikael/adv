import {useRef, useReducer, useState, useEffect, useLayoutEffect} from "react";

export function useForceUpdate() {
	const [_, forceUpdate] = useReducer((x) => x + 1, 0);

	return forceUpdate;
}

export function useFactory(factory) {
	let ref=useRef();

	if (!ref.current) {
		//console.log("facory: creating new..");
		ref.current=factory();
		//console.log("facory: done creating...");
	}

	return ref.current;
}

export function useEventUpdate(target, event) {
	let forceUpdate=useForceUpdate();

	useLayoutEffect(()=>{
		let updater=forceUpdate;

		target.on(event,updater);
		return (()=>{
			target.off(event,updater);
		});
	},[target,event]);
}

export function useModel(cls, config) {
	let model=useFactory(()=>new cls(config));
	useEventUpdate(model,"change");

	return model;
}

export function useIsValueChanged(value) {
	let ref=useRef();
	let change=false;

	if (value!=ref.current)
		change=true;

	ref.current=value;

	return change;
}

export function emStyle(x, y, w, h) {
	return {
		"left": (x+.2)+"em",
		"top": (y+.2)+"em",
		"width": (w-.4)+"em",
		"height": (h-.4)+"em",
		"box-sizing": "border-box",
		"border-width": "0.1em",
		"border-style": "solid",
		"padding": "0.2em",
		"line-height": "1em",
		"margin": "0.2em",
		"border-color": "transparent"
	};
}

export function emAppStyle() {
	return {
		"margin": "-0.2em",
		"width": "100%",
		"height": "100%"
	};
}

export function accessibleLinkProps() {
	function onKeyDown(e) {
		if (e.keyCode==13 || e.keyCode==32) {
			e.stopPropagation();
			e.preventDefault();

			e.target.click();
		}
	}

	return {
		tabindex: "0",
		onkeydown: onKeyDown
	}
}

export function useInterval(callback, delay) {
	const savedCallback = useRef(callback)

	// Remember the latest callback if it changes.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		// Don't schedule if no delay is specified.
			if (delay === null) {
				return
		}

		const id = setInterval(() => savedCallback.current(), delay)

		return () => clearInterval(id)
	}, [delay])
}

export function useCountUp(value, enable) {
	let [currentValue,setCurrentValue]=useState(value);

	if (value<currentValue)
		setCurrentValue(value);

	function count() {
		if (Math.abs(value-currentValue)<1) {
			setCurrentValue(value);
			return;
		}

		if (currentValue<value) {
			currentValue=currentValue+(value-currentValue)*.25;

			setCurrentValue(currentValue);
		}
	}

	let delay=null;
	if (value!=currentValue && enable)
		delay=50;

	useInterval(count,delay);

	if (!enable)
		return value;

	return currentValue;
}

export function useWindowEventListener(message, callback) {
	useEffect(() => {
		function onEvent(e) {
			callback(e);
		}

		window.addEventListener(message,onEvent);
		return (()=>{
			window.removeEventListener(message,onEvent);
		});
	},[event,callback]);
}