import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ item }) => {
	const [cantidad, setCantidad] = useState(1);

	const handleRestar = () => {
		if (cantidad > 1) {
			setCantidad(cantidad - 1);
		}
	};
	const handleSumar = () => {
		cantidad < item.stock && setCantidad(cantidad + 1);
	};
	const handleAgregar = () => {
		console.log({ ...item, cantidad });
	};

	return (
		<div className="container">
			<div className="producto-detalle">
				<img src={item.imagen} alt={item.nombre} />
				<div>
					<h3 className="titulo">{item.nombre}</h3>
					<p className="descripcion">{item.descripcion}</p>
					<p className="categoria">Categoria: {item.categoria?.nombre}</p>
					<p className="precio">Precio: ${item.precio}</p>
					<ItemCount
						cantidad={cantidad}
						handleSumar={handleSumar}
						handleRestar={handleRestar}
						handleAgregar={handleAgregar}
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
