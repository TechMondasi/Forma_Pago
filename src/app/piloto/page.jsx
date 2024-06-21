"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import CustomButtonExample from "../components/CalendlyWidget";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="px-12 my-12 text-center bg-center items-center justify-center font-sans relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-7xl font-bold">
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

      <div className="grid grid-cols-1 w-1/3 text-center align-middle items-center gap-8">
        <CustomButtonExample></CustomButtonExample>

        {/* <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20">
          <p>Viernes 5pm</p>
          <p className="text-lg opacity-50">1h 30min</p>
        </button> */}
      </div>
      <div className="my-10">
        <a
          href="piloto/piloto-register"
          className="block bg-purple-600 px-8 py-4 text-lg rounded-full font-semibold text-white text-center hover:bg-purple-700 "
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

      <Footer className={""} />
    </main>
  );
}
