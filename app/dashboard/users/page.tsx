import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/components/dashboard/Pagination"
import Search from "@/components/dashboard/Search"
import Image from "next/image"
import Link from "next/link"

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin?: boolean;
    isActive?: boolean;
    phone?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
}


const UsersPage = async () => {

    const users: User[] = await fetchUsers();

    return (
        <div className="bg-[var(--bgSoft)] p-5 mt-5 rounded-[10px]">
            <div className="flex justify-between items-center">
                <Search placeholder="Search users..." />
                <Link href="/dashboard/users/add">
                    <button className="p-2.5 bg-[var(--bgPurple)] text-[var(--text)] rounded-[5px] border-none cursor-pointer">Add New</button>
                </Link>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="[&>*]:p-2.5">
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr className="[&>*]:p-2.5" key={user._id}>
                            <td>
                                <div className="flex items-center gap-2.5">
                                    <Image className="object-cover rounded-full" src={user.img || "/noavatar.png"} alt="" width={40} height={40} />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString()}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "Active" : "Passive"}</td>
                            <td>
                                <div className="flex gap-2.5">
                                    <Link href={`/dashboard/users/${user._id}`}>
                                        <button className="py-[5px] px-2.5 rounded-[5px] border-none cursor-pointer text-[var(--text)] bg-green-500">
                                            View
                                        </button>
                                    </Link>
                                    <button className="py-[5px] px-2.5 rounded-[5px] border-none cursor-pointer text-[var(--text)] bg-red-500">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage