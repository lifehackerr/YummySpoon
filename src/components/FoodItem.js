const FoodItem = ({items,Description}) =>{
    //const {image,name,cousins,stars} = restaurant; // object des
    return(
        <div className="w-52 p-2 m-2 shadow-lg bg-pink-100">
            <h2 className="font-bold">{items}</h2>
            <h2>{Description}</h2>
            
        </div>
    )
}

export default FoodItem