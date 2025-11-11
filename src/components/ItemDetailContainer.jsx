import { useEffect, useState } from "react";
import { perdirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ itemId }) => {
	const [item, setItem] = useState(null);

	useEffect(() => {
		perdirItemPorId(itemId).then((res) => {
			setItem(res);
		});
	}, [itemId]);

	return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
