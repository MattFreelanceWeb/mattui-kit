import ComponentsCard from "@/components/card/componentsCard/ComponentsCard";
import React from "react";

type Props = {};

function index({}: Props) {
  const componentsArray: any[] = [
    {
      ready:true,
      title: "buttons",
      href: "/components/buttons",
      component: (
        <>
          <button
            className=" w-full  border-2 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all md:w-60  md:text-2xl 
                   border-blue-500 !bg-blue-500 text-white focus:ring-blue-500/30 hover:bg-blue-500/80  
                  false
                  false
                  "
          >
            {" "}
            primary
          </button>
        </>
      ),
    },
    { ready:false, title: "toggles", href: "/components/toggles", component: <></> },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-screen  py-12">
      <ul className="w-full flex items-center justify-center gap-4 flex-wrap  ">
        {componentsArray.map((item, i) => (
          <li
            key={i}
            className="w-80 h-80 border-2 flex items-center justify-center rounded-lg text-2xl uppercase font-semibold"
          >
            <ComponentsCard
              title={item.title}
              href={item.href}
              component={item.component}
              ready ={item.ready}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default index;
