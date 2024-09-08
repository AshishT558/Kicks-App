import ContentPage from "../components/ContentPage"
import ShoeList from "../components/ShoeList"
import { useState } from "react"
import "./../animations.css"

export default function GalleryPage() {
    const [search, setSearch] = useState("")

    return (
        <div className="flex flex-col items-center justify-center pt-[20rem] mx-5">
                <div className="lg:w-[25rem] w-[15rem] fixed top-[12rem] z-10">
                    <input 
                        type="text" 
                        className="w-full p-3 pl-10 text-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}/>
                    <button 
                        className="absolute top-0 left-0 p-3 text-gray-500">
                        <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 10-12.6 0 6.3 6.3 0 0012.6 0z">
                            </path>
                        </svg>
                    </button>
                </div>
            <div className="mt-5 z-5 fade-in">
                <ShoeList queryType="name" query={search} />
            </div>
        </div> 
    )
}