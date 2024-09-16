import { ReactNode } from "react";


export default function ContentPage({children}) {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-y-5">
            {children}
        </div>
    )
}