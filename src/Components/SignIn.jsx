export default function SignIn({ onRouteChange }) {
  return (
    <main className="flex h-screen items-center justify-center p-4">
      <section className="w-full max-w-md rounded-2xl border border-white/30 bg-white/20 p-6 text-neutral-800 shadow-2xl backdrop-blur-lg sm:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="mt-2 text-sm font-medium opacity-80">
            Please sign in to your account
          </p>
        </header>

        <div className="space-y-5">
          <fieldset className="m-0 space-y-4 border-none p-0">
            <legend className="sr-only">Sign In Credentials</legend>

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
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/30 bg-white/40 px-4 py-2.5 placeholder-neutral-600 shadow-sm transition-all focus:ring-2 focus:ring-blue-500/80 focus:outline-none"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            onClick={() => onRouteChange("home")}
            className="mt-4 w-full rounded-xl bg-blue-600/90 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-blue-700/90 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
          >
            Sign In
          </button>

          <p className="mt-6 text-center text-sm font-medium">
            Don't have an account?{" "}
            <span
              onClick={() => onRouteChange("register")}
              className="text-blue-700 transition-colors hover:cursor-pointer hover:text-blue-800 hover:underline focus:underline focus:outline-none"
            >
              Sign up here
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
