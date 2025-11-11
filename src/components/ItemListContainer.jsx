import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	console.log(productos);
	useEffect(() => {
		pedirDatos().then((res) => {
			setProductos(res);
		});
	}, []);

	return (
		<div className="item-list-container">
			<h2 className="main-title">Productos</h2>
			<ItemList productos={productos} />
		</div>
	);
};

export default ItemListContainer;
