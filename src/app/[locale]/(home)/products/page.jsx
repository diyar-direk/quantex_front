import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ProductsComp from "./ProductsComp";

const Products = () => {
  return (
    <>
      <Breadcrumbs />
      <main className="main-section container">
        <ProductsComp />
      </main>
    </>
  );
};

export default Products;
