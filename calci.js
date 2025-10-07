let output =document.getElementById("op");
let menu = document.querySelector(".fa-solid fa-bars");
let openbox= document.getElementById("content1");

let openbox1= document.getElementById("content2");
function OpenDialogue(){
    openbox.style.display="block";
}

function CloseDialogue(){
    openbox.style.display="none";
}


let box3= document.getElementById("content3");
function Opensiandci(){
    box3.style.display="block";
}

function Closesiandci(){
    box3.style.display="none";
}


let box4= document.getElementById("content4");
function Openvolume(){
    box4.style.display="block";
}

function Closevolume(){
    box4.style.display="none";
}


let box1= document.getElementById("content2");
function Openpercentage(){
    openbox1.style.display="block";
}

function Closepercentage(){
    openbox1.style.display="none";
}

function closemenu(){
   document.querySelector(".side-menu").style.left="-40%";
}

function Showmenu(){
    document.querySelector(".side-menu").style.left="0";
}

function display(num) {
    output.value += num;
}

function del(){
    output.value =output.value.slice(0,-1);
}

function clearAll(){
    output.value ="";
}

function cal(){
    output.value = eval(output.value);
}