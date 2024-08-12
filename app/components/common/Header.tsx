"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const data = [
  {
    id: "1",
    path: "/",
    name: "Home",
  },
  {
    id: "2",
    path: "/post",
    name: "Post",
  },
  {
    id: "3",
    path: "/story",
    name: "Story",
  },
  {
    id: "4",
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="bg-secondary w-full container py-3">
      <nav className="flex justify-between">
        <div className="logo">
          <h3>Logo</h3>
        </div>

        <ul className="flex gap-2.5 items-center text-lg ">
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`text-secondary-foreground hover:text-primary cursor-pointer  tracking-wide ${
                    pathName === item.path ? "font-semibold text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
