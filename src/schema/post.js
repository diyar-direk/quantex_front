import { categories, postTypes } from "@/constants/enums";
import * as yup from "yup";

export const postSchema = (t, isUpdate) =>
  yup.object({
    title: yup.string().required(t("error.required_field")),

    content: yup
      .string()
      .required(t("error.required_field"))
      .min(100, ({ min }) => t("error.min", { min })),

    type: yup
      .string()
      .required(t("error.required_field"))
      .oneOf(Object.keys(postTypes)),

    category: yup
      .string()
      .required(t("error.required_field"))
      .oneOf(Object.keys(categories)),

    image: yup
      .object()
      [isUpdate ? "notRequired" : "required"](t("error.required_field")),

    video: yup.object().notRequired(),
  });
