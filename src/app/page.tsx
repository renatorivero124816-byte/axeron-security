"use client"

import { useEffect, useState } from "react"

export default function CerrajeriaPremium() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden scroll-smooth">

      {/* BACKGROUND CYBER */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-zinc-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border-b border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">

          {/* LOGO CYBER PREMIUM */}
          <div className="relative group flex items-center justify-center">

            {/* Glow principal */}
            <div className="absolute inset-0 bg-zinc-300/20 blur-3xl opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse rounded-full"></div>

            {/* Glow secundario */}
            <div className="absolute inset-0 bg-white/10 blur-2xl opacity-40 group-hover:opacity-80 transition duration-700 rounded-full"></div>

            {/* Logo */}
            <img
              src="/logo.png"
              alt="AXERON Security"
              className="relative z-10 h-16 sm:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] animate-pulse"
            />

            {/* Shine effect */}
            <div className="absolute left-[-40%] top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 blur-md animate-[shine_4s_linear_infinite]"></div>
          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 uppercase tracking-[0.18em] text-xs text-zinc-300">
            <a href="#servicios" className="hover:text-white transition">
              Servicios
            </a>

            <a href="#cobertura" className="hover:text-white transition">
              Cobertura
            </a>

            <a href="#premium" className="hover:text-white transition">
              Premium
            </a>

            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </div>

          {/* BOTON */}
          <a
            href="https://wa.me/525656154411"
            target="_blank"
            className="bg-zinc-200 hover:bg-white transition text-black px-4 sm:px-5 py-2 sm:py-3 rounded-2xl font-semibold shadow-2xl text-sm"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-zinc-950 to-black">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

        <div className="relative z-10 text-center max-w-5xl">

          <div className="inline-block border border-zinc-700 px-5 py-2 rounded-full text-xs tracking-[0.25em] uppercase text-zinc-300 mb-6">
            AXERON SECURITY
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Seguridad Residencial
            <span className="block text-zinc-300">
              Precisión y Tecnología
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Servicio profesional especializado para residenciales,
            condominios y departamentos premium.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/525656154411"
              target="_blank"
              className="bg-zinc-200 hover:bg-white transition text-black font-semibold px-8 py-4 rounded-2xl shadow-2xl"
            >
              Solicitar Servicio
            </a>

            <a
              href="tel:+525656154411"
              className="border border-zinc-700 hover:border-zinc-300 transition px-8 py-4 rounded-2xl bg-white/5"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="py-24 px-4 sm:px-6 md:px-16 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Servicios
            </h2>

            <p className="text-zinc-400 mt-4 text-base sm:text-lg">
              Atención profesional residencial y condominal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Apertura Residencial",
              "Apertura de Departamentos",
              "Cambio de Chapas",
              "Instalación de Cerraduras",
              "Cerraduras Inteligentes",
              "Reparación de Cerraduras",
              "Mantenimiento Residencial",
              "Emergencias 24/7",
              "Servicio para Condominios",
            ].map((service) => (
              <div
                key={service}
                className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-400 transition-all duration-500 rounded-3xl p-8 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 mb-6"></div>

                <h3 className="text-2xl font-semibold mb-3">
                  {service}
                </h3>

                <p className="text-zinc-400">
                  Servicio rápido, discreto y profesional.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section
        id="cobertura"
        className="py-24 px-4 sm:px-6 md:px-16 bg-black"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Cobertura en
              <span className="block text-zinc-300">
                Querétaro
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 text-base sm:text-lg">
              Atención especializada en zonas residenciales y condominios premium.
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
        className="py-24 px-4 sm:px-6 md:px-16 bg-zinc-950"
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl sm:text-5xl font-bold">
            Experiencia Premium
          </h2>

          <p className="mt-6 text-zinc-400 text-base sm:text-xl max-w-3xl mx-auto">
            Seguridad, tecnología y atención profesional para clientes residenciales.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-4 sm:px-6 md:px-16 bg-black"
      >
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10">

          <h2 className="text-3xl sm:text-5xl font-bold text-center">
            Contacto
          </h2>

          <div className="mt-10 grid gap-4">

            <input
              className="bg-black border border-zinc-700 p-4 rounded-2xl"
              placeholder="Nombre"
            />

            <input
              className="bg-black border border-zinc-700 p-4 rounded-2xl"
              placeholder="Teléfono"
            />

            <textarea
              className="bg-black border border-zinc-700 p-4 rounded-2xl"
              placeholder="Mensaje"
              rows={5}
            />
          </div>

          <button className="mt-6 w-full bg-zinc-200 hover:bg-white text-black py-4 rounded-2xl font-semibold transition">
            Enviar Solicitud
          </button>
        </div>
      </section>
    </div>
  )
}