import React from "react";
import LottieAnimation from "../lottieAnimation/LottieAnimation";

type Props = {};

function ComingSoon({}: Props) {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className=" max-w-3xl">
        <LottieAnimation
          src={"https://assets7.lottiefiles.com/packages/lf20_ukkmrz6p.json"}
        />
      </div>
    </section>
  );
}

export default ComingSoon;
