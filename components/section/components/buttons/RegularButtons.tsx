import ColorSelect from "@/components/preview/colorSelect/ColorSelect";
import ComponentsPreview from "@/components/preview/componentsPreview/ComponentsPreview";
import React, { useState } from "react";

type Props = {};

function RegularButtons({}: Props) {
  const [colors, setColors] = useState<string | undefined>(undefined);

  console.log(colors);

  const buttonsArray = [
    {
      name: "outlined",
      component: (
        <>
          <button
            className={` w-full border-2 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 md:w-[200px] md:text-2xl ${
              colors === undefined || 'secondary'
                ? "border-black focus:ring-black/30 hover:bg-black/80 hover:text-white"
                : colors
            } ${
              colors === "primary" &&
              "border-blue-500 focus:ring-blue-500/30 hover:bg-blue-500/80 hover:text-white text-blue-500 "
            } ${colors === "success" &&  "border-green-500 focus:ring-green-500/30 hover:bg-green-500/80 hover:text-white text-green-500 "}
            ${colors === "danger" &&  "border-red-500 focus:ring-red-500/30 hover:bg-red-500/80 hover:text-white text-red-500 "}
            `}
          >
            {" "}
            Outlined{" "}
          </button>
        </>
      ),
    },
    {
      name: "filled",
      component: (
        <>
          <button className="border-green-500 bg-green-500 text-white focus:ring-green-500/30 hover:bg-green-500/80  w-full border-2 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 md:w-[200px] md:text-2xl">
            {" "}
            filled{" "}
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="fixed top-20 z-40 bg-white w-full p-4  flex items-center justify-between shadow-lg">
        <h2 className="text-2xl font-bold uppercase ">Regular buttons</h2>
        <ColorSelect updateColor={setColors} />
      </div>
      <ul className="w-full flex flex-col items-center justify-center gap-8 pt-28 md:pt-20">
        {buttonsArray.map((item, i) => (
          <li key={i} className="w-full">
            <ComponentsPreview name={item.name} component={item.component} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RegularButtons;
