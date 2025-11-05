import React from "react";

function Navbar() {
	return (
		<div>
			<nav className="nav-bar">
				<a href="#" className="logo">
					<h1>YugiShop</h1>
				</a>
				<ul className="menu">
					<li>
						<a className="menu-link" href="#">
							Inicio
						</a>
					</li>
					<li>
						<a className="menu-link" href="#">
							Nosotros
						</a>
					</li>
					<li>
						<a className="menu-link" href="#">
							Productos
						</a>
					</li>
					<li>
						<a className="menu-link" href="#">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
