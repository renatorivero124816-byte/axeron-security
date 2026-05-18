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
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans scroll-smooth">
      
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-gray-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-[0.2em] text-gray-400">
            AXERON
          </h1>

          <div className="hidden md:flex items-center gap-8 uppercase tracking-[0.18em] text-sm text-zinc-300">
            <a href="#servicios" className="hover:text-gray-400 transition-all">
              Servicios
            </a>

            <a href="#cobertura" className="hover:text-gray-400 transition-all">
              Cobertura
            </a>

            <a href="#premium" className="hover:text-gray-400 transition-all">
              Premium
            </a>

            <a href="#contacto" className="hover:text-gray-400 transition-all">
              Contacto
            </a>
          </div>

          <a
            href="https://wa.me/525656154411"
            target="_blank"
            className="bg-gray-500 hover:bg-gray-400 transition-all duration-300 text-black px-5 py-3 rounded-2xl font-semibold shadow-2xl"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.35),transparent_60%)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-6">
            <div className="inline-block border border-gray-500/30 px-5 py-2 rounded-full text-sm tracking-[0.25em] uppercase text-gray-400">
              Cerrajería Premium
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Seguridad Residencial
            <span className="block text-gray-400">
              Profesional 24/7
            </span>
          </h1>

          <p className="mt-8 text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Servicio especializado para residenciales, departamentos y condominios premium en Querétaro.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/525656154411"
              target="_blank"
              className="bg-gray-500 hover:bg-gray-400 transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl shadow-2xl"
            >
              Solicitar Servicio
            </a>

            <a
              href="tel:+525656154411"
              className="border border-zinc-700 hover:border-gray-500 transition-all duration-300 px-8 py-4 rounded-2xl backdrop-blur-md bg-white/5"
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
            <h2 className="text-4xl md:text-5xl font-bold">
              Servicios
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Atención profesional con enfoque residencial y condominal.
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
                className="group relative bg-zinc-900 border border-zinc-800 hover:border-gray-500/40 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,215,0,0.08)]"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gray-500/10 to-transparent" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-500/10 border border-gray-500/20 flex items-center justify-center mb-6">
                    <div className="w-6 h-6 rounded-full bg-gray-400" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {service}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    Atención rápida, discreta y profesional con herramientas especializadas y servicio de calidad.
                  </p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Cobertura en
              <span className="block text-gray-400">
                Querétaro
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Servicio enfocado en zonas residenciales y condominios premium con atención rápida y profesional.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 text-lg">
              {[
                "Juriquilla",
                "Zibatá",
                "El Campanario",
                "Milenio",
                "El Refugio",
                "Centro Sur",
              ].map((zone) => (
                <div
                  key={zone}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 hover:border-gray-500/40 transition-all"
                >
                  {zone}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gray-500/10 blur-3xl rounded-full" />

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] h-[450px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.4),transparent_60%)]" />

              <div className="text-center px-8">
                <h3 className="text-3xl font-bold mb-6 text-gray-400">
                  Mapa Interactivo
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  Integración con Google Maps mostrando cobertura, ubicación y atención inmediata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section
        id="premium"
        className="relative py-28 px-6 md:px-16 bg-zinc-950 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gray-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block border border-gray-500/20 bg-gray-500/5 rounded-full px-5 py-2 text-gray-400 tracking-[0.2em] uppercase text-sm">
              Experiencia Premium
            </div>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
              Seguridad, Tecnología
              <span className="block text-gray-400">
                y Atención Profesional
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 text-xl leading-relaxed">
              Servicio especializado para clientes que buscan rapidez, discreción y atención residencial de alto nivel.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Herramientas Profesionales",
                desc: "Equipo moderno y especializado para trabajos residenciales y condominales.",
              },
              {
                title: "Atención Inmediata",
                desc: "Respuesta rápida y eficiente con enfoque profesional y discreto.",
              },
              {
                title: "Garantía de Servicio",
                desc: "Compromiso con calidad, seguridad y atención confiable.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black/40 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-10 hover:border-gray-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-500/10 border border-gray-500/20 mb-8" />

                <h3 className="text-2xl font-semibold mb-5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-6 md:px-16 bg-black"
      >
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-[2rem] p-10 md:p-14 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Solicitar Servicio
            </h2>

            <p className="text-zinc-400 mt-5 text-lg">
              Atención inmediata para residenciales y condominios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition-all"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition-all"
            />

            <input
              type="text"
              placeholder="Ubicación"
              className="md:col-span-2 bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition-all"
            />

            <textarea
              placeholder="Describe el servicio requerido"
              rows={5}
              className="md:col-span-2 bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-gray-500 transition-all"
            />
          </div>

          <button className="mt-8 w-full bg-gray-500 hover:bg-gray-400 transition-all duration-300 text-black font-semibold py-5 rounded-2xl text-lg shadow-2xl">
            Enviar Solicitud
          </button>
        </div>
      </section>
    </div>
  )
}