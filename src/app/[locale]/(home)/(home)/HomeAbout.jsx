import Button from "@/components/buttons/Button";
import MainTitle from "@/components/main_title/MainTitle";
import Image from "next/image";
import AboutImg from "@/assets/about.svg";
import { Link } from "@/i18n/navigation";
import { pages } from "@/constants/pages";

const HomeAbout = () => {
  return (
    <main className="container main-section section-color">
      <MainTitle subTitle={"Lorem ipsum dolor sit"}>about us</MainTitle>
      <div className="about-page">
        <section>
          <h2>who are we</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            soluta inventore esse quas nobis suscipit cum vitae impedit vero
            iure. Fugit aut nulla consectetur quidem eaque labore doloribus
            tempore maiores?
          </p>
          <h2>why quantex</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            soluta inventore esse quas nobis suscipit cum vitae impedit vero
            iure. Fugit aut nulla consectetur quidem eaque labore doloribus
            tempore maiores?
          </p>
        </section>
        <section>
          <Image src={AboutImg} alt="ServicesImg" />
        </section>
      </div>
      <div className="center gap-10" style={{ marginTop: "15px" }}>
        <Link href={pages.aboutUs}>
          <Button>more about us</Button>
        </Link>
        <Link href={pages.contactUs}>
          <Button btnStyleType="outlined">contact us</Button>
        </Link>
      </div>
    </main>
  );
};

export default HomeAbout;
