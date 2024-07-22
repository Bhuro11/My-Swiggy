import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import { CART_IMG_URL } from "../utils/constants";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();

    const handleClearcart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4 pt-28">
            <div className="w-6/12 m-auto ">
                {/* <button className="p-2 m-2 bg-black text-white rounded-lg text-xl" onClick={handleClearcart}>Clear Cart</button> */}
                <img src={CART_IMG_URL} alt="Cart Img" />
                {cartItems.length === 0 && <h1 className="text-xl mt-6 text-[#535665] font-semibold">Your cart is empty</h1>} 
                {cartItems.length === 0 && <h1 className="text-sm mt-2 text-[#7e808c] font-normal">You can go to home page to view more restaurants</h1>} 
                <ItemList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;