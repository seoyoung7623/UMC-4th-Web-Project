import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Product from "../components/item/Product";
import "./../styled/Item.scss";

function ItemEditPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="productEdit-wrapper">
        <div className="main">
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemEditPage;
