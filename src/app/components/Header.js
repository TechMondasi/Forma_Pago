
import Image from 'next/image';

const Header = () => {
    return (<div className="z-10 max-w-7xl w-full items-center justify-between text-sm lg:flex p-12">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                href="/"
                // target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/Mondasi_new_nobg_white.png"
                    srcSet="/Mondasi_new_nobg_white.png 1x, Mondasi_new_nobg_white.png 2x"
                    alt="Mondasi Logo"
                    title="Mondasi logo"
                    // className="dark:invert"
                    width={300}
                    height={32}
                    priority
                />
            </a>
        </div>
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p> */}
        <div className="flex flex-grow justify-end gap-4">
            <a href='/escuelas' className="px-8 py-4 text-lg rounded-full font-semibold hover:bg-purple-600 transition ease-in delay-80 hover:scale-110">
                Escuelas
            </a>
            <a href='/piloto' className="px-8 py-4 text-lg rounded-full font-semibold hover:bg-purple-600 transition ease-in delay-80 hover:scale-110">
                Prueba Gratis
            </a>
            <a href='/login' className="login">
                <Image src="/login.svg" alt="login.svg" width={50} height={32} />
            </a>

        </div>

    </div>)
}

export default Header;