import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ProductsComp from "./ProductsComp";
import MainTitle from "@/components/main_title/MainTitle";

const Products = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <MainTitle>our Products</MainTitle>
        <ProductsComp />
      </main>
    </>
  );
};

export default Products;
