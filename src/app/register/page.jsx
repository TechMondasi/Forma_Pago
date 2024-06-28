"use client";

import Header from "../../components/Header";
import CampoTexto from "../../components/formulario";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useState } from 'react';
import { supabase } from '../lib/supabase/supabaseconfig';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [errorPassword, setErrorPassword] = useState(null);
  const [userInput, setUserInput] = useState({
    nombre: "",
    segundoNombre: "",
    apellido: "",
    segundoApellido: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  //HandleChange para el Submit
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    if (userInput.password && userInput.confirmedPassword) {
      if (userInput.password !== userInput.confirmedPassword) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
      }
    }
  };

  //Funcion para el Sign-Up

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (userInput.password !== userInput.confirmedPassword) {
      alert("Passwords must match");
      return;
    } else {
      try {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: userInput.email,
          password: userInput.password,
        });

        if (signUpError) {
          console.log("Sign up error: ", signUpError);
          throw signUpError;
        } else {
          const user = data.user;
          console.log("User sign up: ", user);

          // Insert additional user information into custom table
          const { data: insertData, error: insertError } = await supabase
            .from("usuarios") // Ensure 'usuarios' is your correct table name
            .insert([
              {
                id_auth: user.id,
                primernombre: userInput.nombre,
                segundonombre: userInput.segundoNombre,
                primerapellido: userInput.apellido,
                segundoapellido: userInput.segundoApellido,
                email: userInput.email,
                password: userInput.password,
                demo: false,
                // nombreusuario: null,
                // creadoen: new Date().toISOString(), // Set creation date
                // modificadoEn: new Date().toISOString(), // Set modification date
              },
            ]);

          if (insertError) {
            console.log("InsertError: ", insertError);
            throw insertError;
          }

          console.log("Signup successful: ", insertData);
          setErrorPassword(null); // Clear any previous errors
          router.push("/login");
        }
      } catch (error) {
        console.error("Error during signup:", error.message);

        if (error.message === "Email rate limit exceeded") {
          setErrorPassword(
            "Too many signup attempts from this IP address. Please try again later."
          );
          // Optionally, implement a retry mechanism here.
        } else {
          setErrorPassword(error.message); // Set error message to display
          console.log("Error in catch: ", error.message);
        }
      }
    }
  };

  console.log("Input: ", userInput);
  // console.log("Password Error: ", errorPassword)

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
        <form onSubmit={handleSignUp} className="shadow-md rounded-3xl px-8 pt-6 mb-20 border-purple-600 border-solid border-2 bg-white dark:bg-black">
          <div className="text-center text-3xl sm:text-4xl mb-8">
            <h1>Crea tu cuenta</h1>
          </div>

          <CampoTexto
            id="nombre"
            titulo="Nombre"
            placeholder="Nombre"
            type="text"
            required={true}
            value={userInput.nombre}
            onChange={handleChange}
          />

          <CampoTexto
          id="segundoNombre"
          titulo="Segundo Nombre"
          placeholder="Segundo Nombre"
          type="text"
          required={true}
          value={userInput.segundoNombre}
          onChange={handleChange}
          />

          <CampoTexto
            id="apellido"
            titulo="Apellido"
            placeholder="Apellido"
            type="text"
            required={true}
            value={userInput.apellido}
            onChange={handleChange}

          />
          <CampoTexto
            id="segundoApellido"
            titulo="Segundo Apellido"
            placeholder="Segundo Apellido"
            type="text"
            required={true}
            value={userInput.segundoApellido}
            onChange={handleChange}
          />

          <CampoTexto
            id="email"
            titulo="Correo Electrónico"
            placeholder="ejemplo@correo.com"
            type="email"
            required={true}
            value={userInput.email}
            onChange={handleChange}
          />

          <CampoTexto
            id="password"
            titulo="Contraseña"
            placeholder="Contraseña"
            type="password"
            required={true}
            value={userInput.password}
            onChange={handleChange}
          />

          <CampoTexto
            id="confirmedPassword"
            titulo="Confirme su contraseña"
            placeholder="Contraseña"
            type="password"
            required={true}
            value={userInput.confirmedPassword}
            onChange={handleChange}
          />

          <div className="flex flex-col items-center">
            <button
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              type="submit"
            >
              Crear Cuenta
            </button>
          </div>

          <div className="flex justify-center items-center mb-4">
            <button
              className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Image
                src="/google.svg"
                alt="Google"
                width={24}
                height={24}
                className="mr-2"
              />
              Ingresar con Google
            </button>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm mt-4 mb-10">
            ¿Ya tienes una cuenta?
            <a
              href="/login"
              className="text-purple-500 hover:text-purple-700 font-bold ml-1"
            >
              Inicia sesión
            </a>
          </p>
        </form>
      </div>

      <Footer />
    </main>
  );
}
