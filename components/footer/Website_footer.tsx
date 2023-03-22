import React from 'react'

type Props = {}

function Website_footer({}: Props) {
  let date = new Date()
  let year = date.getFullYear()


  return (
    <footer className='w-full bg-black py-12 px-8 text-white flex flex-col gap-8'>
      <h2 className='font-bold text-2xl  uppercase'>Mattui-kit</h2>
      <div className='flex items-center gap-2 text-lg'>
      <div className=' w-8  border-[1px] pb-1  rounded-full flex items-center justify-center'>c</div>
        <span className=''>{year}</span>
        <span className=''>All rights reserved</span>
      </div>
    </footer>
  )
}

export default Website_footer