// Random array
let random = [];

// Choose color function
let chooseColor = () => {
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
}


// HandleClick function
let handleClick = () => {
    chooseColor();
    document.body.style.backgroundColor = `rgb(${random[0]}, ${random[1]}, ${random[2]})`;
    random = [];
}

// Event listener
document.addEventListener('click', handleClick);