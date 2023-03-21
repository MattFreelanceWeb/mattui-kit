import ComponentsCard from '@/components/card/componentsCard/ComponentsCard'
import React from 'react'

type Props = {}

function index({}: Props) {

    const componentsArray: any[] = [
        { title: "buttons", href: "/components/buttons" },
        { title: "toggles", href: "/components/toggles" },
      ];

  return (
    <main className="flex flex-col items-center justify-center w-screen py-12">
    <ul className="w-full flex items-center justify-center gap-4 flex-wrap ">
      {componentsArray.map((item, i) => (
        <li key={i} className='w-80 h-80 border-2 flex items-center justify-center rounded-lg text-2xl uppercase font-semibold'>
          <ComponentsCard title={item.title} href={item.href}/>
        </li>
      ))}
    </ul>
  </main>
  )
}

export default index