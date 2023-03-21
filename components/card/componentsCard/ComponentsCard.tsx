import Link from "next/link";
import React from "react";

type Props = { href: string; title: string };

function ComponentsCard({ href, title }: Props) {
  return (
    <Link
      href={href}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="h-3/4 w-full border-b-2 relative flex items-center justify-center bg-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
      <h2 className="h-1/4 flex items-center">{title}</h2>
    </Link>
  );
}

export default ComponentsCard;
