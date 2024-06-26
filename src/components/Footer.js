import Image from "next/image";

const Footer = ({ className }) => {
    return (
        <div className={`${className} flex flex-col w-full`}>
            <div className="align-center grid grid-cols-1 md:grid-cols-2 w-full bg-gradient-to-t from-purple-600 to-purple-900 px-6 md:px-16 py-5">
                <div className="flex flex-col gap-4 items-start">
                    <p className="text-2xl md:text-3xl font-bold">
                        Mantente informado
                    </p>
                    <button className="border-2 text-xl md:text-2xl font-light border-solid px-8 md:px-12 py-2 mt-2 font-bold rounded-full hover:bg-black/20 border-black">
                        Déjanos tu correo
                    </button>
                    <div className="mr-0 md:mr-56 py-2">
                        <p className="text-base md:text-lg font-poppins">
                            Regístrate a nuestra newsletter y recibe lo más reciente de Mondasi
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6 md:mt-0">
                    <div className="flex flex-col gap-2 items-start">
                        <p className="text-xl md:text-2xl font-bold">Descubre</p>
                        <a href="/blog" className="text-base md:text-lg font-light">Blog</a>
                        <a href="#" className="text-base md:text-lg font-light">Sobre nosotros</a>
                        <a href="#" className="text-base md:text-lg font-light">Únete al equipo</a>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <p className="text-xl md:text-2xl font-bold">Contacto</p>
                        <a href="/piloto" className="text-base md:text-lg font-light">Agenda un piloto</a>
                        <a href="/escuelas" className="text-base md:text-lg font-light">Soluciones para escuelas</a>
                        <a href="#" className="text-base md:text-lg font-light">Soluciones para empresas</a>
                        <div className="flex items-start gap-4 md:gap-8 mt-4 md:mt-0">
                            <a href="https://www.linkedin.com/company/mondasi/" target="_blank" rel="noopener noreferrer">
                                <Image src="/linkedin.svg" width={30} height={30} alt="LinkedIn" />
                            </a>
                            <a href="https://www.facebook.com/mondasi.latam" target="_blank" rel="noopener noreferrer">
                                <Image src="/facebook.svg" width={30} height={30} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/mondasi_latam/" target="_blank" rel="noopener noreferrer">
                                <Image src="/instagram.svg" width={30} height={30} alt="Instagram" />
                            </a>
                        </div>
                        <a href="mailto:info@mondasi.com" className="text-base md:text-lg font-light">info@mondasi.com</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around w-full py-2 text-base md:text-lg font-light">
                <p>Mondasi &copy; 2024</p>
                <a href="#" className="text-base md:text-lg font-light">Términos y condiciones</a>
                <a href="#" className="text-base md:text-lg font-light">Política de privacidad</a>
                <a href="#" className="text-base md:text-lg font-light">Español</a>
            </div>
        </div>
    )
}

export default Footer;
