import { useEffect, useState } from "react";

function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "María González",
      business: "Artesanías Tonalá",
      text: "Gracias a mi nueva página web, mis artesanías ahora se venden no solo en Jalisco sino en todo México.",
    },
    {
      name: "Roberto Flores",
      business: "Muebles Contemporáneos",
      text: "Mi negocio de muebles incrementó sus ventas un 35% desde que lancé mi página web profesional.",
    },
    {
      name: "Laura Medina",
      business: "Cerámica Tradicional",
      text: "Ahora mis clientes pueden ver mi catálogo completo en línea. Ha sido una gran inversión.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Lleva tu negocio de Tonalá al mundo digital
              </h1>
              <p className="text-lg mb-6">
                Diseñamos páginas web profesionales para artesanos, fabricantes
                de muebles y pequeños negocios de Tonalá que quieren expandir su
                mercado.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                ¡Quiero mi página web!
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/600/400"
                alt="Diseño web para negocios de Tonalá"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ¿Por qué tu negocio necesita una página web?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Abierto 24/7
              </h3>
              <p className="text-gray-600">
                Tu negocio estará disponible para clientes potenciales todo el
                tiempo, incluso cuando tu tienda física esté cerrada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Más ventas
              </h3>
              <p className="text-gray-600">
                Expande tu mercado más allá de Tonalá. Vende tus productos a
                todo México y al mundo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-xl transition duration-300">
              <div className="text-green-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Profesionalismo
              </h3>
              <p className="text-gray-600">
                Una página web bien diseñada genera confianza en tus clientes y
                diferencia tu negocio de la competencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros servicios para tu negocio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-green-400">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Páginas web informativas
              </h3>
              <p className="mb-4">
                Ideal para dar a conocer tu negocio, productos y servicios.
                Incluye información de contacto y ubicación.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Diseño responsivo
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Optimización para buscadores
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Galería de fotos
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-green-400">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                Tiendas en línea
              </h3>
              <p className="mb-4">
                Vende tus artesanías y productos directamente desde tu página
                web, con pagos en línea.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Catálogo de productos
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Carrito de compras
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Pagos seguros
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>

          <div className="max-w-2xl mx-auto bg-black bg-opacity-30 p-6 rounded-lg relative">
            <div className="text-center">
              <p className="text-xl italic mb-4">
                "{testimonials[currentSlide].text}"
              </p>
              <div className="font-semibold">
                <p className="text-green-300">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-sm text-gray-300">
                  {testimonials[currentSlide].business}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-green-400" : "bg-gray-400"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Obtén una página web profesional, moderna y adaptada a las
            necesidades específicas de tu negocio en Tonalá.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Solicitar cotización
            </button>
            <button className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Ver ejemplos
            </button>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestro proceso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Consulta
              </h3>
              <p className="text-gray-600">
                Entendemos las necesidades específicas de tu negocio en Tonalá.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Diseño
              </h3>
              <p className="text-gray-600">
                Creamos un diseño atractivo que refleje la esencia de tu
                negocio.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Desarrollo
              </h3>
              <p className="text-gray-600">
                Construimos tu sitio con las mejores tecnologías para un
                rendimiento óptimo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Lanzamiento
              </h3>
              <p className="text-gray-600">
                Publicamos tu sitio y te capacitamos para que puedas
                administrarlo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
