import RegularButtons from "@/components/section/components/buttons/RegularButtons";
import React from "react";

type Props = {};

function buttons({}: Props) {


  return (
    <main className="flex flex-col items-center justify-center gap-8 py-12 px-12 overflow-hidden relative">
      <RegularButtons/>
    </main>
  );
}

export default buttons;
