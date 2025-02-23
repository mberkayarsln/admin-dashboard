import { deleteUser } from "@/app/lib/actions"
import { fetchUsers } from "@/app/lib/data"
import Pagination from "@/components/dashboard/Pagination"
import Search from "@/components/dashboard/Search"
import Image from "next/image"
import Link from "next/link"

const UsersPage = async ({ searchParams }: { searchParams: { search: string, page: string } }) => {

    const query = await searchParams.search;
    const page = await searchParams.page;

    const { users, count }: { users: User[]; count: number; } = await fetchUsers(query, page);

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
                                    <Image className="object-cover rounded-full aspect-square" src={user.img || "/noavatar.png"} alt="" width={40} height={40} />
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
                                    <form action={deleteUser}>
                                        <input type="hidden" name="id" value={user._id.toString()} />
                                        <button className="py-[5px] px-2.5 rounded-[5px] border-none cursor-pointer text-[var(--text)] bg-red-500">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default UsersPage