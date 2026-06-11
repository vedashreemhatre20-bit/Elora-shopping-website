export function ProductCard(){
    return(
        <div className="ProductCardWrapper">
            <h2>Featured Product</h2>
            <div className="ProductCardContainer">
                <div className="ProductCard">
                    <img src="https://images.stockcake.com/public/f/c/2/fc295fd2-c8c8-4068-948f-c10ed66e9493/luxury-floating-elegance-stockcake.jpg"
                    alt="Luxury Handbag"
                    style={{width:"150px",height:"150px"}}/>
                    <h3>Luxury HandBag</h3>
                    <p>₹2499</p>
                </div>

                <div className="ProductCard">
                    <img src="https://m.media-amazon.com/images/I/81SivM1OZtL._AC_.jpg" alt="Skin Care"
                    style={{width:"150px",height:"150px"}}/>
                    <h3>Skin Care Kit</h3>
                    <p>₹1500</p>
                </div>

                <div className="ProductCard">
                    <img src="https://i.pinimg.com/originals/44/84/f3/4484f3c5f0f69112ae8383a9e5979ada.jpg" alt="Dress"
                    style={{width:"150px",height:"150px"}}/>
                    <h3>Elegant Dress</h3>
                    <p>₹3999</p>
                </div>
            </div>
        </div>
    );
}