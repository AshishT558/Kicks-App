import { useState, useEffect } from "react"

export default function Recommendation(params) {
    const [llm_rec, setLLMRec] = useState("")
    const [user_input, setInput] = useState("")
    const [prefs, setPrefs] = useState([])

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

    function processRecommendation(text) {
        
    }

    function formatRecommendation(text) {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    }

    return (
        <div>
            <h1>Recommendation</h1>
            <input type="text" placeholder="Preference" onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => setPrefs([...prefs, user_input])}>Add Preference</button>
            <button onClick={fetchRecommendation}>Get Recommendation</button>
            <div>
                <h3>Current Prefs: </h3>
                <div>{prefs}</div>
            </div>
            <div>
                <h3> Recommendation: </h3>
                {formatRecommendation(llm_rec)}
            </div>
        </div>
    )
}