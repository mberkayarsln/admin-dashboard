import { MdSupervisedUserCircle } from "react-icons/md"

/* interface CardProps {
    item: {
        title: string
        number: number
        change: number
    }
} */

const Card = () => {
    return (
        <div className="bg-[var(--bgSoft)] p-5 rounded-[10px] flex gap-5 cursor-pointer w-full hover:bg-[var(--bgActive)]">
            <MdSupervisedUserCircle size={24} />
            <div className="flex flex-col gap-5">
                <span>Total Users</span>
                <span className="text-2xl font-medium">12,000</span>
                <span className="text-sm font-light">
                    <span className="text-green-500">
                        12%
                    </span>{" "}
                    more than previous week
                </span>
            </div>
        </div>
    )
}

export default Card

