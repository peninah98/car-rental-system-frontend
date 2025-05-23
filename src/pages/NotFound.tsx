import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <>
        
        <main className="relative isolate min-h-full w-full h-screen overflow-hidden flex items-center justify-center">          
        <div className="absolute inset-0 -z-10">
  <img
    src="../public/house1.png"
    alt="house"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-black/70" />
</div>
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-md font-semibold text-white">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center">
          <Link
            to="/"
            className="text-sm font-semibold text-white hover:underline hover:text-gray-200 transition duration-300"
          >
          Back to home
          </Link>
        </div>
          </div>
        </main>
      </>
    )
  }
  