import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <div className={`bg-home-bg h-screen bg-cover bg-center object-contain overflow-hidden bg-no-repeat`}>
        <Navbar />
        <div className="flex items-center sm:mt-32 sm:ml-12 mt-24 ml-2">
          <h1 className="text-white sm:text-4xl font-bold text-xl sm:tracking-widest">
            Discover Games You Will Love
          </h1>
        </div>
        <div className="flex flex-col sm:w-1/3 w-3/5 sm:ml-12 ml-2">
          <p className="text-white font-light mt-8">
            Welcome, adventures! Are you ready to conquer epic quests build
            thriving empires, or solve mind-bending puzzles? We're your one-stop
            shop for discovering incredible games.
          </p>
          <span className="text-white font-medium"> So Let's Go!</span>
          <div className="mt-8">
            <button className="bg-blue text-white p-1 px-3 rounded-full w-44 py-2 flex justify-between items-center">
              Start Exploring
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
