import * as yup from "yup";
export const postSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required().min(100),
  category: yup.string().required(),
  image: yup.object().required(),
  video: yup.object(),
});
