import { Link } from "react-router-dom";

const ProductListData = ({ product }) => {
  const { _id, name, Stock, price } = product;
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{name}</td>
      <td>{Stock}</td>
      <td>{price}</td>
      <td>
        <Link to={`/admin/product/${_id}`}>Edit</Link>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default ProductListData;
