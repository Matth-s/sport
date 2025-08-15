import Link from "next/link";
import React from "react";

type AuthFormLinkFooterProps = {
  text: string;
  href: string;
  textHref: string;
};

const AuthFormLinkFooter = ({
  text,
  href,
  textHref,
}: AuthFormLinkFooterProps) => {
  return (
    <div className="ml-auto flex w-fit items-center justify-center gap-x-2 text-sm">
      <p>{text}</p>
      <Link
        href={href}
        className="text-sm text-blue-600 underline hover:underline"
      >
        {textHref}
      </Link>
    </div>
  );
};

export default AuthFormLinkFooter;
