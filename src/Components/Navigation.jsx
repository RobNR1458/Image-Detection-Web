export default function Navigation({ onRouteChange }) {
  return (
    <nav>
      <button className="mt-2 mr-2 min-w-20 cursor-pointer rounded-full bg-stone-800/80 px-3 py-2 transition-transform duration-200 ease-in hover:scale-110">
        <span
          onClick={() => onRouteChange("signin")}
          className="text-md text-pink-100 transition-opacity duration-200 ease-in hover:opacity-40 max-sm:text-[0.9em]"
        >
          Sign out
        </span>
      </button>
    </nav>
  );
}
