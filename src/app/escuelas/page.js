import Image from "next/image";
import {UserGroupIcon, RocketLaunchIcon, PuzzlePieceIcon, LightBulbIcon} from '@heroicons/react/24/outline'
import CollapsibleSection from "@/app/components/Collapsible";
import PaymentCard from "@/app/components/PaymentCard";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-7xl w-full items-center justify-between text-sm lg:flex p-12">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/mondasi-logo.png"
              alt="Vercel Logo"
              // className="dark:invert"
              width={150}
              height={32}
              priority
            />
          </a>
        </div>
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p> */}
        <button className="bg-purple-600 px-8 py-4 text-lg rounded-full font-bold">
          Prueba Gratis
        </button>
      </div>

      <div className="px-12 my-12 text-center bg-center items-center justify-center font-sans relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-7xl font-bold">MONDASI escuelas</p>
      </div>

      
      <div className="my-12 font-sans font-medium text-4xl text-center">
        <p>
        Mondasi es tu mejor aliado
        </p>
        <p>
        ¡Trabajemos juntos por un futuro extraordinario!
        </p>
      </div>

      <div className="my-12 font-sans opacity-80 text-2xl text-center w-2/3">
        <p>
        Mondasi trabaja de la mano con los mejores <span className="text-purple-500">colegios e intituciones</span> para potenciar las habilidades de todos los estudiantes.
        </p>
      </div>
      
      <div
          className="grid grid-cols-2 w-2/3 text-center align-middle items-center gap-8"
          >
      
            <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p>Alianza con los mejores colegios</p>
            </button>
            <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p>Beneficios únicos para tu comunidad escolar</p>
            </button>
            
      </div>
      <div
          className="grid grid-cols-2 w-full px-8 align-middle items-center gap-8"
          >
      
            <p className="text-xl w-full h-48 my-8">
            Desarrolla una fuerte comunidad escolar con estudiantes capaces de enfrentar la adversidad y solucionar situaciones complicadas a través de las experiencias  y la metodología de Mondasi.
            </p>
            <div/>
            
      </div>

      <div className="font-sans opacity-80 text-2xl text-center w-2/3">
        <p>
        Complementamos a las escuelas al crear experiencias en línea únicas fuera del horario de clases. Esto permite que los estudiantes descubran más de sí mismos, desarrollen nuevas habilidades y creen momentos extraordinarios con personas de todo el mundo.
        </p>
      </div>

      <div className="px-12 my-12 text-center bg-center items-center justify-center font-sans relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-7xl font-bold">EL <span className="text-purple-500">FUTURO DE LA EDUCACIÓN</span> EN TU ESCUELA</p>
      </div>

      <div
          className="flex w-full text-center align-middle justify-center items-center px-32 gap-16"
          >
      
            <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p>Estudiantes más comprometidos y participativos</p>
            </button>
            <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p>El complemento perfecto para después de clase</p>
            </button>
            <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p>Más satisfacción = Más familias interesadas en tu escuela</p>
            </button>
            
      </div>


      <div className="flex justify-center mb-8">
        <button className="bg-purple-600 px-8 py-4 text-lg rounded-full font-bold">
          Agendar una llamada
        </button>
      </div>

      
      
      <Footer className={''}/>

    </main>
  );
}
