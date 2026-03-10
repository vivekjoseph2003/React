import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import { Link, useNavigate } from "react-router-dom";

function ProductList(){

  const user = useSelector(store => store.auth.user)
  const products = useSelector(store => store.product.products)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{

    if(!user){
      navigate("/login")
      return
    }

    if(products.length === 0){

      axios.get(
        "https://worksheet-product.mashupstack.com/product",
        {
          headers:{
            Authorization:"Bearer "+user.token
          }
        }
      ).then(response=>{
        dispatch(setProducts(response.data))
      })
    }

  },[user, dispatch, navigate, products.length])   // ✅ FIXED DEPENDENCIES

  return(
    <div>

      <h2>Product List</h2>

      {products.map(product=>(
        <div key={product.id}>

          <h3>{product.name}</h3>

          <Link to={"/product/"+product.id}>
            View
          </Link>

        </div>
      ))}

    </div>
  )
}

export default ProductList