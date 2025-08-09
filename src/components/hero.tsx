"use client";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import CircleText from "./circl";
import { useState } from "react"; // 🔁 Qo‘shildi
import img1 from '../components/images/1752835351104.jpg'
import img2 from '../components/images/1752835441061.jpg'
import img3 from '../components/images/1752835678322.jpg'
import img4 from '../components/images/1752835827283.jpg'


export default function Hero() {
  const t = useTranslations("Hero");
  const [loaded, setLoaded] = useState<number[]>([]); // 🔁



const imageSources = [img1.src, img2.src, img3.src, img4.src];



  const handleLoad = (i: number) => {
    setLoaded((prev) => [...prev, i]);
  };

  return (
    <div className="relative overflow-hidden">
      <Fade cascade direction="left" triggerOnce duration={600}>
        <div className="pt-16 pb-10 sm:pt-24 sm:pb-40 lg:pt-64 lg:pb-48 w-full">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Text section */}
            <div className="sm:max-w-lg w-full">
              <h1 className="text-4xl font-bold tracking-tight dark:text-white sm:text-5xl sm:leading-tight max-sm:mt-10">
                {t("title1")}
              </h1>
              <p className="mt-4 text-xl text-gray-500">{t("title2")}</p>
              <br />
              <a
                href="#"
                className="inline-block rounded-lg border border-transparent bg-violet-800 py-3 px-8 text-center font-medium text-white hover:bg-violet-700"
              >
                {t("title3")}
              </a>
            </div>

            <div className=" xl:flex-col sm:pt-36">
              {/* Desktop view */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-5xl max-sm:hidden"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 max-sm:h-full">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-80 w-56 overflow-hidden rounded-lg">
                        <img
                          src={imageSources[0]}
                          alt=""
                          onLoad={() => handleLoad(0)}
                          className={`h-full w-full object-cover object-center transition-all duration-700 ease-in-out ${
                            loaded.includes(0)
                              ? "opacity-100 blur-0 scale-100"
                              : "opacity-0 blur-sm scale-105"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-80 w-56 overflow-hidden rounded-lg">
                        <img
                          src={imageSources[1]}
                          alt=""
                          onLoad={() => handleLoad(1)}
                          className={`h-full w-full object-cover object-center transition-all duration-700 ease-in-out ${
                            loaded.includes(1)
                              ? "opacity-100 blur-0 scale-100"
                              : "opacity-0 blur-sm scale-105"
                          }`}
                        />
                      </div>
                      <div className="h-80 w-56 overflow-hidden rounded-lg">
                        <img
                          src={imageSources[2]}
                          alt=""
                          onLoad={() => handleLoad(2)}
                          className={`h-full w-full object-cover object-center transition-all duration-700 ease-in-out ${
                            loaded.includes(2)
                              ? "opacity-100 blur-0 scale-100"
                              : "opacity-0 blur-sm scale-105"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-80 w-56 overflow-hidden rounded-lg">
                        <img
                          src={imageSources[3]}
                          alt=""
                          onLoad={() => handleLoad(3)}
                          className={`h-full w-full object-cover object-center transition-all duration-700 ease-in-out ${
                            loaded.includes(3)
                              ? "opacity-100 blur-0 scale-100"
                              : "opacity-0 blur-sm scale-105"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile grid 2x2 */}
            <div className="sm:hidden mt-10 grid grid-cols-2 gap-4 px-4">
              {imageSources.map((src, i) => (
                <div
                  key={i}
                  className="w-full aspect-square overflow-hidden rounded-xl shadow-md bg-white"
                >
                  <img
                    src={src}
                    alt={`img-${i}`}
                    onLoad={() => handleLoad(i)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
                      loaded.includes(i)
                        ? "opacity-100 blur-0 scale-100"
                        : "opacity-0 blur-sm scale-105"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Circle text component for desktop */}
        <div className="hidden sm:flex justify-center -mt-24 z-10 relative">
          <CircleText />
        </div>
      </Fade>
    </div>
  );
}

