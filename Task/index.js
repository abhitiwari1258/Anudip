let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let div = document.querySelector("div")

// let randomNumber = Math.floor(Math.random()*16777215)
// console.log(randomNumber);
// let hex = randomNumber.toString(16)
// console.log(hex);


start.addEventListener("click",()=>{
    
    let id = setInterval(()=>{
        // let red = Math.random()*255
        // let green = Math.random()*255
        // let blue = Math.random()*255
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        // console.log(randomColor);
        // console.log(typeof randomColor);
        
        
        div.style.backgroundColor = randomColor
        // div.style.backgroundColor = `rgba(${red},${green},${blue})`
    },1000)

    stop.addEventListener("click",()=>{
    clearInterval(id)
    
    })
    // console.log(red);
    // console.log(green);
    // console.log(blue);
    
})

