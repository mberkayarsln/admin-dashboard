import Image from "next/image";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    return (
        <div className="flex gap-4 mt-5">
            <div className="flex-[1] bg-[var(--bgSoft)] p-4 rounded-lg font-bold text-[var(--textSoft)] h-max">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-5">
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                John Doe {id}
            </div>
            <div className="flex-[3] bg-[var(--bgSoft)] p-4 rounded-lg">
                <form action="" className="flex flex-col">
                    <input type="hidden" name="id" value="John Doe" />
                    <label className="text-xs">Username</label>
                    <input type="text" name="username" placeholder="johndoe" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Email</label>
                    <input type="email" name="email" placeholder="johndoe@gmail.com" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Password</label>
                    <input type="password" name="password" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Phone</label>
                    <input type="text" name="phone" placeholder="5555555555" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Address</label>
                    <textarea name="address" placeholder="istanbul" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2"></textarea>
                    <label className="text-xs">Is Admin?</label>
                    <select name="isAdmin" id="isAdmin" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label className="text-xs">Is Active?</label>
                    <select name="isActive" id="isActive" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button className="w-full p-4 bg-teal-600 text-[var(--text)] border-none rounded cursor-pointer mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;
