import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
import { resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

export const Cart = () => {
   const products = useSelector((state) => state.cart.products);
   const dispatch = useDispatch();

   const totalPrice = () => {
      let total = 0;
      products.forEach((item) => (total += item.quantity * item.price));
      return total.toFixed(2);
   };

   const stripePromise = loadStripe(
      "pk_test_51MkrFtFVdPT8iFZdIBMtRtFoj3pzdPyGEBK9Tb6T6fw1BvJzoCdY2pD3O1bWyl5dw3Ly3cn5eWGj6HPqf2rnX5S900LwN1jHIe"
   );

   const handlePayment = async () => {
      try {
         const stripe = await stripePromise;

         const res = await makeRequest.post("/orders", {
            products,
         });
         await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
         });
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="cart">
         <h1>Products in your cart</h1>
         {products?.map((item) => (
            <div className="item" key={item.id}>
               <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
               <div className="details">
                  <h1>{item.title}</h1>
                  <p>{item.desc?.substring(0, 100)}</p>
                  <div className="price">
                     {item.quantity} x {item.price}
                  </div>
               </div>
               <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))} />
            </div>
         ))}
         <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
         </div>
         <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
         <span className="reset" onClick={() => dispatch(resetCart())}>
            Reset Cart
         </span>
      </div>
   );
};
