// Without Dom

// let number = prompt("Enter Your Number")
let button = document.querySelector("button")
let p = document.querySelector("p")

// function checkNumber(number){
//     if(number == 0){
//         alert("Zero Number")
//     }else if(number > 0){
//         alert("Positive Number")
//     }else{
//         alert("Negative Number");
//     }
// }

// checkNumber(number);

// *****************************************************

// using DOM
button.addEventListener("click",()=>{
    let numInput = prompt("Enter Your Number")
    if(numInput == 0){
        p.innerText = "Zero Number"
        alert("Zero Number")
    }else if(numInput > 0){
        p.innerText = "Positive Number"
        alert("Positive Number")
    }else{
        p.innerText = "Negative Number"
        alert("Negative Number");
    }
})
