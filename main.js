
let footCheck=document.getElementById("foot");

let basktCheck=document.getElementById("basket");

function openPage(){
        if(footCheck.checked){
            window.open("football.html");
        }
        else if(basktCheck.checked){
            window.open("basketball.html");
        }
        else{
            alert("Please select a sport");
        }
        
    }
