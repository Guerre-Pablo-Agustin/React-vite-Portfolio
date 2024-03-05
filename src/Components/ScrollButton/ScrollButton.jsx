import  { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica la posición del scroll para mostrar u ocultar el botón
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Agrega un event listener para escuchar el scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Hace scroll suavemente hacia arriba cuando se hace clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`${isVisible ? 'block' : 'hidden'} fixed bottom-5 right-5 bg-secondary text-white px-4 py-2 rounded-full shadow-md shadow-secondary/50 hover:scale-110 cursor-pointer`} onClick={scrollToTop}>
      <FaArrowUp className="text-xl" />
    </div>
  );
};

export default ScrollToTopButton;
