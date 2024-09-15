import { useState } from "react"

export default function PreferenceBox({item, image}) {
    const [selected, Select] = useState(false)
    return (
        <div onClick={() => Select(!selected)}>
            <div className={`flex items-center rounded-lg justify-center w-[10rem] h-[5rem] rounded-md ring-2 ring-orange-400 hover:ring-orange-600 hover:bg-orange-600 ${selected === true ? 'bg-orange-600' : 'bg-black'} `}>
                {item}
            </div>
        </div>
    )
}