import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
	const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
	const handleVaciar = () => {
		vaciarCarrito();
	};
	return (
		<div className="container">
			<h1 className="main title">Carrito</h1>
			{carrito.map((prod) => (
				<div key={prod.id}>
					<h2>{prod.nombre}</h2>
					<p>Precio Unitario: ${prod.precio}</p>
					<p>Precio Total: ${prod.precio * prod.cantidad}</p>
					<p>Cantidad: {prod.cantidad}</p>
					<br />
					<br />
				</div>
			))}
			{carrito.length > 0 ? (
				<>
					<h2>Precio Total: ${precioTotal()}</h2>
					<button onClick={handleVaciar}>Vaciar Carrito</button>
				</>
			) : (
				<h2> El carrito esta vacio :( </h2>
			)}
		</div>
	);
};

export default Carrito;
