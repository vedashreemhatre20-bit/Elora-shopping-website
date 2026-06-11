import { Navbar } from "../Component/Navbar";
export function Products(){
    return(
        <div className="ProductsPage">
            <Navbar />
            <h1>Products Page</h1>

            <div className="ProductsList">
                <div className="ProductItem">
                    <img src="https://i.pinimg.com/originals/ec/0f/ba/ec0fbae91370cc2c4f77f7958304ab2a.jpg" alt="Handbag" />
                    <div className="ProductInfo">
                        <h3>Luxury Handbag</h3>
                        <p>₹2499</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="ProductSeparator" aria-hidden="true" />

                <div className="ProductItem">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.OubzqFNb5ZZN7D0XOPG7rwHaEJ?pid=Api&P=0&h=180" alt="Skin Care" />
                    <div className="ProductInfo">
                        <h3>Skin Care Kit</h3>
                        <p>₹1500</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="ProductItem">
                    <img src="https://i.pinimg.com/736x/d3/80/94/d380945e507a0a8a7310cbd00ab21494.jpg" alt="Dress" />
                    <div className="ProductInfo">
                        <h3>Elegant Dress</h3>
                        <p>₹3999</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="ProductItem">
                    <img src="https://i.pinimg.com/originals/9f/3f/d8/9f3fd8f26c2750212ea18a26aa7280ef.jpg" alt="Watch" />
                    <div className="ProductInfo">
                        <h3>Stylish Watch</h3>
                        <p>₹1999</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="ProductsList">
                <div className="ProductItem">
                    <img src="https://i.pinimg.com/originals/32/18/f7/3218f7ff33634ab691e30372e1874d91.jpg" alt="Sunglass" />
                    <div className="ProductInfo">
                        <h3>Sunglass</h3>
                        <p>₹1299</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="ProductItem">
                    <img src="https://di2ponv0v5otw.cloudfront.net/posts/2022/09/08/631a79e77dfcc281f592fc91/m_631a7a43614973b71b8934d3.jpg" alt="Footwear" />
                    <div className="ProductInfo">
                        <h3>Footwear</h3>
                        <p>₹1799</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="ProductItem">
                    <img src="https://tse4.mm.bing.net/th/id/OIP.82IfwctU8T08yth2ngx_LAHaHT?pid=Api&P=0&h=180" alt="Makeup Kit" />
                    <div className="ProductInfo">
                        <h3>Makeup Kit</h3>
                        <p>₹1599</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="ProductItem">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.ZzsFUbOeNnTyHo_4-_8mNgHaHa?pid=Api&P=0&h=180" alt="Tops" />
                    <div className="ProductInfo">
                        <h3>Tops</h3>
                        <p>₹999</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}