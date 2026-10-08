import {memo} from 'react'

const FoodCard = memo(function FoodCard({item, onClick}){
    return(
        <>
            <div onClick={onClick} key={item.id} className="element" data-index={item.id}><div className="info"><h4>{item["name"]}</h4><p>{item["carbs_per_100g"]}g of carbs - 100g</p></div><div className="button"><button className="add-button" >Add</button></div></div>
        </>
    )
})

export default FoodCard;