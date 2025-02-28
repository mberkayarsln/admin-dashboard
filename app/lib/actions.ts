"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

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

export const updateUser = async (formData: FormData) => {
    const { id, username, email, phone, isAdmin, isActive, address } = Object.fromEntries(formData);

    try {
        connectToDb();
        await User.findByIdAndUpdate(id, {
            username,
            email,
            phone,
            isAdmin,
            isActive,
            address,
        })
    }
    catch (error) {
        console.error(error);
        throw new Error("Error updating user!");
    }

    revalidatePath(`/dashboard/users/${id}`);
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

export const addProduct = async (formData: FormData) => {
    const { title, cat, price, stock, color, size, desc, category } = Object.fromEntries(formData);

    try {
        connectToDb();

        const newProduct = new Product({
            title,
            cat,
            price,
            stock,
            color,
            size,
            desc,
            category
        });
        await newProduct.save();
    } catch (error) {
        console.error(error);
        throw new Error("Error adding product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const updateProduct = async (formData: FormData) => {

    const { id, title, cat, price, stock, color, size, desc, category } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Product.findByIdAndUpdate(id, {
            title,
            cat,
            price,
            stock,
            color,
            size,
            desc,
            category
        });
    } catch (error) {
        console.error(error);
        throw new Error("Error updating product!");
    }

    revalidatePath(`/dashboard/products/${id}`);
}

export const deleteProduct = async (formData: FormData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting product!");
    }

    revalidatePath("/dashboard/products");
}

export const authenticate = async (_: any, formData: FormData) => {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}