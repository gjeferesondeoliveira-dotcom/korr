export default function KorrWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="sandbox:/mnt/data/ChatGPT Image 16 de mai. de 2026, 07_17_53.png"
          alt="KORR"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-5xl">
          <h1
            className="text-7xl md:text-9xl tracking-[0.15em] mb-6 text-zinc-100"
            style={{
              fontFamily: 'Cinzel, serif',
              textShadow: '0 0 12px rgba(255,120,0,0.6), 0 0 30px rgba(0,180,255,0.3)',
              background: 'linear-gradient(to bottom, #f5f5f5, #8b8b8b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 15px rgba(255,80,0,0.35))'
            }}
          >
            KØRR
          </h1>

          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[420px] h-[120px] opacity-20 blur-2xl bg-gradient-to-r from-cyan-500 via-transparent to-orange-500"></div>

          <h2 className="text-2xl md:text-4xl text-orange-400 font-bold mb-8">
            THE VALLEY OF LOST VOICES
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-10">
            A community-driven cryptocurrency built to turn the world of KORR into a global movement.
          </p>

          <a
            href="#"
            className="inline-block px-12 py-5 bg-orange-500 hover:bg-orange-600 transition-all rounded-2xl text-2xl font-black shadow-2xl"
          >
            BUY KORR
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 text-orange-400">
              WHAT IS KORR?
            </h2>

            <p className="text-zinc-300 text-xl leading-relaxed mb-6">
              KORR is more than a crypto token.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              It is the first YouTube-powered fantasy crypto community created to grow the world of KORR through storytelling, community power, and long-term vision.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Every important decision will be made by the community through voting.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Token burns, marketing, future expansions, and ecosystem changes will always happen together with the legion.
            </p>

            <p className="text-zinc-300 text-xl font-bold leading-relaxed">
              This is not just crypto.
              This is a movement.
            </p>
          </div>

          <div>
            <img
              src="sandbox:/mnt/data/ChatGPT Image 16 de mai. de 2026, 07_13_47.png"
              alt="KORR"
              className="rounded-3xl shadow-2xl border border-zinc-800"
            />
          </div>
        </div>
      </section>

      {/* BUY BUTTON MIDDLE */}
      <section className="py-20 text-center bg-black px-6">
        <h2 className="text-5xl font-black mb-8">
          JOIN THE LEGION
        </h2>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Become part of the first community capable of transforming a YouTube dream into a legendary crypto ecosystem.
        </p>

        <a
          href="#"
          className="inline-block px-14 py-6 bg-orange-500 hover:bg-orange-600 transition-all rounded-2xl text-3xl font-black shadow-2xl"
        >
          BUY KORR
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-cyan-400">
            WHY KORR HAS HUGE POTENTIAL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-orange-400 mb-4">
                COMMUNITY POWER
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Every holder becomes part of the decision-making process.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-cyan-400 mb-4">
                TOKEN BURNS
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Strategic burns designed to reduce supply and increase long-term value.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-orange-400 mb-4">
                YOUTUBE ECOSYSTEM
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The growth of the KORR stories directly strengthens the ecosystem.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-cyan-400 mb-4">
                LONG TERM VISION
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Built to become one of the strongest crypto communities online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="sandbox:/mnt/data/ChatGPT Image 15 de mai. de 2026, 18_37_07(1).png"
            alt="KORR"
            className="rounded-3xl border border-zinc-800 shadow-2xl"
          />

          <div>
            <h2 className="text-5xl font-black mb-8 text-orange-400">
              THE FUTURE STARTS NOW
            </h2>

            <p className="text-zinc-300 text-xl leading-relaxed mb-6">
              KORR is designed to grow with its community.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Every new member strengthens the movement.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Every story expands the universe.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Every vote shapes the future.
            </p>

            <a
              href="#"
              className="inline-block px-14 py-6 bg-orange-500 hover:bg-orange-600 transition-all rounded-2xl text-3xl font-black shadow-2xl"
            >
              BUY KORR
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-zinc-800 bg-zinc-950 px-6">
        <h2
          className="text-6xl tracking-[0.2em] mb-6"
          style={{
            fontFamily: 'Cinzel, serif',
            textShadow: '0 0 10px rgba(255,100,0,0.5)',
            background: 'linear-gradient(to bottom, #f1f1f1, #6f6f6f)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          KØRR
        </h2>

        <p className="text-zinc-400 text-xl mb-4">
          FROM CHAOS, A LEGEND IS BORN.
        </p>

        <p className="text-orange-400 text-2xl font-bold">
          THE CALL HAS BEGUN.
        </p>
      </footer>
    </div>
  )
}
