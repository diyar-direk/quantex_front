import { categories, postTypes } from "@/constants/enums";
import * as yup from "yup";

export const postSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required().min(100),
  type: yup.string().required().oneOf(Object.keys(postTypes)),
  category: yup.string().required().oneOf(Object.keys(categories)),
  image: yup.object().required(),
  video: yup.object().notRequired(),
});
export const postUpdateSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required().min(100),
  type: yup.string().required().oneOf(Object.keys(postTypes)),
  category: yup.string().required().oneOf(Object.keys(categories)),
  image: yup.object().notRequired(),
  video: yup.object().notRequired(),
});
