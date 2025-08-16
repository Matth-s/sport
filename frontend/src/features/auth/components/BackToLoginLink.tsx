import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackToLoginLink = () => {
  return (
    <div className="mb-3">
      <Link
        href={"/authentification/connexion"}
        className="flex items-center gap-x-1 text-sm hover:underline"
      >
        <ChevronLeft size={20} />
        Revenir à la connexion
      </Link>
    </div>
  );
};

export default BackToLoginLink;
