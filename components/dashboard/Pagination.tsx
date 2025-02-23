"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ITEM_PER_PAGE = process.env.NEXT_PUBLIC_ITEM_PER_PAGE || "10";

const Pagination = ({ count }: { count: number }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams(); // readonly

    const page = parseInt(searchParams.get("page") || "1");

    const handlePagination = (type: string) => {

        let newPage = type === "prev" ? page - 1 : page + 1

        if (newPage < 1) return;

        const params = new URLSearchParams(searchParams);

        params.set("page", newPage.toString());

        router.replace(`${pathname}?${params}`);
    }

    return (
        <div className="flex justify-between mt-5">
            <div>
                <button disabled={page === 1} className={`py-2 px-4 bg-[var(--bgActive)] text-white rounded ${page === 1 ? "disabled-button" : ""}`} onClick={() => handlePagination("prev")} >Previous</button>
            </div>
            <div>
                <button disabled={parseInt(ITEM_PER_PAGE) * page >= count} className={`py-2 px-4 bg-[var(--bgActive)] text-white rounded ${parseInt(ITEM_PER_PAGE) * page >= count ? "disabled-button" : ""}`} onClick={() => handlePagination("next")} >Next</button>
            </div>
        </div>
    )
}

export default Pagination