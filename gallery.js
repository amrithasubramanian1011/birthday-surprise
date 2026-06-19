const gallery = document.querySelector(".gallery");
const pageNo = document.getElementById("pageNo");

const captions = [
"இரண்டு beauties🤭",
"Kissessss💋",
"🔒",
"all ways?",
"Happiessttt",
"little moments",
"Huh, those days🥹",
"sweet lil 🧁?",
"👻கோவக்காரக் கிளியே..",
"🐝🐝🐝🐝🐝🐝🐝",
"our laughter!",
"my sunshine",
"🎬♥️",
"those நாட்கள்..",
"நெஞ்சில் நிற்கும் நாட்கள்🙂",
"Yu ஒல்லிக்குச்சி ஒடம்புக்காரி!",
"🐶❤️‍🩹",
"Forever special நீ!",
"🪩gratefulll♾️💗",
"one more புன்னகை."
];

let currentPage = 1;
function loadPage(page){
gallery.innerHTML="";
const start=(page-1)*4+1;
for(let i=start;i<start+4;i++){
gallery.innerHTML+=`
<div class="polaroid" style="--r:${Math.floor(Math.random()*8)-4}">
<img src="images/photos/photo${i}.jpeg">
<div class="caption">
${captions[i-1]}
</div>
</div>
`;
}
pageNo.innerHTML=page;
}
loadPage(currentPage);

document.getElementById("nextBtn").onclick=function(){
if(currentPage<5){
gallery.style.opacity="0";
setTimeout(()=>{
currentPage++;
loadPage(currentPage);
document.getElementById("topPage").scrollIntoView({
behavior:"smooth"
});
gallery.style.opacity="1";
},500);
}
else{
window.location.href="final.html";
}
}
const quotes=[

'Nee அழகிய rose’uh 🌹💟',
'Nee அழகிய rose’uh 🌹💟',
'Nee அழகிய rose’uh 🌹💟',
'Nee அழகிய rose’uh 🌹💟',
'Nee அழகிய rose’uh 🌹💟'

];
document.getElementById("quote").innerHTML=quotes[currentPage-1];