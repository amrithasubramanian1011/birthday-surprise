const message =
"For someone special... ❤️\n\nHey Gopsss 🌸";

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML =
        message.substring(0, i + 1).replace(/\n/g, "<br>");;

        i++;

        setTimeout(typeWriter,90);

    }

}

typeWriter();

document.getElementById("startBtn").onclick=function(){

    window.location.href = "intro.html";

}