function Nosotros() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-green-600">
          Sobre Nosotros
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Somos una empresa comprometida con la digitalización y la excelencia.
          Nos dedicamos a ofrecerle a empresas Mexicanas la digitalización para
          un mundo en constante cambio.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <div className="card w-80 bg-white text-gray-800 shadow-xl p-6 rounded-xl hover:scale-105 transition-transform border border-green-600">
          <h3 className="text-2xl font-semibold text-green-600">
            Nuestra Misión
          </h3>
          <p className="mt-2">
            Impulsar el crecimiento de negocios en Jalisco mediante diseños web
            profesionales, accesibles y adaptados a las necesidades del mercado
            local.
          </p>
        </div>
        <div className="card w-80 bg-white text-gray-800 shadow-xl p-6 rounded-xl hover:scale-105 transition-transform border border-green-600">
          <h3 className="text-2xl font-semibold text-green-600">
            Nuestra Visión
          </h3>
          <p className="mt-2">
            Ser la empresa líder en desarrollo web en Jalisco para 2027,
            expandiendo nuestra influencia a nivel nacional.
          </p>
        </div>
        <div className="card w-80 bg-white text-gray-800 shadow-xl p-6 rounded-xl hover:scale-105 transition-transform border border-green-600">
          <h3 className="text-2xl font-semibold text-green-600">
            Nuestros Valores
          </h3>
          <p className="mt-2">
            Brindar soluciones digitales personalizadas a PyMEs y emprendedores
            en Jalisco, facilitando su presencia online con páginas web
            modernas, funcionales y optimizadas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
