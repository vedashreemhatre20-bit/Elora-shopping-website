import { Navbar } from "../Component/Navbar";
export function Contact(){
    return(
        <div className="Contact">
            <Navbar />
            <h1>Contact Us</h1>

            <p>Mumbai, Maharashtra</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: contact@elora.com</p>

            <img src="https://i.pinimg.com/736x/6b/7b/aa/6b7baa929c1610bfd8575e5d37aa45dc.jpg" alt="Contact Us" />
        </div>
    );
}