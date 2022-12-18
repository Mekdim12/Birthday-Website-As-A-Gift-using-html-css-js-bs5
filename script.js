// alert(" Hello Birthday Girl ")




currentAge = 21;
console.log(Date.now())





function _to_call_the_first_modal(){

    var  button_hidden= document.getElementById('myInput')
    button_hidden.click()

}


let videofeeed = document.querySelector("#videofeed")
let snapbutton = document.querySelector("#takingsnap")
let imageviewercanavas = document.querySelector("#canvas")
let stream_ = null;


snapbutton.addEventListener('click',()=>{
    ToggelerafterimageTaken()
});


function initiateCamera(){

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
            stream_ = stream 
            videofeeed.srcObject = stream;
            videofeeed.play();
        });

    }   


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
}


function ToggelerafterimageTaken(){
    let mainmessage = document.querySelector("#messageHolder")
    let nextButton = document.querySelector("#nextFromImage")
    let videoSpotHolder = document.querySelector("#videoStreaHolder")
    let cameraButton = document.querySelector("#cameraTakinButton")
    let canvasHolder = document.querySelector("#canvasHolder")

    mainmessage.style.visibility = "visible";
    nextButton.style.visibility = "visible";
    canvasHolder.style.visibility = "visible";
    videoSpotHolder.style.display = "none";
    cameraButton.style.display = "none";

    let context = imageviewercanavas.getContext("2d")
    context.drawImage(videofeeed,0, 0, 500, 250);

    stream_.getTracks() // get all tracks from the MediaStream
    .forEach( track => track.stop() ); // stop each of them    
}





let utubdevideholder  = document.querySelector("#utubevideholder")
let lottivideoholder =  document.querySelector("#lottieholderballon")
let lastbuttonfromthemessagetomain = document.querySelector("#lastbuttonfromthemessagetomain")
let forchangingitems = document.querySelector("#forchangingitems")
forchangingitems.addEventListener('click',()=>{

    utubdevideholder.style.display = "none"
    lottivideoholder.style.display = "block"
    lastbuttonfromthemessagetomain.style.display = "flex"
    forchangingitems.style.display = "none"


})


document.querySelector('.birthdateholder').addEventListener('touchstart',()=>{
        alert("የኔ ዉድ ይሄ እያንዳዷ ሰክንድሽ ምታልፊዉ ለህይወትሽ ዋጋ ሚሰጥሽን ነገር እንድታረጊበት መስታውሻ እንጂ አድሜዬሽን መቁጠሪያ አደለም ! ")
})


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function unhidingthemainpage(){
    let objs = document.querySelector('.forhidingmain')
    objs.style.display = 'block'
}