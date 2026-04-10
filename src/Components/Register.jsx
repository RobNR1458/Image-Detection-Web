export default function Register({ onRouteChange }) {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-10 p-4">
      <button className="min-w-20 cursor-pointer self-end rounded-full bg-stone-800/80 px-3 py-2 transition-transform duration-200 ease-in hover:scale-110">
        <span
          className="text-md text-pink-100 transition-opacity duration-200 ease-in hover:opacity-40 max-sm:text-[0.9em]"
          onClick={() => onRouteChange("signin")}
        >
          Back
        </span>
      </button>
      <section className="w-full max-w-md rounded-2xl border border-white/30 bg-white/20 p-6 text-neutral-800 shadow-2xl backdrop-blur-lg sm:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign Up</h1>
          <p className="mt-2 text-sm font-medium opacity-80">
            You'll be able to start face recognition as soon as you sign up.
          </p>
        </header>

        <div className="space-y-5">
          <fieldset className="m-0 space-y-4 border-none p-0">
            <legend className="sr-only">Sign In Credentials</legend>

            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1.5 text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/30 bg-white/40 px-4 py-2.5 placeholder-neutral-600 shadow-sm transition-all focus:ring-2 focus:ring-blue-500/80 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1.5 text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/30 bg-white/40 px-4 py-2.5 placeholder-neutral-600 shadow-sm transition-all focus:ring-2 focus:ring-blue-500/80 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1.5 text-sm font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-white/30 bg-white/40 px-4 py-2.5 placeholder-neutral-600 shadow-sm transition-all focus:ring-2 focus:ring-blue-500/80 focus:outline-none"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            onClick={onRouteChange}
            className="mt-4 w-full rounded-xl bg-blue-600/90 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-blue-700/90 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
          >
            Sign In
          </button>
        </div>
      </section>
    </main>
  );
}
