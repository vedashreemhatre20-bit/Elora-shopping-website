import { Navbar } from "../Component/Navbar";
export function Cart() 
{
	return (
		<div className="Cart">
            <Navbar />
			<h1>Your Cart</h1>
			<p>Your selected items will appear here.</p>

            <div className="CartItem">
                <h3>Luxury Handbag</h3>
                <img src="https://i.pinimg.com/originals/ec/0f/ba/ec0fbae91370cc2c4f77f7958304ab2a.jpg" alt="Handbag" />
                <p>₹2499</p>
            </div>

            <hr className="CartDivider" />

            <div className="CartItem">
                <img src="https://tse4.mm.bing.net/th/id/OIP.OubzqFNb5ZZN7D0XOPG7rwHaEJ?pid=Api&P=0&h=180" alt="Skin Care" />
                <h3>Skin Care Kit</h3>
                <p>₹1999</p>
            </div>

            <hr className="CartDivider" />

            <h2>Total: ₹4498</h2>
            <button>Proceed to Checkout</button>
		</div>
	);
}
