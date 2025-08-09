import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function page() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container max-sm:items-center px-36 max-sm:px-5  py-10 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-2xl font-medium title-font  text-gray-900 dark:text-white">OUR TEAM</h1>
        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-50% h-[350px]  max-sm:w-[500px] max-sm:h-[80%] object-cover object-center mb-4" src="https://uptuz.vercel.app/assets/20240209_152948-Fm14QjzX.jpg"/>
            <div className="w-full">
              <h2 className="itle-font font-medium text-lg text-gray-900  dark:text-white">Ali Khaydarov</h2>
              <h3 className="text-gray-500 mb-3">FrontEnd Developer</h3>
              <p className="mb-4"></p>
              <span className="inline-flex">
                <a className="text-gray-500" href='https://t.me/tolibovich_17'>
                 <FaTelegram  style={{fontSize: "20px"}}/>
                </a>
                <a className="ml-2 text-gray-500" href='https://www.instagram.com/khaydaroff.dev/'>
                <FaInstagram style={{fontSize: "20px"}} />
                </a>
                <a className="ml-2 text-gray-500" href='https://github.com/Alikhaydarov/'>
                <FaGithub style={{fontSize: "20px"}}  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-50% h-[350px]  max-sm:w-[500px] max-sm:h-[80%] object-cover object-center mb-4" src="https://uptuz.vercel.app/assets/photo_3_2024-01-12_23-18-57-14G6P4QJ.jpg"/>
            <div className="w-full">
              <h2 className="itle-font font-medium text-lg text-gray-900  dark:text-white">Ulug'bek Ismoilov</h2>
              <h3 className="text-gray-500 mb-3">BackEnd Developer</h3>
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex">
                <a className="text-gray-500" href='https://t.me/uptuz_owner'>
                 <FaTelegram  style={{fontSize: "20px"}}/>
                </a>
                <a className="ml-2 text-gray-500" href='https://www.instagram.com/samur0770/'>
                <FaInstagram style={{fontSize: "20px"}} />
                </a>
                <a className="ml-2 text-gray-500" href='https://github.com/UPTUZOVER'>
                <FaGithub style={{fontSize: "20px"}}  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-50% h-[350px]  max-sm:w-[500px] max-sm:h-[80%] object-cover object-center mb-4" src="	https://uptuz.vercel.app/assets/photo_2_2024-01-12_23-18-57-CU9kBL5X.jpg"/>
            <div className="w-full">
              <h2 className="itle-font font-medium text-lg text-gray-900  dark:text-white">Orzubek Ashurqulov</h2>
              <h3 className="text-gray-500 mb-3">Web Developer</h3>
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex">
                <a className="text-gray-500" href=''>
                 <FaTelegram  style={{fontSize: "20px"}}/>
                </a>
                <a className="ml-2 text-gray-500" href=''>
                <FaInstagram style={{fontSize: "20px"}} />
                </a>
                <a className="ml-2 text-gray-500" href=''>
                <FaGithub style={{fontSize: "20px"}}  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-50% h-[350px]  max-sm:w-[500px] max-sm:h-[80%] object-cover object-center mb-4" src="https://uptuz.vercel.app/assets/photo_2024-01-17_19-12-49-qrgV3VDU.jpg"/>
            <div className="w-full">
              <h2 className="itle-font font-medium text-lg text-gray-900  dark:text-white">Og'abek</h2>
              <h3 className="text-gray-500 mb-3">Designer</h3>
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <span className="inline-flex">
                <a className="text-gray-500" href=''>
                 <FaTelegram  style={{fontSize: "20px"}}/>
                </a>
                <a className="ml-2 text-gray-500" href=''>
                <FaInstagram style={{fontSize: "20px"}} />
                </a>
                <a className="ml-2 text-gray-500" href=''>
                <FaGithub style={{fontSize: "20px"}}  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page