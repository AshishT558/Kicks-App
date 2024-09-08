const ShoeItem = (props) => {
    return(
        <div className="flex flex-col shadow-lg shadow-orange-400 rounded-lg bg-white w-400 h-400 hover:scale-105">
            <img src={props.shoe.image} width="400" height="400" className=" object-cover rounded-lg" onClick={console.log("clicked", props.shoe.name)}></img>


            <a href={props.shoe.link} target="_blank" rel="noopener noreferrer" >
                
            </a>
        </div>



        // <tr>
        //     <td>
        //         {props.shoe.name}
        //     </td>
        //     <td>
        //         {props.shoe.sale_price}
        //     </td>
        //     <td>
        //         {props.shoe.link}
        //     </td>
        //     <td>
        //         {props.shoe.Score}
        //     </td>
        //     <td>
        //         <img src={props.shoe.image}>
        //         </img>
        //     </td>
        // </tr>
    )
}

export default ShoeItem;