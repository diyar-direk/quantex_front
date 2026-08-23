"use client";
import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";
import UploadFile from "@/components/inputs/UploadFile";
import { endPoints } from "@/constants/endPoints";
import { joinUsSchema } from "@/schema/joinUs";
import axiosInstance from "@/utils/axios";
import {
  faEnvelope,
  faMessage,
  faPaperPlane,
  faSignature,
  faVcard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";

const JoinForm = () => {
  const t = useTranslations();
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
      cv: "",
    },
    validationSchema: joinUsSchema(t),
    onSubmit: async (v) => {
      const { name, email, message, cv } = v;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("cv", cv?.file);
      await axiosInstance.post(endPoints.joinUs, formData);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        errorText={formik.errors.name}
        label={t("join_page.name")}
        placeholder={t("join_page.name_placeholder")}
        labelIcon={faSignature}
        value={formik.values.name}
        onChange={formik.handleChange}
      />

      <Input
        name="email"
        errorText={formik.errors.email}
        label={t("join_page.email")}
        placeholder={t("join_page.email_placeholder")}
        labelIcon={faEnvelope}
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <Input
        name="message"
        errorText={formik.errors.message}
        label={t("join_page.message")}
        placeholder={t("join_page.message_placeholder")}
        elementType="textarea"
        rows={5}
        labelIcon={faMessage}
        value={formik.values.message}
        onChange={formik.handleChange}
      />

      <UploadFile
        title={t("join_page.cv")}
        name="cv"
        labelIcon={faVcard}
        errorText={formik.errors.cv}
        onChange={(e) => formik.setFieldValue("cv", e)}
        value={formik.values.cv}
      />

      <Button btnStyleType="transparent">
        <FontAwesomeIcon icon={faPaperPlane} /> {t("join_page.send")}
      </Button>
    </form>
  );
};

export default JoinForm;
