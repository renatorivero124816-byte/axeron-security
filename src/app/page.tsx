"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-zinc-300/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-zinc-800 py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-3 items-center">

          {/* LOGO */}
          <div
            className={`overflow-hidden transition-all duration-700 flex justify-start ${
              scrolled
                ? "opacity-0 scale-90"
                : "opacity-100 scale-100"
            }`}
          >
            <div className="relative group flex items-center">

              {/* LOGO */}
              <img
                src="/logo.png"
                alt="AXERON Security"
                className="relative z-10 h-14 sm:h-16 md:h-[72px] w-auto object-contain opacity-95 transition-all duration-500 group-hover:brightness-110 drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]"
              />

              {/* BRILLO */}
              <div className="absolute left-[-40%] top-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 blur-md animate-[shine_5s_linear_infinite]"></div>
            </div>
          </div>

          {/* MENU */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 uppercase tracking-[0.18em] text-[10px] sm:text-xs text-zinc-300">

            <a
              href="#servicios"
              className="hover:text-white transition duration-300"
            >
              Servicios
            </a>

            <a
              href="#cobertura"
              className="hover:text-white transition duration-300"
            >
              Cobertura
            </a>

            <a
              href="#premium"
              className="hover:text-white transition duration-300"
            >
              Premium
            </a>

            <a
              href="#contacto"
              className="hover:text-white transition duration-300"
            >
              Contacto
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="flex justify-end">
            <a
              href="https://wa.me/525656154411"
              target="_blank"
              className="bg-zinc-200 hover:bg-white transition-all duration-300 text-black px-4 sm:px-5 py-2 rounded-2xl font-semibold shadow-2xl text-sm hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">

        <div className="max-w-5xl">

          <div className="inline-block border border-zinc-700 px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase text-zinc-300 mb-8">
            AXERON SECURITY
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight">
            Seguridad
            <span className="block text-zinc-300">
              Residencial Premium
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Tecnología, precisión y atención profesional para condominios,
            residenciales y clientes premium en Querétaro.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/525656154411"
              target="_blank"
              className="bg-zinc-200 hover:bg-white transition-all duration-300 text-black px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-105"
            >
              Solicitar Servicio
            </a>

            <a
              href="tel:+525656154411"
              className="border border-zinc-700 hover:border-zinc-300 transition-all duration-300 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="py-24 px-6 md:px-16 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Servicios
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Atención profesional y discreta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Apertura Residencial",
              "Cambio de Chapas",
              "Cerraduras Inteligentes",
              "Reparación de Cerraduras",
              "Mantenimiento Residencial",
              "Emergencias 24/7",
            ].map((service) => (
              <div
                key={service}
                className="group bg-black border border-zinc-800 hover:border-zinc-400 transition-all duration-500 rounded-3xl p-8 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 mb-6"></div>

                <h3 className="text-2xl font-semibold mb-3">
                  {service}
                </h3>

                <p className="text-zinc-400">
                  Atención rápida y profesional.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section
        id="cobertura"
        className="py-24 px-6 md:px-16 bg-black"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Cobertura
              <span className="block text-zinc-300">
                Querétaro
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 text-lg">
              Atención especializada en zonas premium y residenciales.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              {[
                "Juriquilla",
                "Zibatá",
                "El Campanario",
                "Milenio",
                "El Refugio",
                "Centro Sur",
              ].map((zona) => (
                <div
                  key={zona}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3"
                >
                  {zona}
                </div>
              ))}
            </div>
          </div>

          {/* MAPA */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] h-[350px] sm:h-[450px] overflow-hidden shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Querétaro,Mexico&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section
        id="premium"
        className="py-24 px-6 md:px-16 bg-zinc-950"
      >
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl sm:text-5xl font-bold">
            Experiencia Premium
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            Seguridad, discreción y tecnología para clientes residenciales,
            condominios y propiedades premium.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-6 md:px-16 bg-black"
      >
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12">

          <h2 className="text-4xl sm:text-5xl font-bold text-center">
            Contacto
          </h2>

          <div className="mt-10 grid gap-4">

            <input
              className="bg-black border border-zinc-700 p-4 rounded-2xl outline-none"
              placeholder="Nombre"
            />

            <input
              className="bg-black border border-zinc-700 p-4 rounded-2xl outline-none"
              placeholder="Teléfono"
            />

            <textarea
              className="bg-black border border-zinc-700 p-4 rounded-2xl outline-none"
              placeholder="Mensaje"
              rows={5}
            />
          </div>

          <button className="mt-6 w-full bg-zinc-200 hover:bg-white transition-all duration-300 text-black py-4 rounded-2xl font-semibold hover:scale-[1.02]">
            Enviar Solicitud
          </button>
        </div>
      </section>
    </main>
  )
}