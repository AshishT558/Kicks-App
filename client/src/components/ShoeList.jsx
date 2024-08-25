import { useState, useEffect } from "react"

const ShoeItem = (props) => {
    return(
        <tr>
            <td>
                {props.shoe.name}
            </td>
            <td>
                {props.shoe.sale_price}
            </td>
            <td>
                {props.shoe.link}
            </td>
            <td>
                {props.shoe.Score}
            </td>
            <td>
                <img src={props.shoe.image}>
                </img>
            </td>
        </tr>
    )
}

export default function ShoeList() {
    const [data, setData] = useState([])

    //Call to get all shoes
    async function fetchData() {
        const response = await fetch(`http://localhost:5050/record/`)
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
    }, [])

    //Map shoe objects to list
    function shoeList() {
        return data.map((shoe) => {
            return (
                <ShoeItem
                    shoe={shoe}
                    key={shoe._id}>
                </ShoeItem>
            )
        })
    }

    return (
        <div>
            <h1>Shoes</h1>
            <button onClick={fetchData}>Refresh</button>
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
    )
}