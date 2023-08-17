import { Link } from 'react-router-dom';

type Props = {
  products: IProduct[];
};

const Products = ({ products }: Props) => {
  return (
    <div>
      <h1>Products page</h1>
      {products?.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
