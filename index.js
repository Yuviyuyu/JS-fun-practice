// own code
// to eventlistner to all button
for (i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function()
    { 
        // cover the click
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
    }
);}

// cover the keypress
document.addEventListener('keypress', function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case 'w':
            tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
        case 'd':
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;      
        default:
            console.log('wrong key!');
            break;
    }
}

function makeAnimation(currentKey) {
    var key = document.querySelector("." + currentKey);
    key.classList.add("pressed");
    setTimeout(function(){key.classList.remove("pressed");}, 100);  
}

// alternative instead of for loop
// document.querySelectorAll("button").forEach(
//     function(elem)
//     {elem.addEventListener
//         ("click", buttonClick);}
// );

