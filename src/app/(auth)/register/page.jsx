"use client";
import Button from "@/components/Button";
import Input from "@/components/input";
import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Register() {
  const initialValues = {
    email: "",
    senha: "",
  };
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
  });

  async function handleSubmit(values) {

  }
  
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form noValidate className="flex flex-col gap-2 p-4 border border-zinc-300 min-w-[300px] bg-white">
            <Input name="nome" type="name" required />
            <Input name="email" type="email" required />
            <Input
              name="senha"
              type="password"
              required
              autoComplete="off"
            />
            <Button
              type="submit"
              text="Registrar"
              className="bg-blue-700 text-white rounded p-2 cursor-pointer"
            />
          </Form>
        )}
      </Formik>
    </main>
  );
}
