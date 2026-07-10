function unlock(){

let password = document.getElementById("password").value;


if(password === "Mukhlisah"){

document.getElementById("lockScreen").style.display="none";

}

else{

document.getElementById("error").innerHTML="Wrong password 💔";

}

}
