const ShoeItem = (props) => {
    let sale_flag = false
    if(props.shoe.original_price != props.shoe.sale_price) {
        sale_flag = true;
    }
    
    return(

        <>
            <div className="lg:image-container relative overflow-hidden flex flex-col shadow-lg shadow-orange-400 rounded-lg bg-white w-400 h-400 hover:scale-105 ">
                <img src={props.shoe.image} width="400" height="400" className="rounded-t-lg" onClick={console.log("clicked", props.shoe.name)}></img>

                <div className="text-black lg:overlay transition-opacity duration-500 linear absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
                    <img src={props.shoe.image} width="150" height="150" className="hidden lg:list-item rounded-lg border-2 border-orange-400" onClick={console.log("clicked", props.shoe.name)}></img>
                    <h2 className="pt-5 text-center w-[20rem]">{props.shoe.name}</h2>
                    <p className="text-orange-500"> {sale_flag && <span className="font-bold">${props.shoe.sale_price}</span>} <span className={`${sale_flag ? 'line-through' : 'font-bold'}`}>${props.shoe.original_price}</span></p>
                    <a href={props.shoe.link} target="_blank" rel="noopener noreferrer" className=" mt-5 rounded-full w-[10rem] bg-orange-400 text-center hover:scale-105" >
                        {props.shoe.vendor}
                    </a>
                </div>
            </div>
        </>
    )
}

export default ShoeItem;