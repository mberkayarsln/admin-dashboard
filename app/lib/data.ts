import { Product, User } from "./models";
import { connectToDb } from "./utils";

const ITEM_PER_PAGE = process.env.ITEM_PER_PAGE || "10";

export const fetchUsers = async (query: string, page: string) => {
    try {
        connectToDb();
        const regex = new RegExp(query, "i");
        const count = await User.countDocuments();
        const users = await User.find({ username: { $regex: regex } }).limit(parseInt(ITEM_PER_PAGE)).skip((parseInt(page) - 1) * parseInt(ITEM_PER_PAGE));
        return { users, count };
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch users!");
    }
}

export const fetchUserById = async (id: string) => {

    try {
        connectToDb();
        return await User.findById(id);
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching user!");
    }

}

export const fetchUserByEmail = async (email: string) => {
    try {
        connectToDb();
        return await User.findOne({ email });
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching user!");
    }
}

export const fetchProducts = async (query: string, page: string) => {
    try {
        connectToDb();
        const regex = new RegExp(query, "i");
        const count = await Product.countDocuments();
        const products = await Product.find({ title: { $regex: regex } }).limit(parseInt(ITEM_PER_PAGE)).skip((parseInt(page) - 1) * parseInt(ITEM_PER_PAGE));
        return { products, count };
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch products!");
    }
}

export const fetchProduct = async (id: string) => {

    try {
        connectToDb();
        return Product.findById(id);
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching product!");
    }

}
