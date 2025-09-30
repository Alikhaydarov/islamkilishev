// app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  text-white flex flex-col">
      {/* Banner */}


      {/* Hero Section */}
     <section className="relative flex flex-col items-center justify-center min-h-screen dark:text-white text-black px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
    Unlock the Secrets of <span className="text-blue-400">Market Making</span>
  </h1>
  <p className="mt-4 max-w-lg dark:text-white text-black text-center">
    ASTROMARCUS IK's proven trading system helps you see reversals 
  </p>

  <div className="mt-10 relative w-full max-w-3xl h-64 sm:h-80 md:h-96">
    <Image src="/image.png" alt="Trading Chart" fill className="object-contain rounded-lg" />
    
    {/* Floating cards */}
    <div className="absolute top-0 left-4 bg-blue-500/80 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
      MMXM
    </div>
    <div className="absolute bottom-4 right-6 bg-green-500/80 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce delay-150">
      With Islam Kilishev
    </div>
  </div>

  <a href="https://t.me/IslamKilichev"><button className="mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full shadow-lg">
    Contact
  </button></a>
</section>

    </main>
  );
}
