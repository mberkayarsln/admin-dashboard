"use server";

import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData: FormData) => {
    const { username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);

    try {
        connectToDb();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password as string, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            isAdmin,
            isActive,
            address,
        });
        await newUser.save();
    } catch (error) {
        console.error(error);
        throw new Error("Error adding user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const deleteUser = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting user!");
    }

    revalidatePath("/dashboard/users");
}