let boxes=document.querySelectorAll(".box"); 
let reset=document.querySelector(".reset");
const winpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],    
    [6,7,8]
];
let turnO=true;
boxes.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        console.log("clicked")
        if(turnO){
            boxes.innerHTML="O";
            boxes.style.color="red";
            turnO=false;
        }else{
            boxes.innerHTML="X";
            boxes.style.color="blue";
            turnO=true;
        }
        boxes.disabled=true;
        checkwinner();
    });
});
const checkwinner = () =>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&& pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                let message = document.createElement("p");
                message.textContent = "The winner is " + pos1val;
                document.body.appendChild(message);
                message.style.cssText = "text-align: center; font-size: 24px; font-weight: bold;";
            }
        }
    }  
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.style.color = "";
        box.disabled = false;
    });
    turnO = true;
});