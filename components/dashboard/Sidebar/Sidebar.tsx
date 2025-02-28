import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import Image from "next/image";
import { signOut } from "@/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];


const Sidebar = () => {
  return (
    <div className="sticky top-10">

      <div className="flex items-center gap-5 mb-5">
        <Image className="rounded-full object-cover" src="/noavatar.png" alt="No avatar" width={50} height={50} />
        <div className="flex flex-col">
          <span className="font-medium">Berkay Arslan</span>
          <span className="text-xs text-[var(--textSoft)]">Administrator</span>
        </div>
      </div>

      <ul className="list-none">
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className="text-[var(--textSoft)] font-bold text-[13px] my-[10px]">{item.title}</span>
            <ul>
              {item.list.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <MenuLink item={subItem} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button className="p-5 flex items-center gap-2.5 my-[5px] rounded-[10px] hover:bg-[var(--bgActive)] w-full">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebar