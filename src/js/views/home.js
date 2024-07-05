import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from '../component/Card.jsx'
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5 bg-dark">


			<div className="container">
				<section className="d-flex overflow-auto mx-auto bg-dark" style={{ width: '90%' }}>
					{store.people?.results?.map(el => <Card key={el.uid} name={el.name} uid={el.uid} type={'people'} />)}
				</section>
				<section className="d-flex overflow-auto mx-auto bg-dark my-5" style={{ width: '90%' }}>
					{store.planets?.results?.map(el => <Card key={el.uid} name={el.name} uid={el.uid} type={'planets'} />)}
				</section>
				<section className="d-flex overflow-auto mx-auto bg-dark my-5" style={{ width: '90%' }}>
					{store.starships?.results?.map(el => <Card key={el.uid} name={el.name} uid={el.uid} type={'starships'} />)}
				</section>
				<section className="d-flex overflow-auto mx-auto bg-dark my-5" style={{ width: '90%' }}>
					{store.vehicles?.results?.map(el => <Card key={el.uid} name={el.name} uid={el.uid} type={'vehicles'} />)}
				</section>
			</div>
		</div>
	);
}