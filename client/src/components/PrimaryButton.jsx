import React from 'react'

const PrimaryButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='px-5 py-3 bg-[#3B82F6] text-white rounded-lg cursor-pointer'>{children}</button>
    )
}

export default PrimaryButton