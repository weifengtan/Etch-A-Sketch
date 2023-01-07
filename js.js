const grid_container = document.querySelector('.grid-container'); 
const button_container = document.querySelector('.button-container'); 
const confirm_button = document.querySelector('.size-container button');

let size; 
let auto_str = ' auto'; 


confirm_button.addEventListener('click', () => {
    size = document.getElementById('size').value;
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
})

/*
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
        grid_div.setAttribute(
            'style',
            'border: 4px solid red'
        )
        grid_container.appendChild(grid_div); 
    }
}
*/