import { useState } from "react"
import PreferenceBox from "./PreferenceBox"

export default function ExplorePageIntro({ sharedPrefs, setSharedPrefs}) {
    // const [prefs, setPrefs] = useState([])
    const [sportNum, setNum] = useState(0)

    function addPref(item) {
        //main function in explore page
        setSharedPrefs(item)
    }

    return (
        <>
            <div id="start" className="flex flex-col h-screen items-center justify-center">
                <div className="text-2xl lg:text-5xl animate-up-float">Let's Find <span className="font-bold text-orange-300 hover:animate-pulse">You</span> a <span className="font-bold text-orange-500 hover:animate-pulse">Shoe</span></div>
                <a href="#sports" className="pt-20">
                    <div className="fade-in">
                        <img src="/arrow-vector.jpg" className="rotate-180 hover:scale-105" width={100} height={100}></img>
                    </div>
                </a>
            </div>

            <div id="sports" className="flex flex-col h-screen items-center justify-center fade-in mx-5 text-center">
                
                <h2 className="text-3xl">
                    Let's start with <span className="font-bold text-orange-400 hover:animate-pulse">Activities.</span> 
                </h2>
                <h3>
                    Click <span className="font-bold text-orange-300 hover:animate-pulse">up to 2</span> sports or  you enjoy, or select <span className="font-bold text-orange-300 hover:animate-pulse">Casual</span>.
                </h3>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 pt-10">
                    <button onClick={() => addPref("Tennis")}>
                        <PreferenceBox item={"TENNIS"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Basketball")}>
                        <PreferenceBox item={"BASKETBALL"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Running")}>
                        <PreferenceBox item={"RUNNING"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Weightlifting")}>
                        <PreferenceBox item={"WEIGHTLIFTING"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Hiking")}>
                        <PreferenceBox item={"HIKING"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Biking")}>
                        <PreferenceBox item={"BIKING"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Baseball")}>
                        <PreferenceBox item={"BASEBALL"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Walking")} className="hidden lg:list-item" >
                        <PreferenceBox item={"WALKING"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Casual")}>
                        <PreferenceBox item={"CASUAL"}></PreferenceBox>
                    </button>
                </div>
                <a href="#feel" className="pt-10">
                    <div className="fade-in pb-10">
                        <img src="/arrow-vector.jpg" className="rotate-180 hover:scale-105" width={100} height={100}></img>
                    </div>
                </a>
            </div>

            <div id="feel" className="flex flex-col h-screen items-center justify-center fade-in mx-5 text-center pb-[11rem]">
                <a href="#sports" className="pt-5">
                    <div className="fade-in py-10">
                        <img src="/arrow-vector.jpg" className=" hover:scale-105" width={100} height={100}></img>
                    </div>
                </a>
                <h2 className="text-3xl">
                    Great! Now let's talk <span className="font-bold text-orange-400 hover:animate-pulse">Comfort</span> 
                </h2>
                <h3>
                    Click <span className="font-bold text-orange-300 hover:animate-pulse">up to 2</span> preferences you want to <span className="font-bold text-orange-300 hover:animate-pulse">prioritize</span>.
                </h3>
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 pt-10">
                    <button onClick={() => addPref("Durability")}>
                        <PreferenceBox item={"DURABILITY"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Power")}>
                        <PreferenceBox item={"POWER"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Traction")}>
                        <PreferenceBox item={"TRACTION"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Stability")}>
                        <PreferenceBox item={"STABILITY"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Lightweight")}>
                        <PreferenceBox item={"LIGHTWEIGHT"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Shock Absorption")}>
                        <PreferenceBox item={"SHOCK ABSORPTION"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Breathability")}>
                        <PreferenceBox item={"BREATHABILITY"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Heel Support")} className="hidden lg:list-item">
                        <PreferenceBox item={"HEEL SUPPORT"}></PreferenceBox>
                    </button>
                    <button onClick={() => addPref("Lateral Support")}>
                        <PreferenceBox item={"LATERAL SUPPORT"}></PreferenceBox>
                    </button>
                </div>
                <a href="#recommend" className="pt-10">
                    <div className="fade-in">
                        <img src="/arrow-vector.jpg" className="rotate-180 hover:scale-105" width={100} height={100}></img>
                    </div>
                </a>
            </div>
{/* 
            <div id="recommend" className="flex flex-col h-screen items-center justify-center fade-in mx-5 text-center">
                <div>Recommend Page</div>
            </div> */}
        </>
    )
}