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
import { categories } from "@/constants/enums";

const api = new APIClient(endPoints.posts.all);

const AddPost = () => {
  const query = useQueryClient();

  const router = useRouter();

  const handleAdd = useMutation({
    mutationFn: (v) => {
      const { title, content, category, image, video } = v;
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      if (image) formData.append("image", image?.file);
      if (video) formData.append("video", video?.file);
      return api.addData(formData);
    },
    onSuccess: () => {
      query.invalidateQueries([endPoints.posts.all]);
      router.back();
    },
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      category: "",
      image: "",
      video: "",
    },
    validationSchema: postSchema,
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
              label="title"
              placeholder="enter title"
              errorText={formik.errors.title}
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              containerProps={{ style: { flex: "200px" } }}
            />
            <SelectOptionInput
              label="category"
              errorText={formik.errors.category}
              value={formik.values.category}
              options={Object.values(categories)?.map((e) => ({
                text: e.value,
                value: e.value,
              }))}
              onSelectOption={(e) => formik.setFieldValue("category", e.value)}
              wrapperProps={{ style: { flex: "200px" } }}
            />

            <MyEditor
              value={formik.values.content}
              onChange={(e) => formik.setFieldValue("content", e)}
              placeholder="write content"
              errorText={formik.errors.content}
              label="content"
            />
            <UploadPhoto
              errorText={formik.errors.image}
              accept="image/*"
              name="image"
              title="image"
              onChange={(i) => formik.setFieldValue("image", i)}
              value={formik.values.image}
            />
            <UploadPhoto
              errorText={formik.errors.video}
              notRequired
              accept="video/*"
              name="video"
              title="video"
              onChange={(i) => formik.setFieldValue("video", i)}
              value={formik.values.video}
            />
          </div>

          <Button className="submit-btn" type="submit">
            save
          </Button>
        </form>
      </main>
    </>
  );
};

export default AddPost;
