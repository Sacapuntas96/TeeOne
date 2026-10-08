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

let items = []

function App() {
  const [current_theme, ChangeTheme] = useState(localStorage.getItem('stored_theme'))
  const SwitchTheme = (new_theme => {
    ChangeTheme(new_theme)
    localStorage.setItem('stored_theme', new_theme)
    document.documentElement.setAttribute('data-theme', new_theme)
  })
  const [total_carbs, SetTotalCarbs] = useState(0)
  const [goal, SetGoald] = useState(0)
  const [insuline_units, SetUnits] = useState(0)
  const [extra_units, SetExtraUnits] = useState(0)
  const [query, SetQuery] = useState('')
  const [total_units, SetTotalUnits] = useState(0)

  const [recal, SetRecale] = useState(true)

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="left-panel">
            <h3>Search - <span id="result-count">{food_data.length}</span> result(s)</h3>
              <input type="text" placeholder="Bread, white - 100g" id="search-bar" onChange={() => SetQuery()}/>
            <div className="listing" id="listing">
              {food_data.map(item =>(
                <FoodCard item={item} key={item.id} onClick={() => {if(!is_present(item.id)){
                    if(!(Object.keys(items).includes(item.id))){
                      let element = {}
                      element["id"] = item.id
                      element["carbs_per_100g"] = item.carbs_per_100g
                      SetTotalCarbs(total_carbs + item.carbs_per_100g)
                      SetRecale(true)
                      items.push(element)
                    }
                    console.log("test")
                    }}}/>
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
                  <div className="element" key={element.id}><div className="info"><h4>{element.name}</h4><p>{element.carbs_per_100g}g of carbs - 100g</p></div><div className="button"><button className="add-button" >Add</button></div></div>
                ))}
              </div>
            </div>
            <div className="bottom-panel">
              <div className="additionnal-info">
                <h4>Goal</h4>
                <input type="number" min="0" value={goal} id="goal" onChange={event => {
                  SetGoald(Number(event.target. value))
                  SetRecale(true)
                }}/>
              </div>
              <div className="additionnal-info">
                <h4>Insuline Units (per 10g)</h4>
                <input type="number" min="0" id="dosage" value={insuline_units} onChange={event => {
                  SetUnits(Number(event.target.value))
                  SetRecale(true)
                }}/>
              </div>
              <div className="additionnal-info">
                <h4>Extra Units</h4>
                <input type="number" min="0" value={extra_units} id="extra" onChange={event => {
                  SetExtraUnits(Number(event.target.value))
                  SetRecale(true)
                  }}/>
              </div>
              <button id="calculate" onClick={() => {
                if(insuline_units > 0){
                  SetTotalUnits((total_carbs / insuline_units) + extra_units)
                  SetRecale(false)
                }
              }}>Calculate</button>
            </div>
            <div className="result-panel">
              <div className={"message" + (recal ? '' : '-disabled')}>
                <h4>Need To Recalculate</h4>
              </div>
              <div className={"overlay" + (recal ? '' : '-disabled')}>
                
              </div>
              <div className="result"><span id="result">{total_units}</span><h3> -  Unit(s)</h3></div>
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

function is_present(id){
  return Object.keys(items).includes(id)
}

export default App
