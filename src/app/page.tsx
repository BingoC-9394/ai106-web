export default function Home() {
  // Mock data for the beagle photo gallery - replace src paths with your actual images
  const photos = [
    { id: 1, title: "Bingo's Morning Walk", desc: "Catching the golden hour light.", src: "/images/bingo-1.jpg" },
    { id: 2, title: "The Classic Beagle Stare", desc: "Those famous soulful eyes.", src: "/images/beagle-profile.jpg" },
    { id: 3, title: "Playtime in the Park", desc: "Unstoppable energy and scent-tracking.", src: "/images/park-run.jpg" },
    { id: 4, title: "Nap Time", desc: "Curled up and dreaming of treats.", src: "/images/nap-time.jpg" },
    { id: 5, title: "Puppy Eyes", desc: "Mastering the art of begging.", src: "/images/puppy-eyes.jpg" },
    { id: 6, title: "Exploring Trails", desc: "Always following the nose.", src: "/images/trail-explorer.jpg" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight">Ken Cheung</span>
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="transition-colors hover:text-black dark:hover:text-white">About</a>
            <a href="#gallery" className="transition-colors hover:text-black dark:hover:text-white">Gallery</a>
            <a href="#contact" className="transition-colors hover:text-black dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Hero / About Section */}
        <section id="about" className="mb-20 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
              🐾 Beagle Photography Portfolio
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Hi, I'm Ken Cheung.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Welcome to my digital space dedicated entirely to capturing the charm, playfulness, and spirit of Beagles. Through my lens, I document their expressive eyes, joyful adventures, and unmistakable personality. 
            </p>
            <p className="text-md text-zinc-500 dark:text-zinc-500 italic">
              Featuring daily captures, outdoor explorations, and special moments with my favorite hound, Bingo.
            </p>
          </div>
          
          {/* Featured Profile Card */}
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl bg-zinc-200 shadow-md dark:bg-zinc-800 md:w-80">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white">
              <span className="mt-auto text-xs uppercase tracking-widest text-amber-400 font-semibold">Featured Subject</span>
              <h3 className="text-xl font-bold">Bingo</h3>
              <p className="text-xs opacity-90">The inspiration behind the lens</p>
            </div>
            {/* Fallback styling placeholder background logic if image isn't loaded */}
            <div className="absolute inset-0 -z-10 bg-amber-500/10 animate-pulse" />
            <img 
              src="/images/bingo-profile.jpg" 
              alt="Bingo the Beagle"
              className="h-full w-full object-cover"
              onError={(e) => {
                // If local image doesn't exist yet, show a clean placeholder gradient
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </section>

        <hr className="my-12 border-zinc-200 dark:border-zinc-800" />

        {/* Gallery Section */}
        <section id="gallery" className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">The Beagle Gallery</h2>
            <p className="text-zinc-600 dark:text-zinc-400">A curated collection of frames highlighting the daily life of the breed.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  {/* Image tag with silent broken image fallback to keep grid clean before you add your photos */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='1'><rect width='22' height='22' x='1' y='1' rx='2'/><circle cx='8' cy='8' r='2'/><path d='M21 15l-5-5L5 21'/></svg>";
                      e.currentTarget.className = "h-full w-full object-center p-12 opacity-40";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{photo.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-16 border-zinc-200 dark:border-zinc-800" />

        {/* Contact/Footer Footer Section */}
        <section id="contact" className="rounded-2xl bg-zinc-900 p-8 text-center text-zinc-100 dark:bg-zinc-900 sm:p-12">
          <div className="mx-auto max-w-md space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Let's Connect</h2>
            <p className="text-sm text-zinc-400">
              Want to collaborate, share beagle stories, or inquire about photography prints? Drop me a line or follow along for more updates.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <a 
                href="mailto:contact@example.com" 
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Email Me
              </a>
              <a 
                href="#gallery" 
                className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                Back to Top
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-xs text-zinc-500 dark:border-zinc-900 dark:text-zinc-600">
        <p>© {new Date().getFullYear()} Ken Cheung. All rights reserved. Crafted with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
