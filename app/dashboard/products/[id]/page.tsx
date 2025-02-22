import Image from "next/image";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;

    return (
        <div className="flex gap-4 mt-5">
            <div className="flex-[1] bg-[var(--bgSoft)] p-4 rounded-lg font-bold text-[var(--textSoft)] h-max">
                <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-5">
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                Iphone {id}
            </div>
            <div className="flex-[3] bg-[var(--bgSoft)] p-4 rounded-lg">
                <form action="" className="flex flex-col">
                    <input type="hidden" name="id" value="Iphone {id}" />
                    <label className="text-xs">Title</label>
                    <input type="text" name="title" placeholder="johndoe" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Price</label>
                    <input type="number" name="price" placeholder="100.00" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Stock</label>
                    <input type="number" name="stock" placeholder="10" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Color</label>
                    <input type="text" name="color" placeholder="red" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Size</label>
                    <input type="text" name="size" placeholder="xs" className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2" />
                    <label className="text-xs">Category</label>
                    <select
                        name="cat"
                        id="cat"
                        className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2"
                    >
                        <option value="general">Choose a Category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone">Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <label className="text-xs">Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={10}
                        placeholder="Description"
                        className="p-4 border-2 border-[var(--inputBorder)] rounded bg-[var(--bg)] text-[var(--text)] my-2 resize-none" />
                    <button className="w-full p-4 bg-teal-600 text-[var(--text)] border-none rounded cursor-pointer mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;
