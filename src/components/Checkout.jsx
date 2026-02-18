import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
	const [pedidoId, setPedidoId] = useState("");
	const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

	const { register, handleSubmit } = useForm();

	const comprar = async (data) => {
		if (carrito.length === 0) {
			alert("El carrito está vacío");
			return;
		}

		try {
			const pedido = {
				cliente: data,
				productos: carrito,
				total: precioTotal(),
				fecha: new Date(),
			};

			const docRef = await addDoc(collection(db, "pedidos"), pedido);

			setPedidoId(docRef.id);
			vaciarCarrito();
		} catch (error) {
			console.error("Error al crear el pedido:", error);
			alert("Hubo un error al procesar la compra");
		}
	};
	if (pedidoId) {
		return (
			<div className="container">
				<h1 className="main-title">Muchas gracias por tu compra!</h1>
				<p>Tu número de pedido es: {pedidoId}</p>
			</div>
		);
	}
	return (
		<div className="container">
			<h1 className="main-title">Finalizar Compra</h1>
			<form className="formulario" onSubmit={handleSubmit(comprar)}>
				<input
					type="text"
					placeholder="Ingresá tu nombre"
					{...register("nombre")}
				/>
				<input
					type="email"
					placeholder="Ingresá tu email"
					{...register("email")}
				/>
				<input
					type="phone"
					placeholder="Ingresá tu teléfono"
					{...register("telefono")}
				/>

				<button className="enviar" type="submit">
					Comprar
				</button>
			</form>
		</div>
	);
};

export default Checkout;
