import Image from 'next/image';

const Header = () => {
    return (
        <div className="z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between text-sm p-4 lg:p-12">
            <div className="fixed lg:static bottom-0 left-0 flex h-32 lg:h-auto w-full items-end justify-center lg:w-auto bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none p-4 lg:p-0">
                <a
                    className="pointer-events-none lg:pointer-events-auto flex place-items-center gap-2"
                    href="/"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/Mondasi_new_nobg_white.png"
                        srcSet="/Mondasi_new_nobg_white.png 1x, Mondasi_new_nobg_white.png 2x"
                        alt="Mondasi Logo"
                        title="Mondasi logo"
                        width={350} 
                        height={32}
                        priority
                    />
                </a>
            </div>
            <div className="flex flex-grow justify-end gap-2 lg:gap-4 mt-4 lg:mt-0">
                <a href='/escuelas' className="px-4 lg:px-8 py-2 lg:py-4 text-base lg:text-lg rounded-full font-semibold hover:bg-purple-600 transition ease-in delay-80 hover:scale-110">
                    Escuelas
                </a>
                <a href='/piloto' className="px-4 lg:px-8 py-2 lg:py-4 text-base lg:text-lg rounded-full font-semibold hover:bg-purple-600 transition ease-in delay-80 hover:scale-110">
                    Prueba Gratis
                </a>
                <a href='/login' className="login">
                    <Image src="/login.svg" alt="login.svg" width={50} height={50} />
                </a>
            </div>
        </div>
    )
}

export default Header;
