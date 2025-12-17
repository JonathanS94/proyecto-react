import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="header">
			<h1 className="logo">Mi Tienda</h1>
			<nav className="nav">
				<ul className="nav-menu">
					<li>
						<Link className="nav-link active" to="/">
							Inicio
						</Link>
					</li>

					<li>
						<Link className="nav-link" to="/productos">
							Productos
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/productos/ropa">
							Ropa
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/productos/accesorios">
							Accesorios
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/productos/tecnologia">
							Tecnología
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/nosotros">
							Nosotros
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/contacto">
							Contacto
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
