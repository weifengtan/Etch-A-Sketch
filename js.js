const grid_container = document.querySelector('.grid-container'); 
const button_container = document.querySelector('.button-container'); 
const confirm_button = document.querySelector('.size-container button');
const size_output = document.querySelector('.size-container input'); 
let size; 
let auto_str = ' auto'; 

function run() {
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
                    grid_div.setAttribute(
                        'style',
                        'background-color: black;'
                    )
            })
            grid_container.appendChild(grid_div); 
        }
    }
}



confirm_button.addEventListener('click', run);


