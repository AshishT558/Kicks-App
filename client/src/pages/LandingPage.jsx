import ContentPage from "../components/ContentPage"
import "./../animations.css"
import { NavLink } from "react-router-dom";
import backgroundImage from './../assets/landing_background.jpeg';

// `url(${"https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA="})`
// `url(${backgroundImage})`
export default function LandingPage() {
    var mainStyle = {
        backgroundImage: `url(${backgroundImage})`
        ,
        backgroundRepeat: "no-repeat",
    }
    return (
        <div id="background_image" className="bg-fixed bg-contain lg:bg-cover bg-[center_5rem] lg:bg-[center_bottom]" style={mainStyle}>
            <div id ="landing_page_1_full_area" className="flex justify-center h-screen">
                <div className="h-[120rem]">
                    <div className="flex flex-col items-center h-screen justify-end">
                        <a href="/#start">
                            <div className="flex flex-col items-center justify-center w-[20rem] h-10 bg-black rounded-full mb-10 hover:mb-12 hover:animate-none ring-2 ring-orange-500 hover:ring-orange-600 animate-bounce">
                                Get Started
                            </div>
                        </a>
                        
                    </div>
                    
                    <div className="flex flex-col items-center h-screen">
                        <div id="start" className=""></div>
                        <div className="flex flex-col items-center h-screen fade-in">
                            <div className="flex flex-col gap-y-5 text-3xl lg:text-6xl pt-[7rem] lg:pt-[15rem]">
                                <h1>The <span className="text-orange-500 font-semibold">AI-Powered</span> Shoe App</h1>
                                <h2>...built for <span className="font-bold text-orange-300">you</span>.</h2>
                            </div>
                            <div className="">
                                <p></p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-x-[2rem] lg:gap-x-[10rem] pt-10">
                                <img src="/nike.jpg" width={200} height={200}></img>
                                <img src="/underarmour.jpg" width={200} height={200}></img>
                                <img src="/adidas.jpg" width={200} height={200}></img>
                                <img src="/skechers.webp" width={200} height={200}></img>
                            </div>
                            <div className="grid lg:grid-cols-2 align-center gap-x-10 pt-10">
                                <NavLink to="/gallery">
                                    <div className="flex flex-col items-center justify-center w-[20rem] h-10 bg-black rounded-full mb-10 ring-2 ring-orange-500 hover:ring-orange-600 hover:scale-105">
                                        BROWSE OUR COLLECTION
                                    </div>
                                </NavLink>
                                <NavLink to="/explore">
                                    <div className="flex flex-col items-center justify-center w-[20rem] h-10 bg-orange-500 rounded-full mb-10 ring-2 ring-orange-500 hover:ring-orange-600 hover:scale-105">
                                        FIND ME A SHOE
                                    </div>
                                </NavLink>
                            </div>
                            <div className="text-sm pt-10">
                                How does this work? Check out <span className="text-orange-500"><NavLink to="/about">About</NavLink></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}