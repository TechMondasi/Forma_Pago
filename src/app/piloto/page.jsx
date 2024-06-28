"use client";

import Footer from "../../components/Footer";
import CustomButtonExample from "../../components/CalendlyWidget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      

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

      <div className="my-12 font-sans font-medium text-2xl text-center">
        <p>
          ¡Vive la experiencia{" "}
          <span className="text-purple-500">completamente gratis</span> para tus
          hijos!
        </p>
        <p className="opacity-40 font-normal">
          disponible para edades de 8 a 16
        </p>
      </div>

      <div id="root"></div>

      <div className="grid grid-cols-1 w-full max-w-md text-center align-middle items-center gap-8 px-4 sm:px-0">
        <CustomButtonExample />

        {/* 
        // Código comentado para futuros botones adicionales
        <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20">
          <p>Viernes 5pm</p>
          <p className="text-lg opacity-50">1h 30min</p>
        </button> 
        */}
      </div>
      <div className="my-10">
        <a
          href="piloto/piloto-register"
          className="block bg-purple-600 px-8 py-4 text-lg rounded-full font-semibold text-white text-center hover:bg-purple-700"
        >
          Formulario de registro
        </a>
      </div>

      <div className="relative flex items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div>
          <p className="text-2xl sm:text-5xl font-medium">¡Gracias, Usuario registrado!</p>
          <p className="text-2xl sm:text-2xl font-medium mt-5">
            <span className="text-purple-500">
              Recibirás un email de confirmación en breve.
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
