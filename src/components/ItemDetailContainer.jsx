import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    );
};

export default ItemDetailContainer;
