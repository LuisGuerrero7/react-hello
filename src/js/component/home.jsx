import React from "react";
import ReactDOM from 'react-dom';
import Card from "./card";


//create your first component
const Home = ({seconds}) => {

	return (		
		<div>
			<div className="container-fluid d-flex justify-content-center gap-2 bg-dark">
						
						<div className="card bg-black text-light">
							<div className='card-body'>
								<i className="fa-solid fa-clock"></i>
							</div>
						</div>

						<Card number = {Math.floor(seconds % 1000000 / 10000)}/>
						<Card number = {Math.floor(seconds % 100000 / 10000)}/>
						<Card number = {Math.floor(seconds % 10000 / 1000)}/>
						<Card number = {Math.floor(seconds % 1000 / 100)}/>
						<Card number = {Math.floor(seconds % 100 / 10)}/>
						<Card number = {seconds % 10}/>
			</div>
			
			

		</div>

		
	);
};

export default Home;
