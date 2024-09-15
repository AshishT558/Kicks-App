import ExplorePageIntro from "../components/ExplorePageIntro"
import Recommendation from "../components/Recommendation"
import { useState } from "react"

export default function ExplorePage() {
    const [sharedPrefs, setSharedPrefs] = useState([])

    function addPref(item) {
        setSharedPrefs(prevPrefs => {
            // Check if the item is already in the list
            const isItemInPrefs = prevPrefs.includes(item);
    
            // If it is, filter it out (remove it), otherwise add it
            const updatedPrefs = isItemInPrefs
                ? prevPrefs.filter(pref => pref !== item)
                : [...prevPrefs, item];
    
            console.log(updatedPrefs);
            return updatedPrefs;
        });
    }

    return (
        <div className="flex flex-col">
            <ExplorePageIntro sharedPrefs={sharedPrefs} setSharedPrefs={addPref}></ExplorePageIntro>
            <Recommendation sharedPrefs={sharedPrefs}></Recommendation>
        </div>
    )
}