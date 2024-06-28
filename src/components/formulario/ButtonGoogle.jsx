import { signIn, useSession } from "next-auth/react";

export default function ButtonGoogle() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex justify-center items-center mb-4">
      <button
        onClick={() => signIn()}
        className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign in with Google
      </button>
    </div>
  );
}

// <button
//       onClick={() => signIn()}
//       className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//     >
//       <Image
//         src="/google.svg"
//         alt="Google"
//         width={24}
//         height={24}
//         className="mr-2"
//       />
//       Ingresar con Google
//     </button>
