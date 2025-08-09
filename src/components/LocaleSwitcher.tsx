'use client';
import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

// Til variantlari va bayroqlar
const options = [
  { title: 'en', label: '🇬🇧 EN' },
  { title: 'uz', label: '🇺🇿 UZ' },
];

const LocaleSwitcher = () => {
  const locale = useLocale(); 
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/${e.target.value}`);
  };

  return (
    <form className="w-20 max-sm:w-auto">
      <fieldset>
        <div className="relative">
          <select
            onChange={handleChange}
            className="appearance-none w-full font-semibold py-1.5 px-2 pr-6 bg-transparent dark:bg-transparent outline-none cursor-pointer text-sm border border-gray-300 dark:border-gray-600 rounded-md"
            name="locale"
            id="locale-select"
            value={locale}
          >
            {options.map((option, index) => (
              <option 
                className="dark:bg-slate-900 text-black dark:text-white"
                key={index}
                value={option.title}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default LocaleSwitcher;
