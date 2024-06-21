"use client";

import Header from "@/app/components/Header";
import CampoTexto from "@/app/components/formulario";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="relative flex items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] sm:h-[360px] w-full sm:w-[480px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
          <div className="h-[180px] sm:h-[240px] w-full sm:w-[240px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        </div>
        <p className="text-4xl sm:text-7xl font-bold">
          Experimenta el poder de{" "}
          <span className="text-purple-500">Mondasi</span>
        </p>
      </div>

      <form className="shadow-md rounded-3xl px-8 pt-6 mb-20 border-purple-600 border-solid border-2 w-full max-w-lg">
        <div className="display-flex w-full text-center text-4xl mb-8">
          <h1>Información del estudiante</h1>
        </div>
        <p className="text-white font-bold text-sm mt-4 mb-10">
          ¿Ya tienes una cuenta?
          <a
            href="/login"
            className="text-purple-500 hover:text-purple-700 font-bold ml-1"
          >
            Inicia sesión
          </a>{" "}
          para reservar más rápido.
        </p>

        <CampoTexto
          id="studentName"
          titulo="Nombre completo del estudiante"
          placeholder="Nombre del estudiante"
          required={true}
        />

        <CampoTexto
          id="studentAge"
          titulo="Edad del estudiante"
          placeholder="10"
          required={true}
        />

        <CampoTexto
          id="tutorName"
          titulo="Nombre del tutor"
          placeholder="Nombre del tutor"
          required={true}
        />

        <CampoTexto
          id="email"
          titulo="Correo del tutor"
          placeholder="ejemplo@correo.com"
          type="email"
          required={true}
        />

        <CampoTexto
          id="number"
          titulo="Número de telefono"
          placeholder="33-10101010"
          required={true}
        />

        <CampoTexto
          id="checkboxSMS"
          titulo="Quiero recibir un recordatorio por SMS 24 horas antes de que comience esta sesión"
          type="checkbox"
          required={true}
        />

        <CampoTexto
          id="feedback"
          titulo="Por favor comparte cualquier duda o informacion adicional"
          placeholder="Escriba su duda o comentario"
          required={false}
        />

        <CampoTexto
          id="code"
          titulo="Código de referido"
          placeholder="Código de referido"
          required={false}
        />

        <div className="flex justify-center mt-8 mb-4">
          <button
            type="submit"
            className="w-full max-w-md bg-purple-600 px-8 py-4 text-lg rounded-full font-semibold text-white text-center hover:bg-purple-700"
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
}
