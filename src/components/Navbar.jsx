const Navbar = () => {
	return (
		<header className="header">
			<h1 className="logo">Mi Tienda</h1>
			<nav className="nav">
				<ul className="nav-menu">
					<li>
						<a className="nav-link active" href="#">
							Inicio
						</a>
					</li>
					<li>
						<a className="nav-link" href="#">
							Productos
						</a>
					</li>
					<li>
						<a className="nav-link" href="#">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
