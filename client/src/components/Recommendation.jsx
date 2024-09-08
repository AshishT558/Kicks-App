import { useState, useEffect } from "react"
import * as React from "react"
import ShoeItem from "./ShoeItem"

export default function Recommendation(params) {
    const [llm_rec, setLLMRec] = useState("")
    const [user_input, setInput] = useState("")
    const [prefs, setPrefs] = useState([])
    const [exploredShoe, setExplored] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    //Call to get all shoes
    async function fetchRecommendation() {
        const encodedPrefs = encodeURIComponent(prefs.join(','))
        const response = await fetch(`http://localhost:5050/inference/${encodedPrefs}`)
        if(!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return
        }
        const recommendation = await response.json();
        setLLMRec(recommendation[0].generated_text)
        setPrefs([])
    }

    async function processRecommendation(text) {
        console.log(`${text} requested`)
        const encodedShoe = encodeURIComponent(text)
        const shoe_response = await fetch(`http://localhost:5050/inference/get_shoe/${encodedShoe}`)
        if(!shoe_response.ok) {
            const message = `An error occurred: ${shoe_response.statusText}`;
            console.error(message);
            return
        }
        const shoeDetails = await shoe_response.json()
        console.log("All API Calls success:", shoeDetails)
        setExplored(shoeDetails)
        console.log(exploredShoe.length)
        setLoaded(true)
        
    }

    function formatRecommendation(text) {
        const keywords = ["Nike", "Skechers", "Adidas", "Under Armour"];
    
        return text.split('\n').map((line, index) => {
            const containsKeyword = keywords.some(keyword => line.includes(keyword));
            
            return (
                <React.Fragment key={index}>
                    {containsKeyword ? (
                        <span>
                            {line} 
                            <span className="" onClick={() => processRecommendation(line)}>
                                Explore &rarr;
                            </span>
                            <br />
                        </span>
                    ) : (
                        <br /> // Render just a line break if the line does not contain the keywords
                    )}
                </React.Fragment>
            );
        });
    }

        //Map shoe objects to list
    function shoeList(shoelist) {
        return exploredShoe.map((shoe) => {
            return (
                <ShoeItem
                    shoe={shoe}
                    key={shoe._id}>
                </ShoeItem>
            )
        })
    }
    
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1>What are you looking for?</h1>
            
        </div>
    )
    
    if(loaded == false) {
        return (
            <div>
                <h1>Recommendation</h1>
                <input type="text"  placeholder="Preference" onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={() => setPrefs([...prefs, user_input])}>Add Preference</button>
                <button onClick={fetchRecommendation}>Get Recommendation</button>
                <div>
                    <h3>Current Prefs: </h3>
                    <div>{prefs}</div>
                </div>
                <div>
                    <h3> Recommendation: </h3>
                    {formatRecommendation(llm_rec)}

                    <h2>Search results: </h2>
                    <div>
                        No Shoe selected yet
                    </div>
                </div>
            </div>
        )
    }
    else if(loaded == true) {
        return (
            <div>
                <h1>Recommendation</h1>
                <input type="text"  placeholder="Preference" onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={() => setPrefs([...prefs, user_input])}>Add Preference</button>
                <button onClick={fetchRecommendation}>Get Recommendation</button>
                <div>
                    <h3>Current Prefs: </h3>
                    <div>{prefs}</div>
                </div>
                <div>
                    <h3> Recommendation: </h3>
                    {formatRecommendation(llm_rec)}
    
                    <h2>Search results: </h2>
                    <div>
                        <div>
                            <h1>Shoes</h1>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Price
                                            </th>
                                            <th>
                                                Link
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shoeList()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}