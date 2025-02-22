const AddUserPage = () => {
    return (
        <div className="bg-[var(--bgSoft)] p-5 rounded-lg mt-5">
            <form className="flex flex-wrap justify-between">
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                />
                <select
                    name="isAdmin"
                    id="isAdmin"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                >
                    <option value="false">Is Admin?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <select
                    name="isActive"
                    id="isActive"
                    className="p-4 bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--inputBorder)] rounded mb-7 w-[45%] outline-none"
                >
                    <option value="false">Is Active?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <textarea
                    required
                    name="address"
                    id="address"
                    rows={10}
                    placeholder="Address"
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

export default AddUserPage;
