import React from 'react'

const BlackButton = ({ icon, body }) => {
    return (
        <div className='px-3 py-2 border-2 border-black/10 hover:bg-black/5 transition rounded-xl text-black/60 cursor-pointer flex items-center gap-3'>
            <i className={icon+" text-2xl"}></i>
            <div className='flex flex-col'>
                <span className='text-xs whitespace-nowrap'>Get it on</span>
                <span className='font-semibold whitespace-nowrap'>{body}</span>
            </div>
        </div>
    )
}

export default BlackButton