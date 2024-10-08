import { useState, useEffect } from "react"
import Loader from "./Loader";
import ShoeItem from "./ShoeItem";

export default function ShoeList({queryType, query}) {
    const [data, setData] = useState([])
    

    //Call to get all shoes
    async function fetchData() {
        let response;
        if(queryType && query) {
            const query_data = {
                queryClass: queryType,
                queryArg: query
            }
            response = await fetch(`https://kicks-app.onrender.com/record/`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(query_data)})
        }
        else {
            response = await fetch(`https://kicks-app.onrender.com/record/`)
        }
        
        if(!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            console.error(message);
            return
        }
        const shoes = await response.json();
        setData(shoes)
    }

    useEffect(() => {
        fetchData()
    }, [queryType, query])



    //Map shoe objects to list
    function shoeList() {
        if(data.length > 0) {
            return data.map((shoe) => {
                return (
                    <ShoeItem
                        shoe={shoe}
                        key={shoe._id}>
                    </ShoeItem>
                )
            })   
        } else {
            return (
                <div className="">
                    <Loader></Loader>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="grid  grid-cols-2 lg:grid-cols-4 gap-5 ">
                {shoeList()}
            </div>
        </div>
    )
}