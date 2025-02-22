import { MdSearch } from "react-icons/md"

const Search = ({ placeholder }: { placeholder: string }) => {
    return (
        <div className="flex items-center gap-2.5 bg-[var(--bgActive)] p-2.5 rounded-[10px] w-max">
            <MdSearch />
            <input type="text" placeholder={placeholder} className="bg-transparent border-none outline-none text-[var(--text)]" />
        </div>
    )
}

export default Search