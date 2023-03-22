import ColorSelect from "@/components/preview/colorSelect/ColorSelect";
import ComponentsPreview from "@/components/preview/componentsPreview/ComponentsPreview";
import React, { useState } from "react";

type Props = {};

function RegularButtons({}: Props) {
  const [colors, setColors] = useState<string | undefined>(undefined);

  const buttonsArray = [
    {
      name: "outlined",
      component: (
        <>
          <button
            className={` w-full border-2 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all md:w-60 md:text-2xl ${
              colors === undefined
                ? "border-black focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "primary"
                ? "border-blue-500 focus:ring-blue-500/30 hover:bg-blue-500/80 hover:text-white text-blue-500 "
                : ""
            } ${
              colors === "secondary"
                ? "border-black focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "success"
                ? "border-green-500 focus:ring-green-500/30 hover:bg-green-500/80 hover:text-white text-green-500 "
                : ""
            } ${
              colors === "danger"
                ? "border-red-500 focus:ring-red-500/30 hover:bg-red-500/80 hover:text-white text-red-500 "
                : ""
            }
            `}
          >
            {" "}
            {colors === undefined ? "outlined" : colors}
          </button>
        </>
      ),
    },
    {
      name: "filled",
      component: (
        <>
          <button
            className={` w-full border-2 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all md:w-60 md:text-2xl ${
              colors === undefined
                ? "border-black bg-black text-white focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "primary"
                ? "border-blue-500 !bg-blue-500 text-white focus:ring-blue-500/30 hover:bg-blue-500/80 "
                : ""
            } ${
              colors === "secondary"
                ? "border-black bg-black text-white focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "success"
                ? "border-green-500 !bg-green-500 text-white focus:ring-green-500/30 hover:bg-green-500/80 "
                : ""
            } ${
              colors === "danger"
                ? "border-red-500 !bg-red-500 text-white focus:ring-red-500/30 hover:bg-red-500/80"
                : ""
            }
            `}
          >
            {" "}
            {colors === undefined ? "filled" : colors}
          </button>
        </>
      ),
    },
    {
      name: "Icon only outlined",
      component: (
        <>
          {" "}
          <button
            className={` border-2 p-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 ${
              colors === undefined
                ? "border-black focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "primary"
                ? "border-blue-500 focus:ring-blue-500/30 hover:bg-blue-500/80 hover:text-white text-blue-500 "
                : ""
            } ${
              colors === "secondary"
                ? "border-black focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "success"
                ? "border-green-500 focus:ring-green-500/30 hover:bg-green-500/80 hover:text-white text-green-500 "
                : ""
            } ${
              colors === "danger"
                ? "border-red-500 focus:ring-red-500/30 hover:bg-red-500/80 hover:text-white text-red-500 "
                : ""
            }
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            {/* icon based on https://heroicons.com/ */}
          </button>
        </>
      ),
    },
    {
      name: "icon only filled",
      component: (
        <>
          <button
            className={` border-2 p-2 rounded-lg capitalize flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 ${
              colors === undefined
                ? "border-black bg-black text-white focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "primary"
                ? "border-blue-500 !bg-blue-500 text-white focus:ring-blue-500/30 hover:bg-blue-500/80 "
                : ""
            } ${
              colors === "secondary"
                ? "border-black bg-black text-white focus:ring-black/30 hover:bg-black/80 hover:text-white dark:border-white dark:focus:ring-white dark:hover:bg-white dark:text-black "
                : ""
            } ${
              colors === "success"
                ? "border-green-500 !bg-green-500 text-white focus:ring-green-500/30 hover:bg-green-500/80 "
                : ""
            } ${
              colors === "danger"
                ? "border-red-500 !bg-red-500 text-white focus:ring-red-500/30 hover:bg-red-500/80"
                : ""
            }
            `}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </button>
        </>
      ),
    },
    {
      name: "facebook",
      component: (
        <>
          <button className={`  border-2 px-12 py-2 rounded-lg flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all  md:text-2xl border-blue-500 !bg-blue-500 text-white focus:ring-blue-500/30 hover:bg-blue-500/80 text-center`}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-10 h-12 fill-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
            Sign-In with <br /> Facebook
          </button>
        </>
      ),
    },
    {
      name: "Google",
      component: (
        <>
          <button className={`  border-2 px-12 py-2 rounded-lg flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all  md:text-2xl border-red-500 !bg-red-500 text-white focus:ring-red-500/30 hover:bg-red-500/80 text-center`}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-10 h-12 fill-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
              />
            </svg>
            Sign-In with <br /> Google
          </button>
        </>
      ),
    },
    {
      name: "Twitter",
      component: (
        <>
          <button className={`  border-2 px-12 py-2 rounded-lg flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all md:text-2xl border-blue-700 !bg-blue-700 text-white focus:ring-blue-700/30 hover:bg-blue-700/80 text-center`}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-10 h-12 fill-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
            Sign-In with <br /> Twitter
          </button>
        </>
      ),
    },
    {
      name: "Linkedin",
      component: (
        <>
          <button className={`  border-2 border-blue-500 px-12 py-2 rounded-lg flex items-center justify-center gap-4 font-semibold text-xl focus:ring active:scale-95 duration-300 break-all md:text-2xl bg-white text-blue-500 text-center`}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-10 h-12 fill-blue-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            Sign-In with <br /> Linkedin
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
          <li key={i} className="w-full" id={`#${item.name}`}>
            <ComponentsPreview name={item.name} component={item.component}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RegularButtons;
