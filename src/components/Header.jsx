"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Header() {
  const { status, data: session } = useSession();

  if (status !== "authenticated") {
    return null;
  }

  return (
    <div>
    <div className="flex gap-4 justify-center p-2 flex-wrap">
      <Link href="/">Home</Link>
      <Link href="/criarChamado">Criar Chamado</Link>
      <div className='flex gap-2'>
       <span className="px-2 font-bold">{`Olá ${
        session?.user?.name.split(" ")[0]
      }`}</span>
      <Button
        text="Sair"
        className="bg-red-600 text-white rounded px-2 cursor-pointer"
        onClick={() => signOut()}
      />
      </div>
    </div>
    
    </div>
  );
}
