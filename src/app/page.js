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
            <div></div>
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
        <a href='/piloto' className="bg-purple-600 px-8 py-4 text-lg rounded-full font-semibold">
          Prueba Gratis
        </a>
      </div>

      <div className="px-12 my-12 text-center bg-center items-center justify-center font-sans relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-7xl font-bold">EDUCACIÓN EXTRAORDINARIA PARA MENTES EXTRAORDINARIAS</p>
      </div>

      
      <div className="my-12 font-sans font-medium text-2xl text-center">
        <p>Construimos las bases de la educación del mañana.</p>
        <p>Preparamos con habilidades necesarias para la vida a los líderes del futuro</p>
      </div>
      
      <div className="border-purple-600 w-2/3 h-96 my-8 border-solid border-2 rounded-lg">
        
      </div>
      
        <p className="text-center text-6xl font-light py-8">Menos teoría, <span className="text-purple-600">más práctica</span></p>

        <div className="my-12 font-sans font-medium text-lg text-center space-y-4 w-3/4">
          <p>Mondasi es el espacio en donde las nuevas generaciones se preparan con las habilidades que necesitarán para afrontar los retos más desafiantes del futuro.</p>
          <p className="font-extrabold">Las habilidades, al igual que el conocimiento, son adquiridas <span className="text-purple-600">a través de la práctica, no de la teoría.</span></p>
        </div>

        <div className="bg-purple-700 w-full">
        <p className="text-center text-4xl font-bold py-8">Qué se practica en Mondasi?</p>
        
        {/* <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"> */}
        <div className="mb-4 grid text-center lg:grid-cols-4 lg:text-left text-lg">


          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a> */}

          <div
          className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <UserGroupIcon className="w-24 text-center my-8"/>
            <div className={`m-0 max-w-[30ch] text-sm font-medium`}>
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

          <div
          className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <RocketLaunchIcon className="text-white w-24 my-8"/>
            <div className={`m-0 max-w-[30ch] text-sm font-medium`}>
              <ul className="list-disc">
                <li>Resolucion de problemas</li>
                <li>Pensamiento Crítico</li>
                <li>Pensamiento Creativo</li>
                <li>Toma de decisiones</li>
              </ul>
            </div>
          </div>
          
          <div
          className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <PuzzlePieceIcon className="text-white w-24 my-8"/>
            <div className={`m-0 max-w-[30ch] text-sm font-medium`}>
                <ul className="list-disc">
                  <li>Planeación estratégica</li>
                  <li>Manejo de riesgo</li>
                  <li>Manejo de información</li>
                  <li>Adaptabilidad</li>
                  <li>Resiliencia</li>
                </ul>
              </div>
          </div>

          <div
          className="items-center justify-center flex flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <LightBulbIcon className="text-center w-24 my-8"/>
            <div className={`m-0 max-w-[30ch] text-sm font-medium`}>
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

      <div className="p-8 w-full">
        <p className="text-center text-6xl font-light py-8">Educación para el <span className="text-purple-600">futuro</span></p>
        
        <div
        className="grid grid-cols-2 w-full text-center align-middle items-center"
        >
        <div className="border-purple-600 w-full h-96 my-8 border-solid border-2 rounded-lg"/>
        
        <div>
          <p className="text-center text-5xl font-montserrat font-medium">Game based learning</p>
          <p className="text-center text-xl">Aprendizaje basado en <span className="text-purple-600">futuro</span></p>        
        </div>
  
        </div>

        <div
        className="grid grid-cols-2 w-full text-center align-middle items-center"
        >
          <div>
            <p className="text-center text-5xl font-montserrat font-medium">Project based learning</p>
            <p className="text-center text-xl">Aprendizaje basado en <span className="text-purple-600">proyectos</span></p>        
          </div>
    
          <div className="border-purple-600 w-full h-96 my-8 border-solid border-2 rounded-lg"/>
          
        </div>

        <div
        className="grid grid-cols-2 w-full text-center align-middle items-center"
        >
        <div className="border-purple-600 w-full h-96 my-8 border-solid border-2 rounded-lg"/>
        
        <div>
          <p className="text-center text-5xl font-montserrat font-medium">Problem based learning</p>
          <p className="text-center text-xl">Aprendizaje basado en <span className="text-purple-600">problemas</span></p>        
        </div>
  
        </div>

        <div
        className="grid grid-cols-2 w-full text-center align-middle items-center"
        >
          <div>
            <p className="text-center text-5xl font-montserrat font-medium">Método Socrático</p>
          </div>
    
          <div className="border-purple-600 w-full h-96 my-8 border-solid border-2 rounded-lg"/>
          
        </div>
      </div>

      {/* --------------------------- */}

      <p className="text-center text-6xl font-light">¿Cómo funciona?</p>
      <div
          className="-translate-x-20 grid grid-cols-2 w-2/3 text-center align-middle items-center gap-20"
          >
      
            <div className="py-4 px-2 flex flex-col justify-between text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20">
              <p>2 clases a la semana</p>
              <p className="text-lg opacity-85">2 grupos fijos a la misma hora y mismo día, cada semana</p>
            </div>
            <div className="py-4 px-2 flex flex-col justify-between text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20">
              <p>Experiencias ILIMITADAS</p>
              <p className="text-lg opacity-85">Tu hij@ puede elegir entre una variedad de eventos adicionales <span className="text-purple-400">¡SIN NINGÚN LÍMITE NI COSTO EXTRA!</span></p>
            </div>
      </div>

      <div
          className="translate-x-20 grid grid-cols-2 w-2/3 text-center align-middle items-center gap-20"
          >
      
            <div className="py-4 px-2 flex flex-col justify-between text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20">
              <p>2 clases a la semana</p>
              <p className="text-lg opacity-85">2 grupos fijos a la misma hora y mismo día, cada semana</p>
            </div>
            <div className="py-4 px-2 flex flex-col justify-between text-2xl border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-2xl hover:bg-slate-400/20">
              <p>Experiencias ILIMITADAS</p>
              <p className="text-lg opacity-85">Tu hij@ puede elegir entre una variedad de eventos adicionales <span className="text-purple-400">¡SIN NINGÚN LÍMITE NI COSTO EXTRA!</span></p>
            </div>
      </div>
            

      {/* -------------------------- */}

      <div className="w-full mt-8">
        <CollapsibleSection title={'Lideres del futuro'} className={'px-8'}>
            <p className="my-12 font-sans font-medium text-lg text-center">Grandes retos demandan enormes soluciones, ¿Estamos preparados para encontrarlas o crearlas?</p>

            <div
            className="grid grid-cols-2 w-full text-center align-middle items-center"
            >
                <p className="text-left font-medium">El objetivo del programa “Líderes del futuro” es apoyar a cada estudiante en su proceso de aprendizaje, desarrollando habilidades sociales y cognitivas que les permitirán enfrentar los retos del mundo real y adaptarse a un ambiente lleno de cambios y desafios.</p>
        
              <div className="border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-lg"/>
              
            </div>

            <p className="text-center text-xl font-medium py-8">Mondasi <span className="text-purple-600">prepara a tus hijos</span> con las <span className="text-purple-600">habilidades que necesitan para afrontar la vida real.</span> </p>


        </CollapsibleSection>


        <CollapsibleSection title={'Horas Extraordinarias'} className={'my-2 p-8'}>
            <p className="my-12 font-sans font-medium text-lg text-center">¿Debates? ¿Resolver problemas complejos? ¿Espacios de diseño? ¿Cómo funciona la IA? ¿Qué tal dejar volar la imaginación y creatividad? ¿Cómo suena un club basado en los gustos de tus hijos? </p>

            <p className="my-12 font-sans font-medium text-lg text-center">Mondasi es una comunidad en línea, en donde tus hijos pueden conocer a personas de distintos lugares, aprender de nuevas culturas, compartir momentos con los demás y hacer amigos increíbles.</p>


            <div
            className="grid grid-cols-2 w-full text-center align-middle items-center"
            >
                <p className="text-left font-medium">
