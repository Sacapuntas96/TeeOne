let total_carbs = 0;
let carbs_goal = 0;
let dosage = 0;
let extra_units = 0;

let items = [];
let len = 0;

let dark_theme_enabled = true;

let current_color = "white";

// Allows to change theme
let theme_button = document.querySelector('.theme-button');
theme_button.addEventListener('click', () =>{
  let stylesheet = document.getElementById('theme');
  if(dark_theme_enabled)
  {
    stylesheet.href = '../style/light.css';
    dark_theme_enabled = false;
    current_color = "black";
  }
  else
  {
    stylesheet.href = '../style/dark.css';
    dark_theme_enabled = true;
    current_color = "white";
  }
})

function floatting_point_reset(){
  if(Math.abs(total_carbs) < 0.01)
  {
    total_carbs = 0;
    document.getElementById('total').textContent = 0;
  }
}

// Animation of the total change
function animateNumber(element, start, end, duration, precision) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = Math.min((timestamp - startTime) / duration, 1);
    let current = start + (end - start) * progress;
    element.textContent = current.toFixed(precision);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Adds all the elements to the listing
for (let i = 0; i < Object.keys(foods).length; i++) {
  let example = `<div class="element" data-index="${i}"><div class="info"><h4>${foods[i]["name"]}</h4><p>${foods[i]["carbs_per_100g"]}g of carbs - 100g</p></div><div class="button"><button class="add-button" >Add</button></div></div>`;
  document.getElementById("listing").insertAdjacentHTML("beforeend", example);
}

document.getElementById("goal").value = carbs_goal = 0;

document.getElementById("goal").addEventListener("input", () => {
  carbs_goal = Number(document.getElementById("goal").value);
  calculate_pourcentage();
});

// Allows add buttons to append elements to the list
document.querySelectorAll(".element").forEach(btn => {
  btn.addEventListener("click", () => {

    let existant = false;
    let index = btn.dataset.index;

    // Checks if the element is already in the list
    for(let j = 0; j < len; j++){
      if(items[j] == foods[index]["name"]){
        existant = true;
        break;
      }
    }
    
    //  Case where the element isn't in the list yet
    if(!existant)
    {
      let element = `<div class="item" data-index="${index}"><div class="info" id="info"><h4>${foods[index]['name']}</h4><p>${foods[index]['carbs_per_100g']}g of carbs - 100g</p></div><div class="remove"><input type="number" min="0" max="100000" data-index="${index}" class="carbs-input" value="100"><button class="remove-button" data-index=${index}><svg width="10" height="10" viewBox="0 0 14 14"><line x1="1" y1="1" x2="13" y2="13" stroke="white" stroke-width="2"/><line x1="13" y1="1" x2="1" y2="13" stroke="white" stroke-width="2"/></svg></button></div></div>`;
      let oldValue = total_carbs;
      

      items.push(foods[index]["name"]);
      len++;

      document.querySelector('.overlay').style.opacity = 0.8;
      document.querySelector('.message').style.opacity = 1;

      total_carbs += foods[index]["carbs_per_100g"];
      
      animateNumber(document.getElementById('total'), oldValue, total_carbs, 400, 1);
      document.getElementById('cart').insertAdjacentHTML('beforeend', element);

      // Removal of an item
      let remove_button = document.querySelector(`.remove-button[data-index="${index}"]`);
      remove_button.addEventListener('click', () =>
      {
        document.querySelector('.overlay').style.opacity = 0.8;
        document.querySelector('.message').style.opacity = 1;
        for(let i = 0; i < len; i++)
        {
          if(items[i] == foods[index]["name"])
          {
            oldValue = total_carbs;
            total_carbs -= (Number(document.querySelector(`.carbs-input[data-index="${index}"]`).value) / 100) * foods[index]["carbs_per_100g"];
            items.splice(i, 1);
            len--;

            animateNumber(document.getElementById('total'), oldValue, total_carbs, 400, 1);
            document.querySelector(`.item[data-index="${index}"]`).remove();
            
            break;
          }
        }

        calculate_pourcentage();

        // Avoids floatting point precision issue (example : total_carbs = - 0.0s)
        floatting_point_reset();
    })
      
      let current_weight;
      let weight_input = document.querySelector(`.carbs-input[data-index="${index}"]`);
      
      current_weight = (Number(weight_input.value) / 100) * foods[index]["carbs_per_100g"];  
      // Allows to edit the weight of the selected food
      weight_input.addEventListener("input", () => 
      {
        if(Number(weight_input.value) > 100000){
          weight_input.value = 100000;
        }
        oldValue = total_carbs;
        
        document.querySelector('.overlay').style.opacity = 0.8;
        document.querySelector('.message').style.opacity = 1;
        
        total_carbs -= current_weight;
        current_weight = (Number(weight_input.value) / 100) * foods[index]["carbs_per_100g"]
        total_carbs += current_weight;

        animateNumber(document.getElementById('total'), oldValue, total_carbs, 400, 1);
        calculate_pourcentage();
        floatting_point_reset();
      })

      calculate_pourcentage();
      floatting_point_reset();
    }
    else{
      let specified_item = document.querySelector(`.item[data-index="${index}"]`);

      // Highlights the already added element
      specified_item.style.backgroundColor = "var(--grey-6)";
      setTimeout(() => {
        specified_item.style.backgroundColor = "transparent";
      }, 1000);

      specified_item.scrollIntoView(
        {
          behavior: "smooth",
          block: "nearest"
        }
      );

      // Display of the error message
      document.getElementById('warning').style.opacity = 1;
      document.getElementById('warning').style.top = 85 + "%";
      setTimeout(() => {
        document.getElementById('warning').style.opacity = 0;
        document.getElementById('warning').style.top = 100 + "%";
      }, 3000);
    }
  });


  floatting_point_reset();
});

