"use client"

import { Tooltip } from "react-tooltip"

const Description = ({ description }: { description: string }) => {
    return (
        <div>
            <div data-tooltip-id="description"
                data-tooltip-content={description}
                className="overflow-hidden text-ellipsis max-w-64 whitespace-nowrap">
                {description}
            </div>
            <Tooltip id="description" className="max-w-sm" />
        </div>
    )
}

export default Description