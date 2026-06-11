import { Navbar } from "../Component/Navbar";
import { Hero } from "../Component/Hero";
import { Categories } from "../Component/Categories";
import { ProductCard } from "../Component/ProductCard";
import { Testimonials } from "../Component/Testimonials";
import { Footer } from "../Component/Footer";
function Home(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <ProductCard/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
export default Home
