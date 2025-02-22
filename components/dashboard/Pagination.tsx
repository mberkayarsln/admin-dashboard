const Pagination = () => {
    return (
        <div className="flex justify-between mt-5">
            <div>
                <button className="py-2 px-4 bg-[var(--bgActive)] text-white rounded">Previous</button>
            </div>
            <div>
                <button className="py-2 px-4 bg-[var(--bgActive)] text-white rounded">Next</button>
            </div>
        </div>
    )
}

export default Pagination