"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import { endPoints } from "@/constants/endPoints";
import { contactSchema } from "@/schema/contact";
import axiosInstance from "@/utils/axios";
import {
  faEnvelope,
  faMessage,
  faPaperPlane,
  faPhone,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema(t),
    onSubmit: async (v) => {
      await axiosInstance.post(endPoints.contactUs, v);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        label={t("contact_page.name")}
        placeholder={t("contact_page.name_placeholder")}
        labelIcon={faSignature}
        value={formik.values.name}
        errorText={formik.errors.name}
        onChange={formik.handleChange}
      />
      <Input
        name="phone"
        label={t("contact_page.phone")}
        placeholder={t("contact_page.phone_placeholder")}
        labelIcon={faPhone}
        notRequired
        value={formik.values.phone}
        errorText={formik.errors.phone}
        onChange={formik.handleChange}
      />
      <Input
        name="email"
        label={t("contact_page.email")}
        placeholder={t("contact_page.email_placeholder")}
        value={formik.values.email}
        labelIcon={faEnvelope}
        errorText={formik.errors.email}
        onChange={formik.handleChange}
      />
      <Input
        value={formik.values.message}
        name="message"
        label={t("contact_page.message")}
        errorText={formik.errors.message}
        placeholder={t("contact_page.message_placeholder")}
        elementType="textarea"
        rows={5}
        labelIcon={faMessage}
        onChange={formik.handleChange}
      />
      <div className={`message-length ${formik.errors.message ? "field-error" : ""}`}>
        {formik.values.message.length} / 550
      </div>
      <Button btnStyleType="transparent" isSending={formik.isSubmitting}>
        <FontAwesomeIcon icon={faPaperPlane} />
        {t("actions.submit")}
      </Button>
    </form>
  );
};

export default ContactForm;
