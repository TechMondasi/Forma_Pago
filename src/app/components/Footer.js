const Footer = (className) => {
    return(
        <div className={`${className} flex flex-col w-full`}>
            <div className="grid grid-cols-2 w-full bg-purple-600 px-16">
                <div className="flex flex-col gap-4 items-start py-4">
                    <p className="text-2xl font-bold">
                        Mantente informado
                    </p>
                    <button className="border-2 border-solid px-8 py-2 font-bold rounded-full hover:bg-black/20">
                        Dejanos tu correo
                    </button>
                    <p>
                        Regístrate a nuestra newsletter y recibe lo más reciente de Mondasi
                    </p>
                </div>
                <div className="grid grid-cols-2 w-full py-4">
                    <div className="flex flex-col items-start">
                        <p className="text-xl font-bold mb-2">Descubre</p>
                        <a href="/blog">Blog</a>
                        <a>Sobre nosotros</a>
                        <a>Únete al equipo</a>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-xl font-bold mb-2">Contacto</p>
                        <a href="/piloto">Agenda un piloto</a>
                        <a href="/escuelas">Soluciones para escuelas</a>
                        <a>Soluciones para empresas</a>
                        <div className="flex items-start gap-2 opacity-35">
                            <a>Linkedin</a>
                            <a>Facebook</a>
                            <a>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-full py-2 text-lg font-light">
                <p> Mondasi  &copy; 2024</p>
                <a> Terminos y condiciones</a>
                <a> Politica de privacidad</a>
                <a> Español</a>

            </div>
        </div>
    )
}

export default Footer;