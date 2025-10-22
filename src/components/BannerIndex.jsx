export function BannerIndex() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 bg-[url('https://placehold.co/1920x1080')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Estudios Veterinarios de Alta Complejidad
          </h1>
          {/* prettier-ignore */}
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Ofrecemos servicios de tomografía computarizada de última generación, proporcionando imágenes tridimensionales detalladas que permiten a los veterinarios realizar diagnósticos precisos y planificar tratamientos efectivos.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/contacto"
            >
              Contactanos
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="/solicitarTurno"
            >
              Solicitar turno
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
