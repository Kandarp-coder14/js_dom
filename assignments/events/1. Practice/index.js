//Select the section with an id of container without using querySelector.
let container = document.getElementById('container');


//Select the section with an id of container using querySelector.
container = document.querySelector('#container');

//Select all of the list items with a class of "second".

let listSecond = document.querySelectorAll('.second');

//Select a list item with a class of third, but only the list item inside of the ol tag.
let listThird = document.querySelectorAll('.third');


//Give the section with an id of container the text "Hello!".
container.append('Hello!');


//Add the class main to the div with a class of footer.
let footer = document.querySelector('.footer');

footer.classList.add('main');


//Remove the class main on the div with a class of footer.
document.querySelector('.footer').classList.remove('main');

//Create a new li element.
let li = document.createElement('li');



//Give the li the text "four".
li.innerText = '4';


//Append the li to the ul element.
document.body.querySelector('ul').appendChild(li);



//Loop over all of the list inside the ol tag and give them a background color of "green".
let ol = document.body.querySelectorAll('ol li');

[...ol].forEach( (elm) => elm.style.background = 'green');


//Remove the div with a class of footer.
document.body.removeChild( footer );