import Input from "@/components/inputs/Input";
import "./style.css";
import UploadFile from "@/components/inputs/UploadFile";
import Button from "@/components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMessage,
  faPaperPlane,
  faSignature,
  faVcard,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "join us",
  description: "meta description",
  keywords: ["te", "tes", "test"],
};

const JoinUs = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs />

      <main className="join-us-page">
        <section className="image">
          <h1>{t("join_page.title")}</h1>

          <p>{t("join_page.desc")}</p>
        </section>

        <section>
          <form>
            <Input
              name="name"
              label="name"
              placeholder="enter your name"
              labelIcon={faSignature}
            />

            <Input
              name="email"
              label="email"
              placeholder="enter your email"
              labelIcon={faEnvelope}
            />

            <Input
              name="message"
              label="message"
              placeholder="tell us a little about yourself"
              elementType="textarea"
              rows={5}
              labelIcon={faMessage}
            />

            <UploadFile title="your cv" name="cv" labelIcon={faVcard} />

            <Button btnStyleType="transparent">
              <FontAwesomeIcon icon={faPaperPlane} /> {t("join_page.send")}
            </Button>
          </form>
        </section>
      </main>
    </>
  );
};

export default JoinUs;
