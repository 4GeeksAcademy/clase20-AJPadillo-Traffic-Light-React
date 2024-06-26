import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	console.log(color);

	return (
		<div className="container d-flex justify-content-center align-items-center">


			<div className="col-sm-1 col-md-1 col-lg-1">
				<div className="bg-dark text-center" id="barra">
				<br />
				<br />
				<br />
				</div>
				<div className="bg-dark rounded-3 p-3 text-center">
					<div className={`row-1 ${(color === 'red') ? 'bg-danger' : 'bg-danger bg-opacity-50'} rounded-circle text-nowrap fs-1 mb-2 p-0`} onClick={() => setColor("red")}>
					&nbsp;
					</div>

					<div className={`row-1 ${(color === 'yellow') ? 'bg-warning' : 'bg-warning bg-opacity-50'} rounded-circle text-warning fs-1 mb-2`} onClick={() => setColor("yellow")}>
						&nbsp;
					</div>

					<div className={`row-1 ${(color === 'green') ? 'bg-success' : 'bg-success bg-opacity-50'} rounded-circle text-success fs-1`} onClick={() => setColor("green")}>
						&nbsp;
					</div>
				</div>


			</div>
		</div>
	);
};

export default Home;
