displayxyz = document.getElementById("display")

function clickingxyz(clickedxyz){
    if(displayxyz.innerText===""){
        if(clickedxyz!=0){
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }
    }else{
     displayxyz.innerText = displayxyz.innerText+clickedxyz
    }
}
function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)
    }
    catch(err){
        displayxyz.innerText='error'
    }
}
   
function clearxyz(){
    displayxyz.innerText = ""
}
function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
}