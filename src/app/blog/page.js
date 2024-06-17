import Image from "next/image";
import {UserGroupIcon, RocketLaunchIcon, PuzzlePieceIcon, LightBulbIcon} from '@heroicons/react/24/outline'
import CollapsibleSection from "@/app/components/Collapsible";
import PaymentCard from "@/app/components/PaymentCard";
import Footer from "@/app/components/Footer";
import Header from "../components/Header";
import {EnvelopeIcon} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header></Header>

      <div className="px-12 my-12 text-center bg-center items-center justify-center font-sans relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-7xl font-bold">MONDASI Blog</p>
        <p className="text-3xl font-bold">Educación para todos</p>
      </div>

      <div className="flex flex-col items-center my-12 font-sans text-center px-16 bg-white/10 py-12 rounded-lg justify-center">
        <EnvelopeIcon className="w-20 mb-4"/>
        <p className="text-3xl font-bold mb-4">
            Recibe el blog en tu correo
        </p>
        <p className="">
            Educación, aprendizaje, vida y reflexiones.
        </p>
        <form className="mt-8 space-x-4">
            <input placeholder="nombre@mail.com" className="text-black py-2 px-1 text-center rounded-md"></input>
            <button className="bg-purple-600 py-2 px-4 rounded-full">Suscribirse</button>
        </form>
      </div>
      
      <div
          className="grid grid-cols-2 w-2/3 text-center align-middle items-center gap-8"
          >
            
            <button className="border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p className="text-2xl">Blog 1</p>
              <p className="opacity-40">14-6-2024</p>
            </button>
            <button className="text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
              <p>Beneficios únicos para tu comunidad escolar</p>
            </button>
            
      </div>
      
      
      
      <Footer className={''}/>

    </main>
  );
}
