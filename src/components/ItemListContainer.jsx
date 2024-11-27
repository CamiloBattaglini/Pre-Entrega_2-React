import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ItemListContainer = () => {
    const { id } = useParams();
    const filteredProducts = id
        ? products.filter((product) => product.category === id)
        : products;

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <a href={`/item/${product.id}`}>{product.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;
