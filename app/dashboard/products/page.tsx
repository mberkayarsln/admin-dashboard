import { fetchProducts } from "@/app/lib/data"
import Pagination from "@/components/dashboard/Pagination"
import Search from "@/components/dashboard/Search"
import Image from "next/image"
import Link from "next/link"
import Description from "@/components/dashboard/Products/Description"

const ProductsPage = async ({ searchParams }: { searchParams: { search: string, page: string } }) => {

    const query = await searchParams.search;
    const page = await searchParams.page;

    const { products, count }: { products: Product[]; count: number; } = await fetchProducts(query, page);

    return (
        <div className="bg-[var(--bgSoft)] p-5 mt-5 rounded-[10px]">
            <div className="flex justify-between items-center">
                <Search placeholder="Search users..." />
                <Link href="/dashboard/products/add">
                    <button className="p-2.5 bg-[var(--bgPurple)] text-[var(--text)] rounded-[5px] border-none cursor-pointer">Add New</button>
                </Link>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="[&>*]:p-2.5">
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className="[&>*]:p-2.5" key={product._id}>
                            <td>
                                <div className="flex items-center gap-2.5">
                                    <Image className="object-cover rounded-full aspect-square" src={product.img || "/noavatar.png"} alt="" width={40} height={40} />
                                    {product.title}
                                </div>
                            </td>
                            <td><Description description={product.desc} /></td>
                            <td>${product.price}</td>
                            <td>{product.createdAt?.toString()}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className="flex gap-2.5">
                                    <Link href={`/dashboard/products/${product._id}`}>
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
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default ProductsPage