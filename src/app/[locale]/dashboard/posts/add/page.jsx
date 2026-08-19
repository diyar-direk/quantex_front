"use client";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/utils/ApiClient";
import { endPoints } from "@/constants/endPoints";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import { useRouter } from "@/i18n/navigation";
import UploadPhoto from "@/components/inputs/UploadPhoto";
import MyEditor from "@/components/editor/MyEditor";
import { postSchema } from "@/schema/post";
import SelectOptionInput from "@/components/inputs/SelectOptionInput";
import { categories, postTypes } from "@/constants/enums";
import { useTranslations } from "next-intl";

const api = new APIClient(endPoints.posts.all);

const AddPost = () => {
  const query = useQueryClient();

  const router = useRouter();

  const handleAdd = useMutation({
    mutationFn: (v) => {
      const { title, content, category, image, video, type } = v;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("type", type);
      if (image) formData.append("image", image?.file);
      if (video) formData.append("video", video?.file);
      return api.addData(formData);
    },
    onSuccess: () => {
      query.invalidateQueries([endPoints.posts.all]);
      router.back();
    },
  });
  const t = useTranslations();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      category: "",
      type: "",
      image: "",
      video: "",
    },
    validationSchema: postSchema(t),
    onSubmit: handleAdd.mutate,
  });

  return (
    <>
      <Breadcrumbs />
      <main className="dashboard-main">
        <form
          className="dashboard-form-container"
          onSubmit={formik.handleSubmit}
        >
          <div className="dashboard-form flex-form">
            <Input
              label={t("posts.title")}
              placeholder={t("posts.title_placeholder")}
              errorText={formik.errors.title && formik.errors.title}
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              containerProps={{ style: { flex: "200px" } }}
            />

            <SelectOptionInput
              label={t("posts.type")}
              errorText={formik.errors.type && formik.errors.type}
              value={formik.values.type && t(`enums.${formik.values.type}`)}
              options={Object.values(postTypes)?.map((e) => ({
                value: e.value,
                text: t(`enums.${e.value}`),
                icon: e.icon,
              }))}
              onSelectOption={(e) => formik.setFieldValue("type", e.value)}
              wrapperProps={{ style: { flex: "200px" } }}
            />

            <SelectOptionInput
              label={t("posts.category")}
              errorText={formik.errors.category && formik.errors.category}
              value={
                formik.values.category && t(`enums.${formik.values.category}.title`)
              }
              options={Object.values(categories)?.map((e) => ({
                value: e.value,
                text: t(`enums.${e.value}.title`),
                icon: e.icon,
              }))}
              onSelectOption={(e) => formik.setFieldValue("category", e.value)}
              wrapperProps={{ style: { flex: "200px" } }}
            />

            <MyEditor
              value={formik.values.content}
              onChange={(e) => formik.setFieldValue("content", e)}
              placeholder={t("posts.content_placeholder")}
              errorText={formik.errors.content && formik.errors.content}
              label={t("posts.content")}
            />
            <UploadPhoto
              errorText={formik.errors.image && formik.errors.image}
              accept="image/*"
              name="image"
              title={t("posts.image")}
              onChange={(i) => formik.setFieldValue("image", i)}
              value={formik.values.image}
            />
            <UploadPhoto
              errorText={formik.errors.video && formik.errors.video}
              notRequired
              accept="video/*"
              name="video"
              title={t("posts.video")}
              onChange={(i) => formik.setFieldValue("video", i)}
              value={formik.values.video}
            />
          </div>

          <Button className="submit-btn" type="submit">
            {t("actions.save")}
          </Button>
        </form>
      </main>
    </>
  );
};

export default AddPost;
