import React, { useState } from "react";

//create your first component
export function Lights() {
	const [color, setColor] = useState(null);
	const classRed = color === "red" ? "red-selected" : "";
	const classYellow = color === "yellow" ? "yellow-selected" : "";
	const classGreen = color === "green" ? "green-selected" : "";

	return (
		<div className="bg-dark rounded mt-4 pt-1 pb-1 mx-auto col-1">
			<input
				className={classRed}
				type="radio"
				name="traffic-light-color"
				id="red"
				value="red"
				onClick={() => setColor("red")}
			/>
			<input
				className={classYellow}
				type="radio"
				name="traffic-light-color"
				id="yellow"
				value="yellow"
				onClick={() => setColor("yellow")}
			/>
			<input
				className={classGreen}
				type="radio"
				name="traffic-light-color"
				id="green"
				value="green"
				onClick={() => setColor("green")}
			/>
		</div>
	);
}
