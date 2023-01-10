const grid_container = document.querySelector('.grid-container'); 
const button_container = document.querySelector('.button-container'); 
const confirm_button = document.querySelector('.size-container button');
const size_output = document.querySelector('.size-container input'); 
const clear_button = document.querySelector('#clear-button'); 
const random_color_button = document.querySelector('#random-color-button'); 
const grayscale_button = document.querySelector('#grayscale-button'); 

let opacity = 0; 
let div_background_color; 
let window_computed; 
let RGB_first;
let RGB_second; 
let RGB_third;  
let option; 
let size; 
let auto_str = ' auto'; 

function run() {
    option = String(this.id); 
    grid_container.innerHTML = ''; 
    size = document.getElementById('size').value;
    if (size > 100){
        size = 100
    }
    console.log(size) 
    size = Number(size);  
    
    grid_container.style.gridTemplateColumns = `${auto_str.repeat(size)}`;
    for (let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const grid_div = document.createElement('div'); 
            grid_div.addEventListener('mouseenter', () => {
                // put if statement here
                console.log(`${option}`)
                if (option == "random-color-button"){
                    RGB_first = Math.floor(Math.random() * 256)
                    RGB_second = Math.floor(Math.random() * 256)
                    RGB_third = Math.floor(Math.random() * 256)
                    
                    grid_div.setAttribute(
                        'style',
                        `background-color: rgb(${RGB_first}, ${RGB_second}, ${RGB_third})`
                    )
                }
                else if (option == "confirm-button"){
                    grid_div.setAttribute(
                    'style',
                    'background-color: black'
                    )
                }
                else if (option == "grayscale-button"){
                    window_computed = window.getComputedStyle(grid_div);
                    div_background_color = window_computed.getPropertyValue('background-color'); 
                    opacity += 0.1; 
                    console.log(opacity); 
                    div_background_color = div_background_color.slice(0, div_background_color.length - 4)
                    div_background_color = `${div_background_color}, ${opacity}`; 
                    console.log(div_background_color); 
                    grid_div.setAttribute(
                        'style',
                        `background-color: ${div_background_color};`
                    )
                }
            })
            grid_container.appendChild(grid_div); 
        }
    }
}

function clear() {
    grid_container.innerHTML = ''; 
}

random_color_button.addEventListener('click', run); 
confirm_button.addEventListener('click', run);
clear_button.addEventListener('click', clear); 
grayscale_button.addEventListener('click', run)


