import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	console.log(color);

	return (
		<div className="text-center">

			<div className={`bg-danger ${( color === 'red') ? 'active' : ''}`} onClick={() => setColor("red")}>
				ROJO
			</div>

			<div className={`bg-warning ${(color === 'yellow') ? 'active' : ''}`} onClick={() => setColor("yellow")}>
				AMARILLO
			</div>

			<div className={`bg-success ${(color === 'green') ? 'active' : ''}`} onClick={() => setColor("green")}>
				VERDE
			</div>

		</div>
	);
};

export default Home;
