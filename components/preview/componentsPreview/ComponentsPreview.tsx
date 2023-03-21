import React, { ReactElement, useState } from "react";
import { Prism } from "@mantine/prism";
import reactElementToJSXString from "react-element-to-jsx-string";

type Props = { name: string; component: ReactElement };

function ComponentsPreview({ name, component }: Props) {
  {
    /*state management*/
  }
  const [codeToggle, setCodeToggle] = useState<Boolean>(false);
  const [copyToggle, setCopyToggle] = useState<Boolean>(false);
  {
    /* function*/
  }
  const copyToClipBoard = (newClip: string) => {
    navigator.clipboard.writeText(newClip);
  };

  return (
    <section className="w-full border-2 rounded-lg flex flex-col items-center justify-center gap-8 pt-12 shadow-xl">
      <div className="w-full flex flex-col items-center gap-8 md:flex-row justify-between px-4 ">
        <h3 className="text-2xl capitalize">{name}</h3>
        <div className="flex flex-col items-center gap-4 text-xl md:flex-row ">
          <button
            aria-label="open code preview"
            onClick={() => setCodeToggle(!codeToggle)}
            className=" w-full border-2 border-black hover:bg-gray-200 px-12 py-2 rounded-lg capitalize flex items-center gap-4 md:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            code
          </button>
          <button
            aria-label="copy to clipboard"
            onClick={() => {
              setCopyToggle(!copyToggle),
                copyToClipBoard(reactElementToJSXString(component));
            }}
            className={` hover:bg-gray-200 px-12 py-2 rounded-lg capitalize flex items-center gap-4 ${
              copyToggle ? "bg-green-500 text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
            {copyToggle ? "copied !" : "copy"}
          </button>
        </div>
      </div>

      <div className="w-full h-full border-2 flex items-center justify-center p-12 bg-gray-200">
        {component}
      </div>
      {codeToggle && (
        <div className="flex flex-col w-full gap-8">
          <div className="w-full flex flex-col items-center justify-between px-4 gap-4 md:flex-row">
            <button
              aria-label="copy to clipboard"
              onClick={() => {
                setCopyToggle(!copyToggle),
                  copyToClipBoard(reactElementToJSXString(component));
              }}
              className={`w-full hover:bg-gray-200 px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 md:w-auto ${
                copyToggle ? "bg-green-500 text-white" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
              {copyToggle ? "copied !" : "copy"}
            </button>
            <button
              aria-label="close code preview"
              onClick={() => {
                setCodeToggle(!codeToggle);
              }}
              className=" w-full bg-red-500 text-white px-12 py-2 rounded-lg capitalize flex items-center justify-center gap-4 md:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              close
            </button>
          </div>
          <Prism colorScheme="dark" language="jsx" noCopy withLineNumbers>
            {reactElementToJSXString(component)}
          </Prism>
        </div>
      )}
    </section>
  );
}

export default ComponentsPreview;
