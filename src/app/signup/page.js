import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar/>
            <div className="px-12 my-12 text-center bg-center items-center justify-center font-sans relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <p className="text-7xl font-bold">Experimenta el poder de <span className="text-purple-500">MONDASI</span></p>
            </div>
            <div className="my-12 font-sans font-medium text-2xl text-center">
              <p>
              ¡Vive la experiencia <span className="text-purple-500">completamente gratis</span> para tus hijos! 
              </p>
              <p className="opacity-40 font-normal">
              disponible para edades de 8 a 16
              </p>
            </div>
            <div className=" p-8 w-3/4 border-solid border-purple-500 border-2 mb-16 rounded-lg">
              <form className=" flex-flex-col spacing-x-4 justify-center w-full">
                <div className="mb-4">
                <div className="flex flex-col justify-start mb-4">
                  <label className="w-fit font-bold ">Nombre(s)</label>
                  <input className="w-1/3 rounded-md h-8"></input>
                </div>
                <div className="flex flex-col justify-start mb-4">
                  <label className="w-fit">Apellido(s)</label>
                  <input className="w-1/3 rounded-md h-8"></input>
                </div>
                <div className="flex flex-col justify-start mb-4">
                  <label className="w-fit">Correo(s)</label>
                  <input className="w-1/3 rounded-md h-8"></input>
                </div>
                <div className="flex flex-col justify-start mb-4">
                  <label className="w-fit">Actualmente cuantos hijos estan estudiando?</label>
                  <input className="w-16"></input>
                </div>
                <div className="flex flex-col justify-start mb-4">
                  <label className="w-fit">Plan de estudios(s)</label>
                  <input className="w-1/3 rounded-md h-8"></input>
                </div>
                <div className="flex flex-col justify-start mb-4">
                  <label className="w-fit">Otro dato</label>
                  <input className="w-1/3 rounded-md h-8"></input>
                </div>
                </div>
                <button className="inline-block px-4 py-2 bg-purple-600 font-medium">Registrarse</button>
              </form>
            </div>
            
            <Footer/>
      </main>
    )
}