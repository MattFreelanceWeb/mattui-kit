import Link from "next/link";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="  flex w-full relative ">
      <div className="h-screen  py-12 px-2 flex flex-col items-center justify-center flex-grow  gap-8">
        <h2 className="text-purple-500 text-6xl uppercase font-bold">
          Mattui-kit
        </h2>
        <p className="text-3xl px-4 ">
          the easyest way to implemente <span className=" bg-gradient-to-l from-cyan-500 to-blue-500 bg-clip-text text-transparent font-bold">TailwindCSS</span>  components in your REACT
          application
        </p>
        <div>
          <>
            <Link href='/components'
              className=" w-full border-2 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all md:w-60 md:text-2xl  border-purple-500 !bg-purple-500 text-white focus:ring-purple-500/30 hover:bg-purple-500/80    
            "
            >
              {" "}
              get started
            </Link>
          </>
        </div>
      </div>
    </section>
  );
}

export default Hero;
