import ComponentsPreview from "@/components/preview/componentsPreview/ComponentsPreview";
import React from "react";

type Props = {};

function buttons({}: Props) {
  const buttonsArray = [
    {
      name: "test button",
      component:<><button className=" border-2 border-black"> click </button></>

    },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12 px-12 overflow-hidden">
        <h2 className="text-2xl font-bold uppercase">components buttons</h2>
        <ul className="w-full">
            {buttonsArray.map((item, i) => ( 
            <ComponentsPreview
                name={item.name}
                component={item.component}
                key={i}
            />
            ))}
        </ul>
    </main>
  );
}

export default buttons;