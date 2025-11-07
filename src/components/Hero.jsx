import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
            Business Advisory • Fintech • Strategy
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Advisory for ambitious companies shaping the future of finance
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
            We partner with high-growth teams to unlock revenue, improve unit economics, and scale operations with clarity and confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
              Book a Consultation
            </a>
            <a href="#services" className="inline-flex items-center rounded-md border border-gray-300 text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-50">
              Our Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-gray-500">
            <div className="text-sm">Trusted by 120+ venture-backed companies</div>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/60 via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
