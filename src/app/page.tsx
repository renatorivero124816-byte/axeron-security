"use client"

import { useEffect, useState } from 'react'

export default function CerrajeriaPremium() { const [scrolled, setScrolled] = useState(false)

useEffect(() => { const handleScroll = () => { setScrolled(window.scrollY > 20) }

window.addEventListener("scroll", handleScroll)
return () => window.removeEventListener("scroll", handleScroll)

}, [])

return ( <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden font-sans scroll-smooth">

{/* NAVBAR */}
  <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-zinc-950/80 backdrop-blur-2xl border-b border-zinc-700"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
      <h1 className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-zinc-200">
        AXERON
      </h1>

      <div className="hidden md:flex items-center gap-8 uppercase tracking-[0.18em] text-xs sm:text-sm text-zinc-300">
        <a href="#servicios" className="hover:text-zinc-100 transition">Servicios</a>
        <a href="#cobertura" className="hover:text-zinc-100 transition">Cobertura</a>
        <a href="#premium" className="hover:text-zinc-100 transition">Premium</a>
        <a href="#contacto" className="hover:text-zinc-100 transition">Contacto</a>
      </div>

      <a
        href="https://wa.me/525656154411"
        target="_blank"
        className="bg-zinc-300 hover:bg-zinc-200 transition text-black px-4 sm:px-5 py-2 sm:py-3 rounded-2xl font-semibold shadow-2xl text-sm sm:text-base"
      >
        WhatsApp
      </a>
    </div>
  </nav>

  {/* BACKGROUND */}
  <div className="fixed inset-0 -z-10 opacity-40">
    <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-zinc-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-zinc-400/10 rounded-full blur-3xl animate-pulse" />
  </div>

  {/* HERO */}
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-4">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(180,180,180,0.25),transparent_60%)]" />

    <div className="relative z-10 text-center max-w-4xl">
      <div className="mb-6">
        <div className="inline-block border border-zinc-600 px-5 py-2 rounded-full text-xs sm:text-sm tracking-[0.25em] uppercase text-zinc-300">
          AXERON SECURITY
        </div>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
        Seguridad Residencial
        <span className="block text-zinc-300">
          Profesional 24/7
        </span>
      </h1>

      <p className="mt-6 sm:mt-8 text-zinc-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
        Servicio especializado para residenciales, departamentos y condominios premium en Querétaro.
      </p>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/525656154411"
          target="_blank"
          className="bg-zinc-300 hover:bg-zinc-200 transition text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl"
        >
          Solicitar Servicio
        </a>

        <a
          href="tel:+525656154411"
          className="border border-zinc-600 hover:border-zinc-300 transition px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/5"
        >
          Llamar Ahora
        </a>
      </div>
    </div>
  </section>

  {/* SERVICIOS */}
  <section id="servicios" className="py-20 sm:py-24 px-4 sm:px-6 md:px-16 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold">Servicios</h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          Atención profesional residencial y condominal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
            className="group relative bg-zinc-900 border border-zinc-700 hover:border-zinc-400 rounded-3xl p-6 sm:p-8 transition hover:-translate-y-1"
          >
            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6" />

            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {service}
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base">
              Servicio rápido, discreto y profesional para residenciales.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* COBERTURA */}
  <section id="cobertura" className="py-20 sm:py-24 px-4 sm:px-6 md:px-16 bg-black">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
      <div>
        <h2 className="text-3xl sm:text-5xl font-bold">
          Cobertura en <span className="block text-zinc-300">Querétaro</span>
        </h2>

        <p className="mt-6 sm:mt-8 text-zinc-400 text-base sm:text-lg">
          Atención en zonas residenciales y condominios premium.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          {["Juriquilla","Zibatá","El Campanario","Milenio","El Refugio","Centro Sur"].map((z) => (
            <div key={z} className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-sm sm:text-base">
              {z}
            </div>
          ))}
        </div>
      </div>

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
      </section>{/* PREMIUM */}
  <section id="premium" className="py-24 px-4 sm:px-6 md:px-16 bg-zinc-950">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl sm:text-5xl font-bold">Experiencia Premium</h2>
      <p className="mt-6 text-zinc-400 text-base sm:text-xl max-w-3xl mx-auto">
        Seguridad, tecnología y atención profesional para clientes residenciales.
      </p>
    </div>
  </section>

  {/* CONTACTO */}
  <section id="contacto" className="py-24 px-4 sm:px-6 md:px-16 bg-black">
    <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10">
      <h2 className="text-3xl sm:text-5xl font-bold text-center">Contacto</h2>

      <div className="mt-10 grid gap-4">
        <input className="bg-black border border-zinc-700 p-4 rounded-2xl" placeholder="Nombre" />
        <input className="bg-black border border-zinc-700 p-4 rounded-2xl" placeholder="Teléfono" />
        <textarea className="bg-black border border-zinc-700 p-4 rounded-2xl" placeholder="Mensaje" rows={5} />
      </div>

      <button className="mt-6 w-full bg-zinc-300 hover:bg-zinc-200 text-black py-4 rounded-2xl font-semibold">
        Enviar Solicitud
      </button>
    </div>
  </section>
</div>

) }