
import { UserGroupIcon, RocketLaunchIcon, PuzzlePieceIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import CollapsibleSection from "@/app/components/Collapsible";
import PaymentCard from "@/app/components/PaymentCard";
import Footer from "@/app/components/Footer";
import Header from '@/app/components/Header';

export default function Home() {
  return (
    /* INICIO HEADER */
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Header />
      {/* FIN HEADER */}

      <div className="relative flex items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] sm:h-[360px] w-full sm:w-[480px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
          <div className="h-[180px] sm:h-[240px] w-full sm:w-[240px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        </div>
        <p className="text-4xl sm:text-7xl font-bold">Experimenta el poder de <span className="text-purple-500">Mondasi</span></p>
      </div>

      <div className="my-10 font-sans font-medium text-lg sm:text-2xl text-center">
        <p>Construimos las bases de la educación del mañana.</p>
        <p>Preparamos con habilidades necesarias para la vida a los <b className="text-purple-700 italic">líderes del futuro</b></p>
      </div>

      <div className="border-purple-600 w-full sm:w-2/3 my-8 border-solid border-2 rounded-3xl mx-auto">
        <video className="w-full h-auto max-w-full rounded-3xl border border-purple-200 dark:border-purple-700" controls autoPlay>
          <source src="/video_prueba.mp4" type="video/mp4"></source>
        </video>
      </div>

      <p className="text-center text-4xl sm:text-6xl font-light py-8">Menos teoría, <span className="text-purple-600">más práctica</span></p>

      <div className="my-10 font-sans font-medium text-base sm:text-lg text-center space-y-4 w-11/12 sm:w-3/4 mx-auto">
        <p>Mondasi es el espacio en donde las nuevas generaciones se preparan con las habilidades que necesitarán para afrontar los retos más desafiantes del futuro.</p>
        <p className="font-extrabold">Las habilidades, al igual que el conocimiento, son adquiridas <span className="text-purple-600">a través de la práctica, no de la teoría.</span></p>
      </div>

      <div className="bg-purple-700 w-full mt-10">
        <p className="text-center text-3xl sm:text-4xl font-bold py-8">¿Qué se practica en Mondasi?</p>
        <div className="mb-4 grid text-center lg:grid-cols-4 lg:text-left text-sm sm:text-lg p-5 space-y-4 lg:space-y-0">
          <div className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <UserGroupIcon className="w-16 sm:w-24 text-center my-8" />
            <div className="m-0 max-w-[30ch] text-sm font-medium">
              <ul className="list-disc">
                <li>Liderazgo</li>
                <li>Comunicación Efectiva</li>
                <li>Colaboración</li>
                <li>Responsabilidad</li>
                <li>Empatia</li>
                <li>Inteligencia emocional</li>
              </ul>
            </div>
          </div>
          <div className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <RocketLaunchIcon className="text-white w-16 sm:w-24 my-8" />
            <div className="m-0 max-w-[30ch] text-sm font-medium">
              <ul className="list-disc">
                <li>Resolucion de problemas</li>
                <li>Pensamiento Crítico</li>
                <li>Pensamiento Creativo</li>
                <li>Toma de decisiones</li>
              </ul>
            </div>
          </div>
          <div className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <PuzzlePieceIcon className="text-white w-16 sm:w-24 my-8" />
            <div className="m-0 max-w-[30ch] text-sm font-medium">
              <ul className="list-disc">
                <li>Planeación estratégica</li>
                <li>Manejo de riesgo</li>
                <li>Manejo de información</li>
                <li>Adaptabilidad</li>
                <li>Resiliencia</li>
              </ul>
            </div>
          </div>
          <div className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <LightBulbIcon className="text-center w-16 sm:w-24 my-8" />
            <div className="m-0 max-w-[30ch] text-sm font-medium">
              <ul className="list-disc">
                <li>Negociación</li>
                <li>Manejo de estrés</li>
                <li>Aprendizaje continuo</li>
                <li>Pensamiento Sistemico</li>
                <li>Resiliencia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------- */}

      <div className="p-4 sm:p-8 w-full">
        <p className="text-center text-4xl sm:text-6xl font-light py-4 sm:py-8">Educación para el <span className="text-purple-600">futuro</span></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full text-center align-middle items-center">
          <div className="border-purple-600 w-full my-4 sm:my-8 border-solid border-2 rounded-3xl">
            <video className="w-full max-w-full rounded-3xl" controls autoPlay>
              <source src="/video_prueba.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div>
            <p className="text-center text-3xl sm:text-5xl font-montserrat font-medium">Game based learning</p>
            <p className="text-center text-lg sm:text-xl">Aprendizaje basado en <span className="text-purple-600">juegos</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full text-center align-middle items-center">
          <div>
            <p className="text-center text-3xl sm:text-5xl font-montserrat font-medium">Project based learning</p>
            <p className="text-center text-lg sm:text-xl">Aprendizaje basado en <span className="text-purple-600">proyectos</span></p>
          </div>
          <div className="border-purple-600 w-full my-4 sm:my-8 border-solid border-2 rounded-3xl">
            <video className="w-full max-w-full rounded-3xl" controls autoPlay>
              <source src="/video_prueba.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full text-center align-middle items-center">
          <div className="border-purple-600 w-full my-4 sm:my-8 border-solid border-2 rounded-3xl">
            <video className="w-full max-w-full rounded-3xl" controls autoPlay>
              <source src="/video_prueba.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div>
            <p className="text-center text-3xl sm:text-5xl font-montserrat font-medium">Problem based learning</p>
            <p className="text-center text-lg sm:text-xl">Aprendizaje basado en <span className="text-purple-600">problemas</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full text-center align-middle items-center">
          <div>
            <p className="text-center text-3xl sm:text-5xl font-montserrat font-medium">Método Socrático</p>
          </div>
          <div className="border-purple-600 w-full my-4 sm:my-8 border-solid border-2 rounded-3xl">
            <video className="w-full max-w-full rounded-3xl" controls autoPlay>
              <source src="/video_prueba.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>


      {/* --------------------------- */}

      <h2 className="text-center text-4xl sm:text-6xl font-light mb-6 sm:mb-10">¿Cómo funciona?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-2/3 mx-auto text-center align-middle items-center gap-6 sm:gap-20">

        <div className="py-4 px-2 flex flex-col justify-between text-xl sm:text-2xl border-purple-600 w-full h-48 my-4 sm:my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p>2 clases a la semana</p>
          <p className="text-base sm:text-lg opacity-85">2 grupos fijos a la misma hora y mismo día, cada semana</p>
        </div>

        <div className="py-4 px-2 flex flex-col justify-between text-xl sm:text-2xl border-purple-600 w-full h-48 my-4 sm:my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p>Experiencias ILIMITADAS</p>
          <p className="text-base sm:text-lg opacity-85">Tu hij@ puede elegir entre una variedad de eventos adicionales <span className="text-purple-400">¡SIN NINGÚN LÍMITE NI COSTO EXTRA!</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-2/3 mx-auto text-center align-middle items-center gap-6 sm:gap-20">

        <div className="py-4 px-2 flex flex-col justify-between text-xl sm:text-2xl border-purple-600 w-full h-48 my-4 sm:my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p>100% en línea</p>
          <p className="text-base sm:text-lg opacity-85">Solo se necesita una computadora y acceso a internet</p>
        </div>

        <div className="py-4 px-2 flex flex-col justify-between text-xl sm:text-2xl border-purple-600 w-full h-48 my-4 sm:my-8 border-solid border-2 rounded-3xl hover:bg-slate-400/20">
          <p>9:1</p>
          <p className="text-base sm:text-lg opacity-85">1 facilitador, 9 estudiantes... ¡10 amigos!</p>
        </div>
      </div>



      {/* -------------------------- */}

      <div className="w-full mt-8">
        <CollapsibleSection title={'Líderes del futuro'} className={'px-4 sm:px-8'}>
          <p className="my-8 sm:my-12 font-sans font-medium text-xl sm:text-2xl text-center">
            Grandes retos demandan enormes soluciones, ¿Estamos preparados para encontrarlas o crearlas?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full text-center align-middle items-center">
            <p className="text-left font-light text-lg sm:text-2xl">
              El objetivo del programa “Líderes del futuro” es apoyar a cada estudiante en su proceso de aprendizaje, desarrollando habilidades sociales y cognitivas que les permitirán enfrentar los retos del mundo real y adaptarse a un ambiente lleno de cambios y desafíos.
            </p>

            <div className="border-purple-600 w-full h-52 my-4 sm:my-8 border-solid border-2 rounded-3xl"></div>

            <div className="border-purple-600 w-full h-52 my-4 sm:my-8 border-solid border-2 rounded-3xl"></div>

            <p className="text-left font-light text-lg sm:text-2xl sm:ml-10">
              Los estudiantes tienen 2 grupos fijos de forma semanal en los que son acompañados por un guía y 8 compañeros, juntos buscan la solución a una serie de problemas y desafíos que emulan situaciones de la vida real.
            </p>
          </div>

          <p className="text-center text-2xl sm:text-3xl font-medium py-8">
            Mondasi <span className="text-purple-600">prepara a tus hijos</span> con las <span className="text-purple-600">habilidades que necesitan para afrontar la vida real.</span>
          </p>
        </CollapsibleSection>

        <CollapsibleSection title={'Horas Extraordinarias'} className={'my-2 p-4 sm:p-8'}>
          <p className="my-8 sm:my-12 font-sans font-medium text-2xl sm:text-3xl text-center">
            ¿Debates? ¿Resolver problemas complejos? ¿Espacios de diseño? ¿Cómo funciona la IA? ¿Qué tal dejar volar la imaginación y creatividad? ¿Cómo suena un club basado en los gustos de tus hijos?
          </p>

          <p className="my-8 sm:my-12 font-sans font-light text-2xl sm:text-3xl text-center">
            Mondasi es una comunidad en línea, en donde tus hijos pueden conocer a personas de distintos lugares, aprender de nuevas culturas, compartir momentos con los demás y hacer amigos increíbles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full text-center gap-4 sm:gap-8">
            <ul className="text-left text-lg sm:text-2xl font-light mx-4 sm:mx-28 mt-5">
              Tus hijos podrán elegir la mejor opción para ellos entre una variedad de eventos:
              <li className="mt-4 sm:mt-7">Debates</li>
              <li className="mt-4 sm:mt-7">Proyectos grupales</li>
              <li className="mt-4 sm:mt-7">Arte digital</li>
              <li className="mt-4 sm:mt-7">Horas de juego</li>
              <li className="mt-4 sm:mt-7">Escritura digital</li>
            </ul>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-8 mb-4">
              <div className="border-purple-600 w-full h-52 border-solid border-2 rounded-3xl"></div>
              <div className="border-purple-600 w-full h-52 border-solid border-2 rounded-3xl"></div>
              <div className="border-purple-600 w-full h-52 border-solid border-2 rounded-3xl"></div>
              <div className="border-purple-600 w-full h-52 border-solid border-2 rounded-3xl"></div>
            </div>
          </div>

          <p className="text-center text-xl sm:text-2xl font-medium mt-10">
            Todas las actividades están incluidas <span className="text-purple-600">sin costo extra.</span>
          </p>
          <p className="text-center text-lg italic">Cada evento cuenta con un límite de capacidad.</p>
        </CollapsibleSection>

        <CollapsibleSection title={'Metodología'} className={'my-2 px-4 sm:px-8'}>
          <p className="block text-center text-xl sm:text-2xl font-medium my-4">
            Habilidades para el <span className="text-purple-600">siglo XXI</span>, no el siglo XX.
          </p>
          <div className="flex flex-col items-center w-full">
            <div className="block border-purple-600 w-3/4 sm:w-2/4 h-32 border-solid border-2 rounded-3xl"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full text-center align-middle items-center gap-4 sm:gap-8">
            <p className="text-left text-lg sm:text-xl p-5 font-light mx-4 sm:mx-20">
              A través de videojuegos, proyectos y el método socrático, Mondasi desarrolla en tus hijos habilidades duraderas y aplicables en la vida diaria en distintas disciplinas, transferibles a contextos personales y profesionales y útiles aún cuando la tecnología, los recursos y la sociedad evoluciona.
            </p>
            <div className="border-purple-600 w-full h-48 my-4 sm:my-8 border-solid border-2 rounded-3xl"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 w-full text-center align-middle items-center gap-4 sm:gap-8">
            <div className="border-purple-600 w-full h-48 my-4 sm:my-8 border-solid border-2 rounded-3xl"></div>
            <p className="text-left text-lg sm:text-xl font-light mx-4 sm:mx-16">
              Las clases en Mondasi se "invierten", es decir, los estudiantes son los encargados de su aprendizaje y de crear experiencias únicas que los ayuden al desarrollo óptimo de las habilidades básicas para la vida diaria. (Con intervenciones estratégicas del guía a lo largo de la clase).
            </p>
          </div>

          <p className="text-left text-lg sm:text-2xl font-medium my-10 mx-4">
            Mondasi mantiene a los estudiantes comprometidos en cada clase, al permitirles crear las experiencias que ellos buscan nos aseguramos de que los estudiantes realmente quieren ser parte de la comunidad.
          </p>

          <div className="text-center text-lg sm:text-xl font-light my-4 mx-4">
            <ul>
              <li>Habilidades técnicas y habilidades blandas en un solo lugar:</li>
              <li>Experiencias complejas y únicas</li>
              <li>Mentores altamente preparados</li>
              <li>Uso de tecnologías innovadoras</li>
            </ul>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="block border-purple-600 w-3/4 sm:w-2/4 h-32 border-solid border-2 rounded-3xl mt-5"></div>
          </div>
        </CollapsibleSection>

        <p className="text-center text-4xl sm:text-6xl font-light pb-8 mt-10">
          El potencial de tus hijos es <span className="text-purple-600">infinito</span>
        </p>
        <p className="text-center text-4xl sm:text-6xl font-light pb-8">
          Permítenos demostrártelo.
        </p>

        <div className="flex w-full items-center justify-center">
          <PaymentCard></PaymentCard>
        </div>

        <div className="px-4 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full text-center align-middle items-center gap-4 sm:gap-16">
            <div className="border-purple-600 w-full min-h-96 my-8 border-solid border-2 rounded-3xl flex flex-col items-center p-3">
              <h4 className='text-5xl mb-7'>FAQs</h4>
              <button className="w-4/5 h-20 mb-8 rounded-full bg-purple-600 text-white text-3xl font-light">¿Qué aprenderá mi hij@?</button>
              <button className="w-4/5 h-20 mb-8 rounded-full bg-purple-600 text-white text-3xl font-light">¿Cómo sabré si mi hij@ está progresando?</button>
              <button className="w-4/5 h-20 mb-8 rounded-full bg-purple-600 text-white text-3xl font-light">¿Cuentan con algun tipo de apoyo económico?</button>
              <button className="w-4/5 h-20 mb-8 rounded-full bg-purple-600 text-white text-3xl font-light">¿Qué incluye la suscripción?</button>
              <button className="w-4/5 h-20 mb-8 rounded-full bg-purple-600 text-white text-3xl font-light">¿Es Mondasi un curso?</button>
            </div>
            <div className="border-purple-600 w-full min-h-96 my-8 border-solid border-2 rounded-lg">
              Forms
            </div>
          </div>
        </div>
      </div>

      <Footer className={''} />

    </main>
  );
}
