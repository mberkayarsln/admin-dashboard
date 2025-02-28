import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
    return (
        <div className="bg-[var(--bgSoft)] p-5 rounded-lg mt-5">
            <form action={addProduct} className="flex flex-wrap justify-between">
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    required
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <select
                    name="category"
                    id="category"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                >
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    required
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <input
                    type="number"
                    placeholder="Stock"
                    name="stock"
                    required
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <input
                    type="text"
                    placeholder="Color"
                    name="color"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <input
                    type="text"
                    placeholder="Size"
                    name="size"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <textarea
                    required
                    name="desc"
                    id="desc"
                    rows={10}
                    placeholder="Description"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-full resize-none outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="w-full p-4 bg-teal-600 text-[var(--text)] border-none rounded cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
