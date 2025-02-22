import Pagination from "@/components/dashboard/Pagination"
import Search from "@/components/dashboard/Search"
import Image from "next/image"
import Link from "next/link"

const UsersPage = () => {
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
                    <tr className="[&>*]:p-2.5">
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image className="object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40} />
                                John Doe
                            </div>
                        </td>
                        <td>johndoe@gmail.com</td>
                        <td>2021-08-29</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className="flex gap-2.5">
                                <Link href={`/dashboard/users/1`}>
                                    <button className="py-[5px] px-2.5 rounded-[5px] border-none cursor-pointer text-[var(--text)] bg-green-500">
                                        View
                                    </button>
                                </Link>
                                <form>
                                    <input type="hidden" name="id" value="1" />
                                    <button className="py-[5px] px-2.5 rounded-[5px] border-none cursor-pointer text-[var(--text)] bg-red-500">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UsersPage