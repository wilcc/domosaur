const messMe = document.querySelector(`.mess-with-me`)
messMe.style.color= 'green'
messMe.style.fontSize = '3em'
const hideImg = document.querySelector(`#hide-me`)
hideImg.style.display = 'none'
// hideImg.className += 'invisible'
const firstImg = document.querySelector(`#triceratops`)
firstImg.style.width = '324px'
const changeOrange = function(){messMe.style.color='orange'}
const changePurple = function(){messMe.style.color='purple'}

messMe.addEventListener('click',changeOrange)
messMe.addEventListener('dblclick',changePurple)
// messMe.addEventListener('click' , function(){messMe.style.color='orange'})
firstImg.addEventListener('click', function(){firstImg.style.border='thin solid red'})
const featherDino = document.querySelector(`#feathers`)
const transparent = function(){
    if(featherDino.style.opacity==='0.5'){
        featherDino.style.border='thick dotted blue'
    }if(featherDino.style.border==='thick dotted blue'&& featherDino.style.opacity==='0.5'){featherDino.style.opacity='1'}
    else
    {featherDino.style.opacity='.5'}}
featherDino.addEventListener('click',transparent)
const backGroundColor = document.querySelector(`#toggle`)
const row = document.querySelector(`#row`)
backGroundColor.addEventListener('click', function(){if(row.style.backgroundColor==='black'){row.style.backgroundColor='white'}
else{row.style.backgroundColor='black'}})
const bigDino = document.querySelector(`#biggify`)
bigDino.addEventListener('mouseenter',function(){bigDino.style.width='200px'})
bigDino.addEventListener('mouseout',function(){bigDino.style.width='162px'})
