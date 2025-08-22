import { useState, useEffect } from "react"
import * as React from "react"
import ShoeItem from "./ShoeItem"
import Loader from "./Loader"

export default function Recommendation({ sharedPrefs }) {
    const [llm_rec, setLLMRec] = useState("")
    const [user_input, setInput] = useState("")
    const [exploredShoe, setExplored] = useState([])
    const [startLoad, setStartLoad] = useState(false)
    const [loaded, setLoaded] = useState(false)
    
    //Call to get all shoes
    async function fetchRecommendation() {
        const encodedPrefs = encodeURIComponent(sharedPrefs.join(','))
        const response = await fetch(`https://kicks-app.onrender.com/inference/${encodedPrefs}`)
        if(!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return
        }
        const recommendation = await response.text();
        setLLMRec(recommendation)
        setPrefs([])
    }

    async function processRecommendation(text) {
        setStartLoad(true)
        console.log(`${text} requested`)
        const encodedShoe = encodeURIComponent(text)
        //UPDATE: routing to direct sites
        const errorText = "PRICE CHECKER PERFORMANCE CURRENTLY LIMITED TO UNDERARMOUR :( Click 'Explore' on the Under Armour option or 'OK' to check out this option on a seller site! "
        let link = ""
        if (text.includes("Nike")) {
            link = `https://www.nike.com/w?q=${encodedShoe}&vst=${encodedShoe}`;
        } else if (text.includes("Skechers")) {
            link = `https://www.skechers.com/search/?q=${encodedShoe}`;
        } else if (text.includes("Adidas")) {
            link = `https://www.adidas.com/us/search?q=${encodedShoe}`;
        }
        
        // If NOT Under Armour → redirect to seller site
        if (!text.toLowerCase().includes("under armour")) {
            if (window.confirm(errorText)) {
                window.location.href = link;
            }
            setStartLoad(false);
            return; // stop here
        }
        const shoe_response = await fetch(`https://kicks-app.onrender.com/inference/get_shoe/${encodedShoe}`)
        if(!shoe_response.ok) {
            const message = `An error occurred: ${shoe_response.statusText}`;
            console.error(message);
        }
        const shoeDetails = await shoe_response.json()
        console.log("All API Calls success:", shoeDetails)
        setExplored(shoeDetails)
        console.log(exploredShoe.length)
        setStartLoad(false)
        setLoaded(true)
        
    }

    function formatRecommendation(text) {
        const keywords = ["Nike", "Skechers", "Adidas", "Under Armour"];
    
        return text.split('\n').map((line, index) => {
            const containsKeyword = keywords.some(keyword => line.includes(keyword));
            
            return (
                <React.Fragment className="" key={index}>
                    {containsKeyword ? (
                    <div className="flex flex-col bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                        <span className="text-lg">
                            {line} 
                        </span>
                        <button className="text-white w-[20rem] h-10 rounded-full ring-2 ring-orange-500 hover:ring-orange-600 mt-5" onClick={() => processRecommendation(line)}>
                        Explore &rarr;
                        </button>
                    </div>
                        
                    ) : (
                        <br /> // Render just a line break if the line does not contain the keywords
                    )}
                </React.Fragment>
            );
        });
    }

        //Map shoe objects to list
    function shoeList(shoelist) {
        exploredShoe.sort((a, b) => b.Score - a.Score);
        return exploredShoe.map((shoe) => {
            return (
                <ShoeItem
                    shoe={shoe}
                    key={shoe._id}>
                </ShoeItem>
            )
        })
    }
    
    function mapPrefs(prefs) {
        return prefs.map((pref) => {
            return (
                <div className="flex flex-col rounded-full w-[10rem] h-10 bg-orange-400 text-center justify-center ">
                    {pref}
                </div>
            )
        })
    }

    return (
        <div id="recommend" className="flex flex-col items-center justify-center fade-in mx-5 text-center py-[10rem] lg:py-[20rem]">
            {/* <a href="#feel" className="pb-20">
                <div className="fade-in">
                    <img src="/arrow-vector.jpg" className=" hover:scale-105" width={100} height={100}></img>
                </div>
            </a> */}
            <h1 className="text-5xl animate-up-float">Nice Work! Here's what you <span className="text-orange-500">need:</span></h1>
            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 mt-5 fade-in">{mapPrefs(sharedPrefs)}</div>
            <a className="mt-5 hover:text-orange-400" href="#sports">Edit Preferences</a>
            <button className="flex flex-col items-center justify-center w-[20rem] h-10 bg-black rounded-full lg:mb-10 ring-2 ring-orange-500 hover:ring-orange-600 hover:scale-105 mt-20" 
            onClick={fetchRecommendation}>Get Recommendation </button>
            <div className="lg:hidden">{startLoad && <Loader className="mt-5"></Loader>}</div>
            <div className="flex lg:flex-row flex-col gap-y-10 text-center lg:gap-x-10 lg:mt-10">{formatRecommendation(llm_rec)}</div>
            <div className="invisible lg:visible">{startLoad && <Loader className="mt-5"></Loader>}</div>
            <div className="grid lg:grid-cols-4 mt-20 gap-5 ">
                {loaded && shoeList()}
            </div>
        </div>
    ) 
}