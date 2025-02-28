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

interface Product {
    _id: string;
    title: string;
    desc: string;
    price: number;
    stock: number;
    img?: string;
    color?: string;
    size?: string;
    createdAt?: Date;
    updatedAt?: Date;
    category: string;
}
