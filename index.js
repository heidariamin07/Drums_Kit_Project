let numbeOfDrumButtons = document.querySelectorAll(".drum").length;
for(i = 0; i < numbeOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        let buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;



        }
        buttonAnimation(buttonInnerHTML);
    })



}

document.addEventListener("keypress", function (event){
    switch (event.key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;



    }
    buttonAnimation(event.key)
});

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},100);


}