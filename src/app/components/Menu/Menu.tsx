"use client";

import Image from "next/image";

const Menu = () => {
  const pages = [
    { name: "Football", path: "/" },
    { name: "Horse Racing", path: "/horse-racing" },
  ];

  return (
    <section className="w-full h-full">
      <h3>Popular</h3>
      <ul className="mt-2">
        {pages.map((page) => (
          <li key={page.name}>
            <button
              onClick={() => window.history.pushState(null, "", page.path)}
              className="flex flex-start p-3 gap-x-2 mb-1 items-center h-[44px] w-full bg-white rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src={`/icons/${page.name.toLowerCase().replace(" ", "-")}.svg`}
                alt={`Navigate to the ${page.name} page`}
                width={24}
                height={24}
              />
              <span className="text-sm">{page.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
