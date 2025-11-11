import Item from "./Item";

const ItemList = ({ productos }) => {
	return (
		<div className="productos-grilla">
			{productos.map((prod) => (
				<Item producto={prod} key={prod.id} />
			))}
		</div>
	);
};

export default ItemList;