Tus hijos podrán elegir la mejor opción para ellos entre una variedad de eventos: {"\n"}

Debates {"\n"}

Proyectos grupales

Arte digital 

Horas de juego

Escritura digital</p>
        
              <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-4">

                <div className="border-purple-600 w-full h-48 border-solid border-2 rounded-lg"/>
                <div className="border-purple-600 w-full h-48 border-solid border-2 rounded-lg"/>
                <div className="border-purple-600 w-full h-48 border-solid border-2 rounded-lg"/>
                <div className="border-purple-600 w-full h-48 border-solid border-2 rounded-lg"/>
              </div>
              
            </div>

            <p className="text-center text-xl font-medium">Todas las actividades están incluidas <span className="text-purple-600">sin costo extra.</span> </p>
            <p className="text-center font-medium">Cada evento cuenta con un límite de capacidad.</p>


        </CollapsibleSection>
        <CollapsibleSection title={'Metodología'} className={'my-2 px-8'}>
          <p className="block text-center text-xl font-medium my-4">Habilidades para el <span className="text-purple-600">siglo XXI</span>, no el siglo XX. </p>
          <div className="flex flex-col items-center w-full">
            <div className="block border-purple-600 w-2/4 h-32 border-solid border-2 rounded-lg"/>
          </div>

          <div
          className="grid grid-cols-2 w-full text-center align-middle items-center"
          >
              <p className="text-left font-medium">
              A través de videojuegos, proyectos y el método socrático, Mondasi desarrolla en tus hijos habilidades duraderas y aplicables en la vida diaria en distintas disciplinas, transferibles a contextos personales y profesionales y útiles aún cuando la tecnología, los recursos y la sociedad evoluciona.
              </p>
      
            <div className="border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-lg"/>
            
          </div>

          <div
          className="grid grid-cols-2 w-full text-center align-middle items-center"
          >
            <div className="border-purple-600 w-full h-48 my-8 border-solid border-2 rounded-lg"/>

            <p className="text-left font-medium">
              Las clases en Mondasi se &quot;invierten&quot;, es decir, los estudiantes son los encargados de su aprendizaje y de crear experiencias únicas que los ayuden al desarrollo óptimo de las hábilidades básicas para la vida diaria. (Con intervenciones estratégicas del guía a lo largo de la clase).
            </p>
            
          </div>
            <p>
            Mondasi mantiene a los estudiantes comprometidos en cada clase, al permitirles crear las experiencias que ellos buscan nos aseguramos de que los estudiantes realmente quieren ser parte de la comunidad.
            </p>
          
          <div className="block text-center text-xl font-medium my-4">
            <p>
            Habilidades técnicas y habilidades blandas en un solo lugar:
            </p>
            <p>
            Experiencias complejas y únicas
            </p>
            <p>            
            Mentores altamente preparados 
            </p>
            <p>
            Uso de tecnologías innovadoras
            </p>
          </div>
          
          <div className="flex flex-col items-center w-full">
            <div className="block border-purple-600 w-2/4 h-32 border-solid border-2 rounded-3xl"/>
          </div>
          
        </CollapsibleSection>

        <p className="text-center text-6xl font-light pb-8">El potencial de tus hijos es <span className="text-purple-600">infinito</span></p>
        <p className="text-center text-6xl font-light pb-8">Permítenos demostrártelo.</p>
        
        
        <div className="flex w-full items-center justify-center">
        <PaymentCard></PaymentCard>

        </div>

        <div className="px-12">
          <div
          className="grid grid-cols-2 w-full text-center align-middle items-center gap-16"
          >
            <div className="border-purple-600 w-full min-h-96 my-8 border-solid border-2 rounded-lg flex flex-col items-center gap-4">
              <h4>FAQs</h4>
              <button className="py-2 px-4 rounded-full bg-purple-600 text-white">¿Qué aprenderá mi hij@?</button>
              <button className="py-2 px-4 rounded-full bg-purple-600 text-white">¿Cómo sabré si mi hij@ está progresando?</button>
              <button className="py-2 px-4 rounded-full bg-purple-600 text-white">¿Cuentan con algun tipo de apoyo económico?</button>
              <button className="py-2 px-4 rounded-full bg-purple-600 text-white">¿Qué incluye la suscripción?</button>
              <button className="py-2 px-4 rounded-full bg-purple-600 text-white">¿Es Mondasi un curso?</button>

            </div>
            <div className="border-purple-600 w-full min-h-96 my-8 border-solid border-2 rounded-lg">
              Forms
            </div>
            

            
          </div>
        </div>

      </div>
            <Footer className={''}/>

    </main>
  );
}
