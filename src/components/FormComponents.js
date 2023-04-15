import React, { useState } from "react";
export function InputText(props) {
  return (
    <>
      {props.label && (
        <label className="text-l font-medium leading-6  text-sky-500">
          {props.label}
        </label>
      )}
      <input
        {...props}
        className="block w-96 bg-slate-800 mb-2 text-sky-500 font-mono font-bold rounded-md border-2 py-1.5 pl-7 pr-20 text-sky-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 focus:outline-sky-600"
      />
    </>
  );
}
export function InputPassword(props) {
  const [showPassword, setShowPassword] = useState("");

  return (
    <>
      <div className="relative">
        {props.label && (
          <label className="text-l font-medium leading-6 text-sky-500">
            {props.label}
          </label>
        )}
        <input
          {...props}
          className="block w-96 bg-slate-800 mb-3 text-sky-500 font-mono font-bold rounded-md border-2 py-1.5 pl-7 pr-20 text-sky-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 focus:outline-sky-600"
          type={showPassword ? "text" : "password"}
        />
        <span
          className="absolute inset-y-0 right-2 h-full flex ml-4 mt-3 items-center"
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-sky-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </>
          )}
        </span>
      </div>
    </>
  );
}

export function Button(props) {
  return (
    <>
      <button
        type="button"
        {...props}
        className="disabled:bg-gray-700 disabled:text-gray-700 border-4 rounded-md bg-blue-800 text-sky-500 mt-3 font-extrabold p-1 w-96"
      >
        {props.text}
      </button>
    </>
  );
}
export function Alert(props) {
  return (
    <>
      <p
        {...props}
        className="text-center text-sm text-red-500 font-mono font-bold"
      >
        {props.text}
      </p>
    </>
  );
}
export function FormIcon(props) {
  return (
    <>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-[60px] text-sky-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <p {...props} className="text-sky-500 font-black font-mono">
        {" "}
        {props.text}
      </p>
    </>
  );
}
export function FormContainer(props) {
  return (
    <>
      <div
        {...props}
        className="flex justify-center items-center flex-col h-screen select-none bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900"
      >
        {props.text}
      </div>
    </>
  );
}
