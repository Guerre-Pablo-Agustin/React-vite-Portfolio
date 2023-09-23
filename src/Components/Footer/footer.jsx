import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-2">Servicios</h3>
          <ul className="list-none p-0">
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400">Diseño web</a></li>
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400">Manejo de Bases de datos</a></li>
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400">Hosting y dominios</a></li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-2">Contacto</h3>
          <p className="text-sm">
            Si tienes alguna consulta o quieres solicitar un presupuesto, puedes contactarme a través de los siguientes medios:
          </p>
          <ul className="list-none p-0 flex flex-wrap gap-2">
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400 flex items-center gap-1"><i className="fa fa-phone"></i> +54 376 444 5555</a></li>
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400 flex items-center gap-1"><i className="fa fa-envelope"></i> info@tuempresa.com</a></li>
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400 flex items-center gap-1"><i className="fa fa-facebook"></i><FaTelegramPlane /> Tu Empresa</a></li>
            <li className="text-sm"><a href="#" className="text-white hover:text-blue-400 flex items-center gap-1"><i className="fa fa-twitter"></i><BiLogoLinkedinSquare /> @tuempresa</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-2">
        <p className="text-xs">© 2023 Guerreño Pablo Agustin. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
