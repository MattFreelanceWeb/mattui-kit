import LottieAnimation from "@/components/lottieAnimation/LottieAnimation";
import Link from "next/link";
import React, { ReactElement } from "react";

type Props = { href: string; title: string, component:ReactElement, ready:boolean };

function ComponentsCard({ href, title, component,ready }: Props) {
  return (
    <Link
      href={ ready? href :''}
      className=" w-full h-full flex flex-col items-center justify-center "
    >
      <div className={`h-3/4 w-full border-b-2 relative flex items-center justify-center bg-gray-300 p-4 `}>
        {ready? component : <LottieAnimation src={"https://assets1.lottiefiles.com/packages/lf20_5itouifw.json"}/>}
      </div>
      <h2 className="h-1/4 flex items-center">{ ready? title: `${title + ' coming soon '}`}</h2>
    </Link>
  );
}

export default ComponentsCard;
