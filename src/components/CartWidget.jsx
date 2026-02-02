import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardWidget = () => {
	const { cantidadEnCarrito } = useContext(CartContext);
	return (
		<div>
			<Link className="menu-link" to="/carrito">
				Carrito
				<span className="numerito cartwidget"> {cantidadEnCarrito()}</span>
			</Link>
		</div>
	);
};

export default CardWidget;
