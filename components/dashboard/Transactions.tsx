import Image from "next/image"

const Transactions = () => {
    return (
        <div className="p-5 rounded-[10px] bg-[var(--bgSoft)]">
            <h2 className="font-extralight text-[var(--textSoft)] text-2xl p-2.5">Latest Transactions</h2>
            <table className="w-full">
                <thead>
                    <tr className="[&>*]:text-start [&>*]:p-2.5">
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="[&>*]:p-2.5">
                        <td>
                            <div className="flex items-center gap-2.5">
                                <Image className="object-cover rounded-full" src="/noavatar.png" alt="" width={40} height={40} />
                                John Doe
                            </div>
                        </td>
                        <td className="rounded-[5px] p-[5px] text-sm text-white">Pending</td>
                        <td>2021-01-01</td>
                        <td>1000$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions