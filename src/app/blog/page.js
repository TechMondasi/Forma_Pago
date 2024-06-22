"use client";

import Footer from "@/app/components/Footer";
import Header from "../components/Header";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="relative flex flex-col items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] sm:h-[360px] w-full sm:w-[480px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
          <div className="h-[180px] sm:h-[240px] w-full sm:w-[240px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        </div>
        <p className="text-7xl font-bold">Blog</p>
        <p className="text-3xl font-bold m-5">Educación para todos</p>
      </div>

      <div className="flex flex-col items-center my-12 font-sans text-center px-16 bg-white/10 py-12 rounded-lg justify-center">
        <EnvelopeIcon className="w-20 mb-4" />
        <p className="text-3xl font-bold mb-4">
          Recibe el blog en tu correo
        </p>
        <p>
          Educación, aprendizaje, vida y reflexiones.
        </p>
        <form className="mt-8 space-x-4">
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            className="text-black py-2 px-4 rounded-md"
            required
          />
          <button
            className="bg-purple-600 py-2 px-6 rounded-full text-white hover:bg-purple-700 my-4"
            type="submit"
          >
            Registrarse
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-2/3 text-center items-center gap-8 my-8">
        <button className="border-purple-600 w-full h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p className="text-2xl">Blog 1</p>
          <p className="opacity-40">14-6-2024</p>
        </button>
        <button className="border-purple-600 w-full h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p className="text-2xl">Beneficios únicos para tu comunidad escolar</p>
        </button>
      </div>

      <Footer />
    </main>
  );
}
