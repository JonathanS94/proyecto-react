import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { toCapital } from "../helpers/toCapital";

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [titulo, setTitulo] = useState("Productos");

	const { categoria } = useParams();

	useEffect(() => {
		pedirDatos().then((res) => {
			if (categoria) {
				// Filtra por el ID de la categoría del JSON
				const filtrados = res.filter((prod) => prod.categoria.id === categoria);

				setProductos(filtrados);
				setTitulo(categoria);
			} else {
				setProductos(res);
				setTitulo("Productos");
			}
		});
	}, [categoria]);

	return (
		<div className="item-list-container">
			<h2 className="main-title">{toCapital(titulo)}</h2>
			<ItemList productos={productos} />
		</div>
	);
};

export default ItemListContainer;
