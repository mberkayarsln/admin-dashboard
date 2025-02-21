"use client"
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {

  const pathname = usePathname()

  return (
    <div className="p-5 rounded-[10px] bg-[var(--bgSoft)] flex justify-between items-center">
      <div className="capitalize font-bold text-[var(--textSoft)]">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-[var(--bgActive)] p-2.5 rounded-[10px]">
          <MdSearch />
          <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-[var(--text)]" />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar