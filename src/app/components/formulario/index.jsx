import { useState } from 'react';
import Image from 'next/image';

export default function CampoTexto(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const placeHolder = `${props.placeholder}`;

  return (
    <div className="mb-4 relative">
      <label className="block text-white text-lg font-bold mb-2" htmlFor={props.id}>
        {props.titulo}
      </label>
      {props.type === "checkbox" ? (
        <input
          className="mr-2 leading-tight"
          id={props.id}
          type="checkbox"
          required={props.required}
        />
      ) : (
        <>
          <input
            className="appearance-none border-b-2 border-purple-500 w-full py-2 px-3 leading-tight focus:outline-none focus:border-purple-700 bg-transparent text-white"
            id={props.id}
            type={props.type === "password" && isPasswordVisible ? "text" : props.type}
            placeholder={placeHolder}
            required={props.required}
          />
          {props.type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <Image
                src={isPasswordVisible ? "/eye-off.svg" : "/eye.svg"}
                alt="Toggle password visibility"
                width={24}
                height={24}
              />
            </button>
          )}
        </>
      )}
    </div>
  );
}
