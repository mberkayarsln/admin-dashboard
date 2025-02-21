import Navbar from "@/components/dashboard/Navbar"
import Sidebar from "@/components/dashboard/Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout