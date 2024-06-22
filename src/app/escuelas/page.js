import Footer from "@/app/components/Footer";
import Header from '@/app/components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="relative flex items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] sm:h-[360px] w-full sm:w-[480px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
          <div className="h-[180px] sm:h-[240px] w-full sm:w-[240px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        </div>
        <p className="text-4xl sm:text-7xl font-bold">Experimenta el poder de <span className="text-purple-500">Mondasi</span></p>
      </div>

      <div className="my-12 font-sans font-medium text-3xl sm:text-5xl text-center">
        <p>Mondasi es tu mejor aliado</p>
        <p>¡Trabajemos juntos por un futuro extraordinario!</p>
      </div>

      <div className="my-12 font-sans text-2xl sm:text-4xl text-center font-light w-11/12">
        <p>
          Mondasi trabaja de la mano con los mejores <span className="text-purple-500">colegios e intituciones</span> para potenciar las habilidades de todos los estudiantes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-11/12 lg:w-2/3 text-center align-middle items-center gap-8 my-8">
        <button className="text-xl sm:text-2xl border-purple-600 w-full h-32 sm:h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p>Alianza con los mejores colegios</p>
        </button>
        <button className="text-xl sm:text-2xl border-purple-600 w-full h-32 sm:h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p>Beneficios únicos para tu comunidad escolar</p>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full px-4 sm:px-8 align-middle items-center gap-8 my-8">
        <p className="text-xl sm:text-4xl w-full lg:w-1/2 h-auto my-8 font-light">
          Desarrolla una fuerte comunidad escolar con estudiantes capaces de enfrentar la adversidad y solucionar situaciones complicadas a través de las experiencias y la metodología de <span className="text-purple-500">Mondasi.</span>
        </p>
        <div className="hidden lg:block w-1/2" />
      </div>

      <div className="font-sans text-xl sm:text-4xl text-center w-11/12 font-light my-12">
        <p>
          Complementamos a las escuelas al crear experiencias en línea únicas fuera del horario de clases. Esto permite que los estudiantes descubran más de sí mismos, desarrollen nuevas habilidades y creen momentos extraordinarios con personas de todo el mundo.
        </p>
      </div>

      <div className="relative flex items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] sm:h-[360px] w-full sm:w-[480px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
          <div className="h-[180px] sm:h-[240px] w-full sm:w-[240px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        </div>
        <p className="text-4xl sm:text-7xl font-bold">El {""}<span className="text-purple-500">Futuro de la educacion</span> en tu escuela</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-8 align-middle items-center gap-8 my-8">
        <button className="text-xl sm:text-2xl border-purple-600 w-full h-32 sm:h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20 p-4 sm:p-8">
          <p>Estudiantes más comprometidos y participativos</p>
        </button>
        <button className="text-xl sm:text-2xl border-purple-600 w-full h-32 sm:h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20 p-4 sm:p-8">
          <p>El complemento perfecto para después de clase</p>
        </button>
        <button className="text-xl sm:text-2xl border-purple-600 w-full h-32 sm:h-48 border-solid border-2 rounded-3xl hover:bg-slate-400/20 p-4 sm:p-8">
          <p>Más satisfacción = Más familias interesadas en tu escuela</p>
        </button>
      </div>

      <div className="flex justify-center mb-8">
        <button className="bg-purple-600 px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg rounded-full font-bold hover:bg-purple-700">
          Agendar una llamada
        </button>
      </div>

      <Footer className={''} />
    </main>
  );
}
