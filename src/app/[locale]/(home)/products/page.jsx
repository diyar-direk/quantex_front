import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ProductsComp from "./ProductsComp";

export const metadata = {
  title: "Products",
  description:
    "اكتشف منتجات كوانتكس الرقمية والبرمجية المصممة لتقديم حلول عملية وذكية تساعد الشركات على تحسين أعمالها وتطوير خدماتها.",
  keywords: [
    "منتجات كوانتكس",
    "منتجات رقمية",
    "منتجات برمجية",
    "حلول تقنية",
    "برمجيات",
    "حلول رقمية",
  ],
};

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
