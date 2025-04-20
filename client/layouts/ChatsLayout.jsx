import { Outlet } from "react-router"
import Navbar from "../src/components/Navbar"

const ChatsLayout = () => {
    return (
        <div className="flex bg-white w-screen h-screen overflow-hidden">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default ChatsLayout