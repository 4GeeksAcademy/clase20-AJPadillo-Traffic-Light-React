import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	console.log(color);

	return (
		<div className="container">
			<div className="col d-flex justify-content-center align-items-center">
				<div>
					<div className="bg-dark" id="barra">
						<br />
						<br />
						<br />
					</div>
					<div className="bg-dark rounded-3 p-3 pb-0 text-center" id="semaforo">
						<div className={`luzSemaforo ${(color === 'red') ? 'bg-danger' : 'bg-danger bg-opacity-50'} rounded-circle text-nowrap fs-1 mb-2 m-auto`} onClick={() => setColor("red")}>
							&nbsp;
						</div>

						<div className={`luzSemaforo ${(color === 'yellow') ? 'bg-warning' : 'bg-warning bg-opacity-50'} rounded-circle text-nowrap fs-1 mb-2 m-auto`} onClick={() => setColor("yellow")}>
							&nbsp;
						</div>

						<div className={`luzSemaforo ${(color === 'green') ? 'bg-success' : 'bg-success bg-opacity-50'} rounded-circle text-nowrap fs-1 m-auto`} onClick={() => setColor("green")}>
							&nbsp;
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;
