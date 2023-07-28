const writtenText=localStorage.getItem("writtenText")
const actualText=localStorage.getItem("actualText")

const wordsPerMinute=writtenText.split(" ")
const actualCheck=actualText.substring(0,writtenText.length)
const compareWordsPerMinute=actualCheck.split(" ")

console.log("Your Written:-",writtenText)
console.log("Checking With: ",actualCheck)


let countWordsPerMinute=0

for(let i=0;i<wordsPerMinute.length;i++)
{
    if(wordsPerMinute[i] === compareWordsPerMinute[i])
        countWordsPerMinute=countWordsPerMinute+1
}

document.querySelector(".wpmVal").innerText=String(countWordsPerMinute).padStart(2,"0") //displaying words per minute

let incorrect=0
for(let i=0;i<writtenText.length;i++)
{
    if(writtenText[i] !== actualCheck[i])
        incorrect++
    
}

document.querySelector(".accVal").innerText=String(Math.round(((writtenText.length - incorrect)/writtenText.length)*100))+"%"

document.querySelector(".charVal").innerText=String(writtenText.length)
document.querySelector(".timeVal").innerText=String(localStorage.getItem("time"))