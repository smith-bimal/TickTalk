import { BriefcaseBusiness, MessageCircleMore, Settings, UserRoundPlus } from "lucide-react"
import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <aside className="flex flex-col bg-[#111827] w-fit px-4 h-full items-center justify-between py-6 gap-8 text-2xl">
            <div className='flex flex-col gap-8 items-center'>
                <img alt="logo icon" className="w-8 h-8 mb-4" src="../logo-without-text.png" />
                <NavLink to="/user/chats" className="cursor-pointer " >
                    {({ isActive }) => (
                        <MessageCircleMore className={isActive ? "text-white" : "text-[#9CA3AF] hover:text-white transition-all"}/>
                    )}
                </NavLink>
                <NavLink to="/user/friends" className="cursor-pointer ">
                    {({ isActive }) => (
                        <UserRoundPlus className={isActive ? "text-white" : "text-[#9CA3AF] hover:text-white transition-all"}/>
                    )}
                </NavLink>
                <NavLink to="/user/groups" className="cursor-pointer ">
                    {({ isActive }) => (
                        <BriefcaseBusiness className={isActive ? "text-white" : "text-[#9CA3AF] hover:text-white transition-all"}/>
                    )}
                </NavLink>

            </div>

            <div className='flex flex-col gap-8 items-center'>
                <Settings className="text-[#9CA3AF] hover:text-white transition-all cursor-pointer" />
                <div aria-label="User profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0a8ddf] cursor-pointer">
                    <img alt="User profile picture with blue border" className="w-full h-full object-cover" height="40" src="https://storage.googleapis.com/a1aa/image/a781f6e8-8dd5-4cec-896a-0fa4e8345f56.jpg" width="40" />
                </div>
            </div>
        </aside>
    )
}

export default Navbar