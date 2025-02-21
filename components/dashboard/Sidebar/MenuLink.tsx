"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { JSX } from "react"

interface MenuLinkProps {
    title: string,
    path: string,
    icon: JSX.Element
}

const MenuLink = ({ item }: { item: MenuLinkProps }) => {

    const pathname = usePathname()

    return (
        <Link href={item.path} className={`p-5 flex items-center gap-2.5 my-[5px] rounded-[10px] hover:bg-[var(--bgActive)] ${pathname === item.path ? 'bg-[var(--bgActive)]' : ''}`}>
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;