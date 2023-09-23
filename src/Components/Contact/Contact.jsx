import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

//icons
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

//imagen
import formulario from "./img/form.png";

const Contacto = () => {
  const form = useRef();
  const [mostrarMensajeExito, setMostrarMensajeExito] = useState(false);

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_slnzivr', 'template_qj4n659', form.current, 'uHwjJGQbRD1wG0bDT')
      .then((result) => {
        console.log(result.text);
        setMostrarMensajeExito(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contacto" className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Imagen */}
      <div className="md:col-span-1 max-[600px]:m-5">
        <h2 className="text-2xl font-bold m-8">Formulario de Contacto</h2>
        <div className="mb-4">
          <img src={formulario} alt="" />
        </div>
      </div>

      {/* Formulario */}
      <div className="md:col-span-1 m-8">
        {mostrarMensajeExito && (
          <div className="max-w-md py-4 px-6 shadow-2xl shadow-green-800 rounded-lg bg-green-600">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl text-white font-semibold">Éxito</h3>
              </div>
              <p className="text-white">Mensaje enviado correctamente</p>
            </div>
          </div>
        )}

        <div className="px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
          <form ref={form} onSubmit={enviarCorreo} className="space-y-4 w-full">
            <div className="flex w-full relative">
              <input
                type="text"
                id="nombre"
                name="nombre_usuario"
                className="bg-transparent ring-1 ring-gray-300 w-full h-10 rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
                required
              />
              <label
                htmlFor="nombre"
                className="absolute top-1/2 -translate-y-1/2 left-3 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold transition-all bg-white px-2 cursor-text peer-valid:top-0 peer-valid:text-xs peer-valid:font-semibold text-gray-500 flex items-center gap-2"
              >
                Nombre(s) <span className="text-red-500">*</span>
              </label>
            </div>


            <div className="flex w-full relative">
              <input
                type="email"
                id="email"
                name="user_email"
                className="bg-transparent ring-1 ring-gray-300 w-full h-10 rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
                required
              />
              <label
                htmlFor="email"
                className="absolute top-1/2 -translate-y-1/2 left-3 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold transition-all bg-white px-2 cursor-text peer-valid:top-0 peer-valid:text-xs peer-valid:font-semibold text-gray-500 flex items-center gap-2"
              >
                Correo <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex w-full relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="bg-transparent ring-1 ring-gray-300 w-full h-auto rounded peer px-5 transition-all outline-none focus:ring-gray-400 valid:ring-gray-400"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-1/2 -translate-y-1/2 left-3 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold transition-all bg-white px-2 cursor-text peer-valid:top-0 peer-valid:text-xs peer-valid:font-semibold text-gray-500 flex items-center gap-2"
              >
                Mensaje <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              className="relative py-2 px-6 text-center text-green-600 border border-green-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-green-600 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Otros contactos */}
        <div>
          <h2 className="text-2xl font-bold m-8">Otros medios de contacto:</h2>
          <div className="flex gap-4 -mt-14">
            <div className="mt-10 flex">
              <a
                href="[1]"
                target="_blank"
                className="bg-green-500 px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce"
              >
                <AiOutlineWhatsApp className="text-3xl" />
              </a>
            </div>
            <div className="mt-10 flex">
              <a
                href="[2]"
                target="_blank"
                className="bg-secondary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce"
              >
                <FaTelegramPlane className="text-3xl" />
              </a>
            </div>
            <div className="mt-10 flex">
              <a
                href="[3]"
                target="_blank"
                className="bg-secondary px-5 py-3 rounded-full 
                text-white mt-2 flex gap-2 shadow-md animate-bounce"
              >
                <BiLogoLinkedinSquare className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
