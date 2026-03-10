import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewProduct(){

  const {id} = useParams()

  const products = useSelector(store => store.product.products)

  const product = products.find(p => p.id === id)   // ✅ FIXED (===)

  if(!product){
    return <h2>Product Not Found</h2>
  }

  return(
    <div>

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>Price: {product.price}</p>

      <p>Quantity: {product.quantity}</p>

    </div>
  )
}

export default ViewProduct