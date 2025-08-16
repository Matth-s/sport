import { sidebarLinks } from "@/constants/links-constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className={cn(
        // Mobile : bottom bar
        "fixed right-0 bottom-0 left-0 flex h-20 items-center justify-center border-t-2 border-gray-900 bg-amber-900",
        // Desktop (lg+) : sidebar verticale à gauche
        "lg:relative lg:flex lg:h-full lg:w-56 lg:flex-col lg:items-start lg:justify-start lg:border-t-0 lg:border-r-2 lg:px-4 lg:py-8",
      )}
    >
      <nav className="w-full">
        <ul
          className={cn(
            // Mobile
            "flex w-full flex-row justify-around",
            // Desktop
            "lg:flex-col lg:justify-start lg:gap-y-8",
          )}
        >
          {sidebarLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="flex flex-col items-center gap-y-1 lg:flex-row lg:items-center lg:gap-x-2"
              >
                {link.logo}
                <span className="text-sm lg:text-base">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
