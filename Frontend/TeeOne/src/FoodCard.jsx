import {memo} from "react"

function FoodCard({item, onClick}){
    return(
        <>  
            <div onClick={() => onClick(item)} className="element"><div className="info"><h4>{item["name"]}</h4><p>{item["carbs_per_100g"]}g of carbs - 100g</p></div><div className="button"><button className="add-button" >Add</button></div></div>
        </>
    )
}

export default memo(FoodCard);