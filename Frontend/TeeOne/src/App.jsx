import { useState, useMemo } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import food_data from './food.json'
import FoodCard from './FoodCard'

if(!document.documentElement.getAttribute('data-theme')){
  document.documentElement.setAttribute('data-theme', 'dark')
}
document.documentElement.setAttribute('data-theme', localStorage.getItem('stored_theme'))

function App() {

  const [items, SetItems] = useState([])

  const AddItem = (item) => {
    if(items.some(element => element["id"] === item["id"])){
      return
    }
    else{
      SetRecall(true)
      let new_item = {...item, "current_weight" : 100}
      SetItems([...items, new_item])
    }
  }

  const cards = useMemo(() => food_data.map(item => {
    return <FoodCard key={item["id"]} item={item} onClick={() => AddItem(item)}/>
  }), [AddItem])

  const RemoveItem = (item) => {
    SetItems(items.filter(element => element["id"] != item["id"]))
  }

  const [current_theme, ChangeTheme] = useState(localStorage.getItem('stored_theme'))
  const SwitchTheme = (new_theme => {
    ChangeTheme(new_theme)
    localStorage.setItem('stored_theme', new_theme)
    document.documentElement.setAttribute('data-theme', new_theme)
  })

  const total_carbs = calculate_total(items)
  const [goal, SetGoald] = useState('')
  const [insuline_units, SetUnits] = useState('')
  const [extra_units, SetExtraUnits] = useState('')
  const [query, SetQuery] = useState('')
  const [total_units, SetTotalUnits] = useState(0)

  const [recal, SetRecall] = useState(true)

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="left-panel">
            <h3>Search - <span id="result-count">{food_data.length}</span> result(s)</h3>
              <input type="text" placeholder="Bread, white - 100g" id="search-bar" onChange={() => SetQuery()}/>
            <div className="listing" id="listing">
              {cards.map(item =>(
                item
              ))}
            </div>
          </div>
          <div className="right-panel">
            <div className="top-panel">
              <h2>Total -  <span id="total">{total_carbs.toFixed(1)}</span></h2>
              <div className="bar-track">
                <div className="bar-fill" id="progress-bar" style={{width : (goal ? (total_carbs < goal ? (total_carbs / goal) * 100 : 100) : 0) + "%"}}></div>
              </div>
              <div className="cart" id="cart">
                {items.map(element => (
                  <div className="item" key={element["id"]}><div className="info" id="info"><h4>{element["name"]}</h4><p>{element['carbs_per_100g']}g of carbs - 100g</p></div><div className="remove"><input type="number" min="0" max="100000" className="carbs-input" value={element["current_weight"]} onChange={event =>{
                      SetItems(items.map(object => object["id"] === element["id"] ? {...object, "current_weight" : event.target.value} : object))
                  }}/><button className="remove-button" onClick={() => RemoveItem(element)}><svg width="10" height="10" viewBox="0 0 14 14"><line x1="1" y1="1" x2="13" y2="13" stroke="white" strokeWidth="2"/><line x1="13" y1="1" x2="1" y2="13" stroke="white" strokeWidth="2"/></svg></button></div></div>
                ))}
              </div>
            </div>
            <div className="bottom-panel">
              <div className="additionnal-info">
                <h4>Goal</h4>
                <input type="number" min="0" value={goal} id="goal" onChange={event => {
                  SetGoald(event.target. value)
                  SetRecall(true)
                }}/>
              </div>
              <div className="additionnal-info">
                <h4>Insuline Units (per 10g)</h4>
                <input type="number" min="0" id="dosage" value={insuline_units} onChange={event => {
                  SetUnits(event.target.value)
                  SetRecall(true)
                }}/>
              </div>
              <div className="additionnal-info">
                <h4>Extra Units</h4>
                <input type="number" min="0" value={extra_units} id="extra" onChange={event => {
                  SetExtraUnits(event.target.value)
                  SetRecall(true)
                  }}/>
              </div>
              <button id="calculate" onClick={() => {
                if(insuline_units > 0){
                  SetTotalUnits((total_carbs / (Number(insuline_units) * 10)) + Number(extra_units))
                  SetRecall(false)
                }
              }}>Calculate</button>
            </div>
            <div className="result-panel">
              <div className={"message" + (recal ? '' : '-disabled')}>
                <h4>Need To Recalculate</h4>
              </div>
              <div className={"overlay" + (recal ? '' : '-disabled')}>
                
              </div>
              <div className="result"><span id="result">{total_units.toFixed(1)}</span><h3> -  Unit(s)</h3></div>
            </div>
          </div>
        </div>
      </div>
      <div className="alert-module" id="warning">
        <h2>Warning</h2>
        <p>This item has already been added to the list.</p>
      </div>
      <div className="alert-module" id="error">
        <h2>Warning</h2>
        <p>Your insuline dosage must be greater than 0.</p>
      </div>
      <button className="theme-button" onClick={() => SwitchTheme(current_theme === 'light' ? 'dark' : 'light')}></button>
    </>
  )
}

function calculate_total(items){
  let sum = 0
  for(let i = 0; i < items.length; i++){
    sum += items[i]["carbs_per_100g"] * (items[i]["current_weight"] / 100)
  }

  return sum
}

export default App
