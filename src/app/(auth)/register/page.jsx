"use client";
import Button from "@/components/Button";
import Input from "@/components/input";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";

export default function Register() {
  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if(status !== "unauthenticated") {
    return null
  }

  const initialValues = {
    name: "",
    email: "",
    senha: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
  });

  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    try {
      await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          senha: values.senha,
        }),
      }).then(async (res) => {
        const result = await res.json();

        if (result.status === 201) {
          alert(result.message);
          router.push("/login");
        } else {
          renderError(result.message);
          resetForm();
        }
        setFormSubmitting(false);
      });
    } catch (error) {
      setFormSubmitting(false);
      renderError("Erro ao criar conta, tente mais tarde!");
    }
  }

  function renderError(msg) {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 3000);
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
            className="flex flex-col gap-2 p-4 border border-zinc-300 min-w-[300px] bg-black bg-opacity-10 rounded-md"
          >
            <h2 className="font-semibold text-lg">Cadastro</h2>
            <Input name="name" type="name" required />
            <Input name="email" type="email" required />
            <Input name="senha" type="password" required autoComplete="off" />
            <Button
              type="submit"
              text={isFormSubmitting ? "Carregando..." : "Cadastrar"}
              disabled={isFormSubmitting}
              className="bg-transparent cursor-pointer hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            />
            {!values.name && !values.email && !values.senha && error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </Form>
        )}
      </Formik>
    </main>
  );
}
