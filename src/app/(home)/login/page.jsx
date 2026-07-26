"use client";
import Input from "@/components/inputs/Input";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@/components/buttons/Button";
import axiosInstance from "@/utils/axios";
import { endPoints } from "@/constants/endPoints";
const LoginPage = () => {
  const formik = useFormik({
    initialValues: { password: "", username: "" },
    validationSchema: yup.object({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit: async (v) => {
      const { data } = await axiosInstance.post(endPoints.users.login, v);
      console.log(data);
    },
  });

  return (
    <main className="container main-section login-page center">
      <form onSubmit={formik.handleSubmit}>
        <h1>login</h1>
        <Input
          name="username"
          label="username"
          placeholder="enter your username"
          errorText={formik.errors.username}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <Input
          name="password"
          label="password"
          placeholder="enter your password"
          errorText={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button type="submit" isSending={formik.isSubmitting}>
          submit
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
