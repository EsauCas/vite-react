import { useState } from "react";

const Paquetes = () => {
  const [activeTab, setActiveTab] = useState("web");

  // Paquetes de páginas web
  const webPackages = [
    {
      id: 1,
      name: "Básico",
      price: "$3,999",
      features: [
        "Sitio web de 3 páginas",
        "Diseño responsivo",
        "Formulario de contacto",
        "Integración con redes sociales",
        "Dominio gratis por 1 año",
      ],
      ideal: "Ideal para artesanos que recién inician su presencia digital",
      timeframe: "Entrega en 7 días",
    },
    {
      id: 2,
      name: "Profesional",
      price: "$7,999",
      featured: true,
      features: [
        "Sitio web de 5-7 páginas",
        "Diseño personalizado",
        "Galería de productos",
        "SEO básico",
        "Formulario de contacto avanzado",
        "Integración con Google Maps",
        "Dominio gratis por 1 año",
        "Hosting por 1 año",
      ],
      ideal: "Perfecto para fabricantes de muebles y talleres establecidos",
      timeframe: "Entrega en 14 días",
    },
    {
      id: 3,
      name: "Premium",
      price: "$12,999",
      features: [
        "Sitio web de hasta 10 páginas",
        "Diseño totalmente personalizado",
        "Catálogo de productos detallado",
        "Optimización SEO completa",
        "Chat en vivo",
        "Administrador de contenido",
        "Reportes de analítica",
        "Dominio gratis por 2 años",
        "Hosting por 2 años",
        "Mantenimiento por 6 meses",
      ],
      ideal: "Para negocios establecidos que buscan expandirse nacionalmente",
      timeframe: "Entrega en 21 días",
    },
  ];

  // Paquetes de marketing digital (para futuras expansiones)
  const marketingPackages = [
    {
      id: 1,
      name: "Presencia Básica",
      price: "$1,999 / mes",
      features: [
        "Gestión de 2 redes sociales",
        "8 publicaciones mensuales",
        "Respuestas a comentarios",
        "Reporte mensual",
      ],
      ideal: "Para mantener presencia online básica",
      timeframe: "Contrato mínimo 3 meses",
    },
    {
      id: 2,
      name: "Crecimiento",
      price: "$3,499 / mes",
      featured: true,
      features: [
        "Gestión de 3 redes sociales",
        "15 publicaciones mensuales",
        "Estrategia de contenido",
        "Campañas de anuncios básicas",
        "Respuestas a comentarios",
        "Reporte quincenal",
      ],
      ideal: "Para negocios que buscan aumentar su audiencia",
      timeframe: "Contrato mínimo 3 meses",
    },
    {
      id: 3,
      name: "Expansión Total",
      price: "$5,999 / mes",
      features: [
        "Gestión de 4 redes sociales",
        "25 publicaciones mensuales",
        "Estrategia de contenido avanzada",
        "Campañas de anuncios completas",
        "Gestión de comunidad",
        "Email marketing",
        "Reporte semanal",
      ],
      ideal: "Para negocios que buscan posicionarse como líderes",
      timeframe: "Contrato mínimo 3 meses",
    },
  ];

  // Servicios adicionales que pueden complementar los paquetes
  const additionalServices = [
    {
      id: 1,
      name: "Sesión fotográfica profesional",
      price: "$1,499",
      description:
        "Fotografías profesionales de tus productos y taller para tu sitio web",
    },
    {
      id: 2,
      name: "Video promocional (30 segundos)",
      price: "$2,499",
      description:
        "Video promocional para compartir en redes sociales y tu sitio web",
    },
    {
      id: 3,
      name: "Capacitación para administrar tu sitio",
      price: "$899",
      description:
        "Sesión de 2 horas para enseñarte a actualizar tu página web",
    },
    {
      id: 4,
      name: "Diseño de logotipo",
      price: "$1,299",
      description: "Diseño profesional de logotipo con 3 propuestas y ajustes",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Encabezado de la página */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          <span className="block">Nuestros Paquetes</span>
          <span className="block text-green-600 mt-2">
            Soluciones digitales para artesanos y fabricantes de Tonalá
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Diseñamos soluciones a la medida que ayudarán a tu negocio a destacar
          en el mundo digital.
        </p>
      </div>

      {/* Selector de categorías */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-md p-1 inline-flex mx-auto">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-6 py-3 rounded-md text-lg font-medium ${
              activeTab === "web"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            } transition-all duration-200`}
          >
            Páginas Web
          </button>
          <button
            onClick={() => setActiveTab("marketing")}
            className={`px-6 py-3 rounded-md text-lg font-medium ${
              activeTab === "marketing"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            } transition-all duration-200`}
          >
            Marketing Digital
          </button>
        </div>
      </div>

      {/* Paquetes */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {(activeTab === "web" ? webPackages : marketingPackages).map(
            (pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  pkg.featured ? "border-4 border-green-500 relative" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg font-medium">
                    Recomendado
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {pkg.name}
                  </h3>
                  <div className="mt-4 flex items-baseline text-green-600">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-5 text-gray-500 text-sm">{pkg.ideal}</p>
                  <p className="mt-2 text-gray-500 text-sm italic">
                    {pkg.timeframe}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#"
                      className={`block w-full px-6 py-3 border border-transparent text-center rounded-md shadow text-white font-medium ${
                        pkg.featured
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-black hover:bg-gray-800"
                      } transition-colors duration-300`}
                    >
                      Solicitar paquete
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Información adicional para los paquetes web */}
      {activeTab === "web" && (
        <div className="max-w-7xl mx-auto mt-20">
          <div className="bg-black rounded-xl shadow-xl overflow-hidden text-white">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">
                ¿Por qué necesitas una página web para tu negocio en Tonalá?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Alcance Nacional
                  </h3>
                  <p className="text-gray-300">
                    Lleva tus artesanías y muebles más allá de Tonalá. Una
                    página web te permite vender en todo México.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Siempre Disponible
                  </h3>
                  <p className="text-gray-300">
                    Tu tienda virtual está abierta 24/7. Muestra tu catálogo
                    incluso cuando tu taller físico está cerrado.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Profesionalismo
                  </h3>
                  <p className="text-gray-300">
                    Genera confianza con tus clientes potenciales al mostrar tus
                    productos y trabajos en un sitio profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Servicios adicionales */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Servicios Adicionales
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Complementa tu paquete con estos servicios para potenciar tu
            presencia digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-start"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <span className="text-green-600 font-bold">
                    {service.price}
                  </span>
                </div>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de FAQ */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">
              ¿Cuánto tiempo toma desarrollar mi página web?
            </h3>
            <p className="mt-2 text-gray-500">
              Dependiendo del paquete que elijas, el tiempo de entrega puede ser
              de 7 a 21 días. Los proyectos más complejos requieren más tiempo
              para asegurar la calidad.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">
              ¿Puedo actualizar yo mismo el contenido de mi página?
            </h3>
            <p className="mt-2 text-gray-500">
              Sí, nuestros paquetes Profesional y Premium incluyen un
              administrador de contenido fácil de usar. Además, ofrecemos
              capacitación para que aprendas a actualizar tu sitio.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">
              ¿Qué necesito para empezar el proyecto?
            </h3>
            <p className="mt-2 text-gray-500">
              Principalmente información sobre tu negocio, fotos de tus
              productos y una idea de lo que quieres lograr. Nosotros te guiamos
              durante todo el proceso.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900">
              ¿Ofrecen mantenimiento después de lanzar la página?
            </h3>
            <p className="mt-2 text-gray-500">
              Sí, el paquete Premium incluye 6 meses de mantenimiento. Para los
              demás paquetes, ofrecemos planes de mantenimiento por separado
              según tus necesidades.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-xl overflow-hidden text-white py-12 px-8">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para llevar tu negocio al mundo digital?
          </h2>
          <p className="text-xl mb-8">
            Agenda una consulta gratuita y diseñemos juntos la mejor estrategia
            para tu negocio en Tonalá
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-white text-green-700 font-bold rounded-md shadow hover:bg-gray-100 transition-colors duration-300"
            >
              Agendar Consulta
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-900 transition-colors duration-300"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
      </div>

      {/* Testimonios de clientes */}
      <div className="max-w-7xl mx-auto mt-20 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Negocios de Tonalá que ya han confiado en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Miguel Ortiz</h4>
                <p className="text-gray-500">Artesanías Ortiz</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Gracias a mi página web, ahora vendo mis artesanías no solo en
              Tonalá sino en todo México. La inversión valió cada peso."
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Laura Ramírez</h4>
                <p className="text-gray-500">Muebles Tonalá</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Mi catálogo en línea me ha permitido mostrar todos mis diseños de
              muebles y recibir pedidos incluso cuando mi taller está cerrado."
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Carlos Mendoza</h4>
                <p className="text-gray-500">Cerámica Tradicional</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "El profesionalismo de mi página web me ha ayudado a conseguir
              clientes mayoristas que antes ni siquiera consideraban mi
              negocio."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paquetes;
