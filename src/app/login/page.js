"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

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

            <div className="w-full max-w-md mx-auto mt-8">
                <form className="shadow-md rounded-3xl px-8 pt-6 mb-20 border-purple-600 border-solid border-2">
                    <div className="mb-4">
                        <div className="display-flex w-full text-center text-4xl mb-8">
                            <h1>Inicia Sesion</h1>
                        </div>

                    </div>
                    <div className="mb-4">

                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-lg font-bold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            className="appearance-none border-b-2 border-purple-500 w-full py-2 px-3 leading-tight focus:outline-none focus:border-purple-700 bg-transparent text-white"
                            id="email"
                            type="email"
                            placeholder="tu@ejemplo.com"
                            required={true}
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-white text-lg font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="appearance-none border-b-2 border-purple-500 w-full py-2 px-3 leading-tight focus:outline-none focus:border-purple-700 bg-transparent text-white"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            <Image
                                src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                                alt="Toggle password visibility"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                    <div className="mb-6 relative">
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                            type="button"
                        >
                            Iniciar Sesion
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="flex items-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            <Image
                                src="/path/to/google-icon.svg"
                                alt="Google"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            Ingresar con Google
                        </button>
                    </div>
                    <p className="text-white font-bold text-sm mt-4 mb-10">
                        ¿No tienes una cuenta?
                        <a
                            href="/register"
                            className="text-purple-500 hover:text-purple-700 font-bold ml-1 font-bold "
                        >
                            Crea una
                        </a>
                    </p>
                </form>
            </div>

            <Footer />
        </main>
    );
}
