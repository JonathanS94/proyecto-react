import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { toCapital } from "../helpers/toCapital";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [titulo, setTitulo] = useState("Productos");

	const categoria = useParams().categoria;

	useEffect(() => {
		const productosRef = collection(db, "productos");

		const q = categoria
			? query(productosRef, where("categoria", "==", categoria))
			: productosRef;

		getDocs(q).then((res) => {
			setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
