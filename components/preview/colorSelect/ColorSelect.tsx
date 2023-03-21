import React, { useState } from 'react'

type Props = {updateColor:Function}

function ColorSelect({updateColor}: Props) {


    const colors = [
        {name: 'primary',bgToSelect:'bg-blue-500', value: 'border-blue-500 focus:ring-blue-500/30 hover:bg-blue-500/80 hover:text-white text-blue-500'},
        {name: 'secondary', bgToSelect: 'bg-gray-300'},
        {name: 'success', bgToSelect: 'bg-green-500'},
        {name: 'danger', bgToSelect: 'bg-red-500'}
    ]

  return (
    <div className=' flex flex-col items-center justify-start gap-2 '>
       <h4 className='text-2xl capitalize'> custom your colors</h4>
       <ul className='flex items-center justify-center gap-2'>
        {colors.map((item,i)=>( <li key={i} onClick={()=>{updateColor(item.name)}} className={`w-10 h-10 shadow-lg cursor-pointer ${item.bgToSelect}`}></li> ))}
       </ul>
    </div>
  )
}

export default ColorSelect