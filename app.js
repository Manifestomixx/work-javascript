// let headingTag = document.getElementsByTagName("h1");
//  console.log(headingTag);
// headingTag.color="red";
// let newHeading = [...headingTag]
// newHeading.forEach((singleTag)=> singleTag.style.color ="red");

// document.body.style.backgroundColor = "yellow";

// innerHTML
// let newLink = document.querySelector("h1");
// newLink.innerHTML = "<h1> Obinna </h1>";

// let dec = document.querySelector('.dec');
// let h1 = document.querySelector('h1');
// let inc = document.querySelector('.inc')

// dec.addEventListener('click',function(){
//     h1.innerText = "Steff"
// })


// // line 6
// function bodyChanger(){
//     document.body.style.backgroundColor = "red"
// }

// inc.addEventListener('click',bodyChanger)

// Decrease
let dec = document.querySelector(".dec");
let h1 = document.querySelector("h1");

function decremental() {
    h1.innerText --;
    if (parseInt(h1.innerText) < 0) {
        document.body.style.backgroundColor = "red";

    }
   
}


dec.addEventListener("click",decremental)


// increase
let inc = document.querySelector(".inc");
let newH1 = document.querySelector("h1");
function incremental(){
    newH1.innerText ++;
    if (parseInt(h1.innerText) > 0) {
    document.body.style.backgroundColor = "green";
    }
    
}


inc.addEventListener("click",incremental)

// reset
let res = document.querySelector(".res");
let nH1 = document.querySelector("h1");
function reset(){
    if (parseInt(nH1.innerText) === 0);
    nH1.innerText  = 0;
    document.body.style.backgroundColor = "yellow";
     
}


res.addEventListener("click",reset)


// Take home