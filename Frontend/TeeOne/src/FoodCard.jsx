const FoodCard = function FoodCard({item, onClick}){
    return(
        <>
<<<<<<< HEAD
            <div onClick={onClick} key={item.id} className="element" data-index={item.id}><div className="info"><h4>{item["name"]}</h4><p>{item["carbs_per_100g"]}g of carbs - 100g</p></div><div className="button"><button className="add-button" >Add</button></div></div>
=======
            <div onClick={onClick} className="element"><div className="info"><h4>{item["name"]}</h4><p>{item["carbs_per_100g"]}g of carbs - 100g</p></div><div className="button"><button className="add-button" >Add</button></div></div>
>>>>>>> 4a7aecb64112c3f76a499eb90b88caf008dd7b05
        </>
    )
}

export default FoodCard;