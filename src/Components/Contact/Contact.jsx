import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import formulario from "./img/form.png";
import { Toaster, toast } from "react-hot-toast";

const Contacto = () => {
  const form = useRef();
  const [mostrarMensajeExito, setMostrarMensajeExito] = useState(false);
  const [formularioData, setFormularioData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const actualizarCampo = (campo, valor) => {
    setFormularioData({
      ...formularioData,
      [campo]: valor,
    });
  };

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_slnzivr",
        "template_qj4n659",
        form.current,
        "uHwjJGQbRD1wG0bDT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Correo enviado exitosamente", {
            style: {
              padding: "16px",
              background: "#07beb8",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            },
          });
          // Limpiar los campos del formulario después de enviar el correo
          setFormularioData({
            nombre: "",
            email: "",
            mensaje: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacto" className="mx-auto grid grid-cols-1 md:grid-cols-2 ">
      <Toaster position="bottom-left" />

      {/* Imagen */}
      <div className=" md:col-span-1 max-[600px]:m-5 ">
        <h1 className="m-auto italic w-[50%] rounded-md text-2xl font-bold mt-4 mb-5 flex items-center justify-center text-center bg-primary text-white p-2 shadow-sm shadow-gray-400 ">
          Formulario de Contacto
        </h1>
        <div className="mb-4 flex items-center justify-center">
          <img
            className="w-[50%] "
            src={formulario}
            alt="fomrulario"
          />
        </div>
      </div>

      {/* Formulario */}
      <div className="md:col-span-1 m-8">
        <div className="px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
          <form ref={form} onSubmit={enviarCorreo} className="space-y-4 w-full">
            <div className="flex w-full relative">
              <input
                type="text"
                id="nombre"
                name="nombre_usuario"
                value={formularioData.nombre}
                onChange={(e) => actualizarCampo("nombre", e.target.value)}
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
                value={formularioData.email}
                onChange={(e) => actualizarCampo("email", e.target.value)}
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
                value={formularioData.mensaje}
                onChange={(e) => actualizarCampo("mensaje", e.target.value)}
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
              className="relative py-2 px-6 text-center text-primary border border-primary rounded-full overflow-hidden transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white"
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
                className="bg-green-500 px-5 py-3 rounded-md 
                text-white mt-2 flex gap-2 shadow-md shadow-green-500/50 hover:scale-110 transition-all  "
              >
                <AiOutlineWhatsApp className="text-3xl" />
              </a>
            </div>
            <div className="mt-10 flex">
              <a
                href="[2]"
                target="_blank"
                className="bg-secondary px-5 py-3 rounded-md 
                text-white mt-2 flex gap-2 shadow-md shadow-secondary/50 hover:scale-110 transition-all "
              >
                <FaTelegramPlane className="text-3xl" />
              </a>
            </div>
            <div className="mt-10 flex">
              <a
                href="[3]"
                target="_blank"
                className="bg-secondary px-5 py-3 rounded-md 
                text-white mt-2 flex gap-2 shadow-md shadow-secondary/50 hover:scale-110 transition-all "
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
