const PrimaryButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='px-5 py-3 bg-[#3B82F6] text-white rounded-xl cursor-pointer active:bg-[#487dda] transition'>{children}</button>
    )
}

export default PrimaryButton