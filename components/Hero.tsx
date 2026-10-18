interface HeroProps {
  siteName: string
  heroDescription: string
  buttonLabel: string
  buttonUrl: string
}

export default function Hero({ siteName, heroDescription, buttonLabel, buttonUrl }: HeroProps) {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-24 sm:px-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#07070c] to-[#07070c]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-600/30 via-purple-600/20 to-indigo-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-indigo-200 backdrop-blur">
          {siteName}
        </span>
        <h1 className="mx-auto max-w-3xl bg-gradient-to-br from-white via-white to-indigo-200 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl">
          {heroDescription}
        </h1>
        <div className="mt-10 flex items-center justify-center">
          <a
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)] transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070c]"
          >
            {buttonLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}