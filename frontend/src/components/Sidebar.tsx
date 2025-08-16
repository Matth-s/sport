import { sidebarLinks } from "@/constants/links-constants";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full border-r-2 border-gray-900 px-4 py-8">
      <nav>
        <ul className="flex flex-col gap-y-8">
          {sidebarLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="flex flex-col items-center gap-y-1"
              >
                {link.logo}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
