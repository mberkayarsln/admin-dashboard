"use client"

import { Tooltip } from "react-tooltip"

const Description = () => {
    return (
        <div>
            <div data-tooltip-id="description"
                data-tooltip-content="mobilephonemobilephonemobilephonemobilephonemobilephonemobilephonemobilephone"
                className="overflow-hidden text-ellipsis max-w-64">
                mobilephonemobilephonemobilephonemobilephonemobilephonemobilephonemobilephone
            </div>
            <Tooltip id="description" />
        </div>
    )
}

export default Description