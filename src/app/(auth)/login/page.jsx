"use client";
import Button from "@/components/Button";
import Input from "@/components/input";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter()
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);


  const initialValues = {
    email: "",
    senha: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
  });

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    try {
      signIn("Credentials", { ...values, redirect: false }).then(
        ({ error }) => {
          if (!error) {
            router.push("/login");
          } else {
            setError(error.replace("Error: ", ""));
            setTimeout(() => {
              setError("");
            }, 3000);
            resetForm();
          }
          setFormSubmitting(false);
        }
      );
    } catch {
      setFormSubmitting(false);
      rederError("Erro ao entrar, tente novamente!");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form
            noValidate
            className="flex flex-col gap-2 p-4 border border-zinc-300 min-w-[300px] rounded-md"
          >
            <Input name="email" type="email" required className="" />
            <Input name="senha" type="password" required autoComplete="off" />
            <Button
              type="submit"
              text={isFormSubmitting ? "Entrando..." : "Entrar"}
              className="bg-transparent cursor-pointer hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            />{!values.email && !values.senha && error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </Form>
        )}
      </Formik>
    </main>
  );
}
