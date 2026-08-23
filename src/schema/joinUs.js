import * as yup from "yup";
export const joinUsSchema = (t) =>
  yup.object({
    name: yup
      .string()
      .required(t("error.required_field"))
      .min(3, ({ min }) => t("error.min", { min })),
    email: yup
      .string()
      .required(t("error.required_field"))
      .email(t("error.valide_email")),
    message: yup
      .string()
      .required(t("error.required_field"))
      .min(10, ({ min }) => t("error.min", { min }))
      .max(550, ({ max }) => t("error.max", { max })),
    cv: yup.object().required(t("error.required_field")),
  });
