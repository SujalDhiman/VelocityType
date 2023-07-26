let initialPage=true

if(initialPage)
{
    const keycheck=document.querySelector(".keycheck")
    keycheck.setAttribute("placeholder","Check Your Keyboard ... ")
    const keyboard=document.querySelector(".keyboard")
    keycheck.addEventListener("keydown",function(e){
        if(((e.key >= "A" && e.key <= "Z") || e.key === " ") || ((e.key >="a" && e.key <="z") || e.key === " "))
        {
            const find=`key-${e.key.toUpperCase()}`
            const keyboardButton=keyboard.querySelector(`.${find}`)
            if(keyboardButton !== null)
            {
                keyboardButton.style.color="green"
                keyboardButton.style.borderColor="green"
                keycheck.addEventListener("keyup",function (e){
                    e.stopPropagation()
                    keyboardButton.style.color="white"
                    keyboardButton.style.borderColor="white"
                })
            }
        }})
}

const generateButton=document.querySelector(".generateText")
generateButton.addEventListener("click",function ()
{
    initialPage=false

    const keycheck=document.querySelector(".keycheck")
    keycheck.setAttribute("placeholder","Start Typing Here ....")
    keycheck.value=""

    if(keycheck.classList.contains("keycheck"))
    {
        keycheck.classList.remove("keycheck")
        keycheck.classList.add("wrt")
    }
    const addText = document.querySelector(".generate");
    let sampleText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi ipsam quam corrupti non quidem assumenda exercitationem ipsum aliquid magni?";
    sampleText=sampleText.toLowerCase()

    const timerDisplay=document.querySelector(".timer")
    timerDisplay.style.visibility="visible"

    const refresh=document.querySelector(".refresh")
    refresh.style.visibility="visible"

    addText.innerText=""

    for (let i = 0; i < sampleText.length; i++) {
        const span = document.createElement("span");
        span.innerText = sampleText[i];
        addText.append(span);
    }

    const inp = document.querySelector(".wrt");
    const disp = document.querySelector(".display");

    let count = 0;
    let pos = -1;
    let words = 0;
    let initial = 0;
    let ans = "";
    let timer = 30;

    refresh.addEventListener("click", function () {
    inp.value = "";
    addText.innerText = "";
    pos = -1;
    words = 0;
    count = 0;
    ans = "";
    timer = 30;
    disp.innerText = "";
    keycheck.classList.remove("wrt")
    keycheck.classList.add("keycheck")
    });

    const id=setInterval(()=>{
        if(timer === 0)
        {
            timerDisplay.innerText=timer
            console.log(ans.split(" ").length)
            inp.blur()
            refresh.click()
            clearInterval(id)
        }
        else
        {
        timer=timer-1
        timerDisplay.innerText=timer
        }
    },1000)


    inp.addEventListener("keydown", function (e){
    if(count > sampleText.length && addText.children.length > 1)
    {
        btn.click()  //after button click automatic results
    }
    if (e.key === "Control" || e.key === "Alt" || e.key === "CapsLock" || e.key === "Tab") {
        e.preventDefault();
        alert("Keys locked");
    }
    else if (e.key !== "Backspace"){
        if (e.key === " ") {
            disp.textContent += " ";
            pos =disp.textContent.substring(0, count) ===sampleText.substring(0, count)? count: pos;
        if (pos != -1){
            ans = disp.textContent.substring(0, pos);
        }
        count = count + 1;
        } 
        else 
        {
            if (e.key === "Shift"){
                e.preventDefault();
            } 
            else{
                disp.textContent += e.key;
                if(addText.children.length > 1)
                {
                    if (disp.textContent[count] === sampleText[count]) {
                    addText.children[count].style.color = "green";
                    } 
                    else {
                    addText.children[count].style.color = "red";
                    }   
                }
                count = count + 1;
            }
        }
    } 
    else{
        if (count === pos) {
        e.preventDefault();
        } 
        else {
        disp.textContent = disp.textContent.substring(0, count - 1);
        count = count - 1;
        if (count <= -1) count = 0;
        addText.children[count].style.color = "white";
        }
    }
    });

})

















    // generateButton.addEventListener("click", () =>{
    // inp.focus()
    // sampleText = sampleText.toLowerCase();

    // addText.innerText=""
    // for (let i = 0; i < sampleText.length; i++) {
    //     const span = document.createElement("span");
    //     span.innerText = sampleText[i];
    //     addText.append(span);
    // }
    // });
    // const btn = document.querySelector(".refresh");
    // const inp = document.querySelector(".wrt");
    // const disp = document.querySelector(".display");

    // let count = 0;
    // let pos = -1;
    // let words = 0;
    // let initial = 0;
    // let ans = "";
    // let timer = 9000;

    // btn.addEventListener("click", function () {
    // inp.value = "";
    // addText.innerText = "";
    // pos = -1;
    // words = 0;
    // count = 0;
    // ans = "";
    // timer = 9000;
    // disp.innerText = "";
    // });
    // inp.addEventListener("keydown", function (e) {
    // if(count > addText.innerText.length)
    // {
    //     btn.click()  //after button click automatic results
    // }
    // if (e.key === "Control" || e.key === "Alt" || e.key === "CapsLock" || e.key === "Tab") {
    //     e.preventDefault();
    //     alert("Keys locked");
    // }
    // else if (e.key !== "Backspace") {
    //     if (e.key === " ") {
    //     disp.textContent += " ";
    //     pos =disp.textContent.substring(0, count) ===sampleText.substring(0, count)? count: pos;
    //     if (pos != -1) ans = disp.textContent.substring(0, pos);
    //     count = count + 1;
    //     } 
    //     else {
    //     if (e.key === "Shift") {
    //         e.preventDefault();
    //     } 
    //     else {
    //         disp.textContent += e.key;
    //         if (disp.textContent[count] === sampleText[count]) {
    //         addText.children[count].style.color = "green";
    //         } 
    //         else {
    //         addText.children[count].style.color = "red";
    //         }
    //         count = count + 1;
    //     }
    //     }
    //     } 
    //     else {
    //     if (count === pos) {
    //     e.preventDefault();
    //     } 
    //     else {
    //     disp.textContent = disp.textContent.substring(0, count - 1);
    //     count = count - 1;
    //     if (count <= -1) count = 0;
    //     addText.children[count].style.color = "white";
    //     }
    // }
    // });
    // // let clearid = setInterval(() => {
    // // document.querySelector(".time").innerText = timer;
    // // timer = timer - 1;
    // // if(timer === 0) {
    // //     document.querySelector(".time").innerText = timer;
    // //     clearTimeout(clearid);
    // //     document.querySelector(".correct").innerText = ans.split(" ").length;
    // //     btn.click();
    // // }
    // // }, 1000);