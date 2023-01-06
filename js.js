const grid_container = document.querySelector('.grid-container'); 
let size = 0;
size = 16;  
let auto_str = ' auto'; 
grid_container.style.gridTemplateColumns = `${auto_str.repeat(size)}`;




for (let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        const grid_div = document.createElement('div'); 
        grid_div.setAttribute(
            'style',
            'border: 4px red solid;'
        )
        grid_div.textContent = "1"; 
        grid_container.appendChild(grid_div); 
    }
}