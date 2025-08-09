'use client';

import React, { useEffect, useState } from "react";
import logo from './../../src/components/images/image.png';
import logo2 from './../../src/components/images/image.png';
import { useTheme } from 'next-themes';

const CircleText: React.FC = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const text = "ASTROMARCUS_IK | Veni, Vidi, Vici";
    setLetters(text.split(""));
  }, []);

  const currentLogo = theme === 'dark' ? logo2 : logo;

  return (
    <div className="hidden sm:block items-center relative buttom-[10em] justify-center h-auto  bg-white dark:bg-black">
      <div className="relative w-52 h-52 rounded-full flex items-center justify-center">
        <img
          src={currentLogo.src}
          alt="Logo"
          className="absolute w-32 h-36 rounded-full object-contain"
        />
        <div className="absolute w-full h-full font-mono text-black dark:text-white text-lg animation-textRotation">
          {letters.map((char, i) => (
            <span
              key={i}
              className="absolute left-1/2 transform"
              style={{
                transform: `rotate(${i * 10.3}deg)`,
                transformOrigin: "0 100px",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleText;
