import * as yup from "yup";
export const contactSchema = (t) =>
  yup.object({
    name: yup
      .string()
      .required(t("error.required_field"))
      .min(3, ({ min }) => t("error.min", { min })),
    phone: yup.string().notRequired(),
    email: yup
      .string()
      .required(t("error.required_field"))
      .email("error.valide_email"),
    message: yup
      .string()
      .required(t("error.required_field"))
      .min(10, ({ min }) => t("error.min", { min }))
      .max(550, ({ max }) => t("error.max", { max })),
  });
