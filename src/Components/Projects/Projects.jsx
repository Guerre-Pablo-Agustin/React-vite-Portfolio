import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import pokedex from "./img/pokedex.png";
import clima from "./img/clima.png";
import henrucci from "./img/henrucci.png";
import paises from "./img/paises.png";
import propiedades from "./img/propiedades.png";
import dashboard from "./img/dashboard.jpg";
import { useState } from "react";

const projects = [
  {
    name: "Pokedex",
    image: pokedex,
    description: "Proyecto Pokedex creado con HTML, CSS, JavaScript",
    githubLink: "https://github.com/Guerre-Pablo-Agustin/Pokedex",
    liveLink: "https://app-pokedex-gap.netlify.app",
  },
  {
    name: "Clima App",
    image: clima,
    description: "Proyecto Clima creado con HTML, CSS, JavaScript",
    githubLink: "https://github.com/Guerre-Pablo-Agustin/Clima",
    liveLink: "https://app-clima-gpa.netlify.app",
  },
  {
    name: "Henrucci tienda",
    image: henrucci,
    description: "Ecommerce de ropa creado con Next.js, tailwind css, pasarela de pago paypal",
    githubLink: "https://github.com/Guerre-Pablo-Agustin/Clima",
    liveLink: "https://pf-henry-15a-ecommerce-frontend.vercel.app",
  },
  {
    name: "App de Paises",
    image: paises,
    description: "Proyecto Paises creado con Vite, node, express y postgres",
    githubLink: "https://github.com/Guerre-Pablo-Agustin/cr-pi-countries-main",
    liveLink: "https://countries-project-iota.vercel.app",
  },
  {
    name:"App de propiedades",
    image:propiedades,
    description:"Proyecto propiedades creado con Nextjs, tailwindcss y Framer Motion",
    githubLink:"https://github.com/Guerre-Pablo-Agustin/App-Properties",
    liveLink:"https://propiedades-app.netlify.app",
  },
  {
    name:"Dashboard",
    image:dashboard,
    description:"Proyecto dashboard creado con Nextjs, tailwindcss, base de datos PostgreSQL",
    githubLink:"https://github.com/Guerre-Pablo-Agustin/next-dashboard",
    liveLink:"https://dashboard-next14-coral.vercel.app/dashboard",
  }
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div id="projects" className="min-h-[90vh] grid grid-cols-1">
      <div className="bg-primary flex justify-center items-center mt-2">
        <h1 className=" p-2 rounded-md text-white font-bold italic max-[600px]:mt-10 text-5xl mt-10">
          Mis proyectos
        </h1>
      </div>
      <div className="bg-primary flex items-center justify-center flex-col">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 1,
          }}
          modules={[FreeMode, Pagination]}
          className="w-[90%] sm:w-[full]"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center rounded-md"
            >
              <div
                className="relative"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  } absolute inset-0 bg-hover  transition-opacity duration-200 rounded-md`}
                />
                <div
                  className={`${
                    hoverIndex === index ? "opacity-100" : "opacity-0"
                  } absolute inset-0 text-white flex flex-col gap-3 justify-center items-center transition-opacity cursor-pointer duration-300 px-6 py-8`}
                >
                  <h1 className="text-xl lg:text-2xl">{project.name} </h1>
                  <p className="lg:text-[18px]">{project.description} </p>
                  <div className="flex gap-4">
                    <div className="flex">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="bg-primary px-5 py-3 rounded-md text-white mt-2 flex gap-2 shadow-md shadow-primary hover:scale-110 transition-all duration-100 "
                        rel="noreferrer"
                      >
                        <AiFillGithub className="text-3xl" />
                      </a>
                    </div>
                    <div className="flex">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="bg-secondary px-5 py-3 rounded-md text-white mt-2 flex gap-2 shadow-md shadow-secondary hover:scale-110 transition-all duration-100 "
                        rel="noreferrer"
                      >
                        <AiOutlineLink className="text-3xl" />
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[215px] lg:w-[350px] max-[900px]:w-[400px]  h-[250px] lg:h-[400px] max-[900px]:h-[400px] object-cover  rounded-md cursor-pointer "
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
