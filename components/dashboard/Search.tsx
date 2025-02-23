"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md"

const Search = ({ placeholder }: { placeholder: string }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams(); // readonly

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", "1");

        if (e.target.value)
            params.set("search", e.target.value);
        else
            params.delete("search");

        router.replace(`${pathname}?${params}`);
    }

    return (
        <div className="flex items-center gap-2.5 bg-[var(--bgActive)] p-2.5 rounded-[10px] w-max">
            <MdSearch />
            <input type="text" placeholder={placeholder} className="bg-transparent border-none outline-none text-[var(--text)]" onChange={(e) => handleSearch(e)} />
        </div>
    )
}

export default Search