// Allows to calculate the progress bar's visual progression
function calculate_pourcentage()
{
  let progress_bar = document.getElementById("progress-bar");
  let pourcentage;

  // Allows the progress bar to track color and value
  if(carbs_goal > 0){
    pourcentage = (total_carbs / carbs_goal) * 100;
    if(pourcentage > 100){
      pourcentage = 100;
    } 
  }
  else{
    pourcentage = 0;
  }

  progress_bar.style.width = pourcentage + "%";

  if(pourcentage < 33)
  {
    progress_bar.style.backgroundColor = "#ff2b2b";
  }
  else if(pourcentage < 66)
  {
    progress_bar.style.backgroundColor = "#ffdf2b";
  }
  else
  {
    progress_bar.style.backgroundColor = "#39ff2b";
  }
}

// Fetches the different additionnal values
document.getElementById('dosage').addEventListener('input', () =>{
  document.querySelector('.overlay').style.opacity = 0.8;
  document.querySelector('.message').style.opacity = 1;
  dosage = Number(document.getElementById('dosage').value);
})

document.getElementById('extra').addEventListener('input', () =>{
  document.querySelector('.overlay').style.opacity = 0.8;
  document.querySelector('.message').style.opacity = 1;
  extra_units = Number(document.getElementById('extra').value);
})

// Calculates the total insuline units to inject
document.getElementById('calculate').addEventListener('click', () =>{
  let result = document.getElementById('result');

  if(dosage > 0){
    document.querySelector('.overlay').style.opacity = 0;
    document.querySelector('.message').style.opacity = 0;

    let value = (total_carbs / (dosage * 10) + extra_units).toFixed(1);

    animateNumber(result, Number(document.getElementById('result').textContent), value, 400, 1);
  }
  else if(dosage == 0 && extra_units != 0){
    document.querySelector('.overlay').style.opacity = 0;
    document.querySelector('.message').style.opacity = 0;

    let value = (extra_units).toFixed(1);

    animateNumber(result, Number(document.getElementById('result').textContent), value, 400, 1);
  }
  else{
    document.getElementById('error').style.opacity = 1;
    document.getElementById('error').style.top = 85 + "%";

    setTimeout(() => {
    document.getElementById('error').style.opacity = 0;
      document.getElementById('error').style.top = 100 + "%";
    }, 3000);
  }
})

// Allows the user to search a certain element
document.getElementById('result-count').textContent = Object.keys(foods).length;
document.getElementById('search-bar').addEventListener('input', () =>{
  let result_count = 0;
  let search = document.getElementById('search-bar').value.toLowerCase();

  document.querySelectorAll('.element').forEach(el => {
    let name = el.querySelector('h4').textContent.toLowerCase();
    if(name.includes(search)){
      el.style.display = "flex";
      result_count++;
    }
    else{
      el.style.display = "none";
    }
  })

  document.getElementById('result-count').textContent = result_count;
})
