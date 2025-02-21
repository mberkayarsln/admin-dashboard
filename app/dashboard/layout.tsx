import Navbar from "@/components/dashboard/Navbar"
import Sidebar from "@/components/dashboard/Sidebar/Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="flex-[1] bg-[var(--bgSoft)] p-5">
                <Sidebar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout