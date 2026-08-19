"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "@/utils/ApiClient";
import { endPoints } from "@/constants/endPoints";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const api = new APIClient(endPoints.users.all);

const AddUser = () => {
  const query = useQueryClient();

  const router = useRouter();

  const handleAdd = useMutation({
    mutationFn: (v) =>
      api.addData({ username: v.username, password: v.password }),
    onSuccess: () => {
      query.invalidateQueries([endPoints.users.all]);
      router.back();
    },
  });

  const t = useTranslations();

  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      password: "",
      username: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .required(t("error.required_field"))
        .min(3, ({ min }) => t("error.min", { min }))
        .max(20, ({ max }) => t("error.max", { max })),

      password: Yup.string()
        .required(t("error.required_field"))
        .min(6, ({ min }) => t("error.min", { min }))
        .max(30, ({ max }) => t("error.max", { max })),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], t("error.password_match"))
        .required(t("error.required_field")),
    }),

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
          <div className="dashboard-form">
            <Input
              label={t("user.username")}
              placeholder={t("user.username_placeholder")}
              errorText={formik.errors.username}
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
            />
            <Input
              label={t("user.password")}
              placeholder={t("user.password_placeholder")}
              errorText={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              name="password"
            />
            <Input
              label={t("user.password_confirm")}
              placeholder={t("user.password_confirm_placeholder")}
              errorText={formik.errors.confirmPassword}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              type="password"
              name="confirmPassword"
            />
          </div>
          <Button
            className="submit-btn"
            type="submit"
            isSending={handleAdd.isLoading}
          >
            {t("actions.save")}
          </Button>
        </form>
      </main>
    </>
  );
};

export default AddUser;
