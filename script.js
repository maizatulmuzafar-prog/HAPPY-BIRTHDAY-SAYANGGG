function unlock(){

let password = document.getElementById("password").value;


if(password === "Mukhlisah"){

document.getElementById("lockScreen").style.display="none";

}

else{

document.getElementById("error").innerHTML="Wrong password 💔";

}

}let photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

let index = 0;

setInterval(function(){

    index++;

    if(index >= photos.length){
        index = 0;
    }

    document.getElementById("slide").src = photos[index];

}, 3000);function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration = 
    (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 6000);

}


setInterval(createHeart, 300);
