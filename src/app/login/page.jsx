"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CampoTexto from "../../components/formulario";
import Footer from "../../components/Footer";
import { signIn } from "../lib/supabase/auth";
import Link from "next/link";
import ButtonGoogle from "../../components/formulario/ButtonGoogle.jsx"

export default function Home() {
  const router = useRouter();

  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(user.email, user.password);

      alert("Login Successful");
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      console.log("Error: ", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex items-center justify-center px-4 sm:px-12 my-12 text-center font-sans z-[-1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[200px] sm:h-[300px] w-full sm:w-[480px] rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
          <div className="h-[120px] sm:h-[180px] w-full sm:w-[240px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        </div>
        <p className="text-4xl sm:text-7xl font-bold">
          Experimenta el poder de{" "}
          <span className="text-purple-500">Mondasi</span>
        </p>
      </div>

      <div className="w-full max-w-md mx-auto mt-8 px-4 sm:px-8">
        <form
          onSubmit={handleSignIn}
          className="shadow-md rounded-3xl px-8 pt-6 mb-20 border-purple-600 border-solid border-2 bg-white dark:bg-black"
        >
          <div className="text-center text-3xl sm:text-4xl mb-8">
            <h1>Inicia sesión</h1>
          </div>

          <CampoTexto
            id="email"
            titulo="Correo Electrónico"
            placeholder="ejemplo@correo.com"
            type="email"
            required={true}
            value={user.email}
            onChange={handleChange}
          />

          <CampoTexto
            id="password"
            titulo="Contraseña"
            placeholder="Contraseña"
            type="password"
            required={true}
            value={user.password}
            onChange={handleChange}
          />

          <div className="flex flex-col items-center">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              type="submit"
            >
              Iniciar Sesion
            </button>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mt-4 mb-10">
            ¿Aun no tienes una cuenta?
            <Link
              href="/register"
              className="text-purple-500 hover:text-purple-700 font-bold ml-1"
            >
              Crea una
            </Link>
          </p>
        </form>
        <ButtonGoogle></ButtonGoogle>
      </div>

      <Footer />
    </main>
  );
}
