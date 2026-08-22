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
              label={t("join_page.name")}
              placeholder={t("join_page.name_placeholder")}
              labelIcon={faSignature}
            />

            <Input
              name="email"
              label={t("join_page.email")}
              placeholder={t("join_page.email_placeholder")}
              labelIcon={faEnvelope}
            />

            <Input
              name="message"
              label={t("join_page.message")}
              placeholder={t("join_page.message_placeholder")}
              elementType="textarea"
              rows={5}
              labelIcon={faMessage}
            />

            <UploadFile
              title={t("join_page.cv")}
              name="cv"
              labelIcon={faVcard}
            />

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
