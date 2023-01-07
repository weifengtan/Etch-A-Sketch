const grid_container = document.querySelector('.grid-container'); 
const button_container = document.querySelector('.button-container'); 
const confirm_button = document.querySelector('.size-container button');
const size_output = document.querySelector('.size-container input'); 
const clear_button = document.querySelector('#clear-button'); 
const random_color_button = document.querySelector('#random-color-button'); 
let RGB_first;
let RGB_second; 
let RGB_third;  
let option; 
let size; 
let auto_str = ' auto'; 

function run() {
    option = this.id; 
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
            grid_div.addEventListener('mouseenter', (option) => {
                // put if statement here
                console.log(`${option}`)
                if (option == "random-color-button"){
                    RGB_first = 255
                    RGB_second = 0
                    RGB_third = 0

                    grid_div.setAttribute(
                        'style',
                        'background-color: red'
                    )
                }
                grid_div.setAttribute(
                    'style',
                    'background-color: black'
                )
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


