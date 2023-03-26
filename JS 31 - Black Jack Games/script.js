function main(){
    let confirm = document.getElementById('mainResult').innerHTML;
    if (confirm == "You are Fucking Loser !"){
        alert("Game Over ! Please Restart a Game ");
    }else{

    
    let x;
    do{
     x =Math.floor(Math.random()* 100 /7.6);
    }while(x==0);
    
    let currentTT = parseInt(document.getElementById('result').innerHTML);
    let Total = currentTT + x;
    document.getElementById('result').innerHTML = Total;
    
    if(Total<21){
        document.getElementById('mainResult').innerHTML = "Generate a another Number";
    }else if(Total==21){
        document.getElementById('mainResult').innerHTML = "You've a Won";
        alert("Confratuations! You're Fucking winner");
        document.getElementById('btn-res').style.display = "Block";
    }else if(Total>21){
        document.getElementById('mainResult').innerHTML = "You are Fucking Loser !";
        alert("You're Fucking Loser, Lost: (Click Restart to Play Again)");
        document.getElementById('btn-res').style.display = "Block";
    }
      

     var img = document.createElement("img");
     img.src = "images/" + x +".png";
     img.height = 200;


     document.body.appendChild(img);
    
}  
}
function Restart(){
    location.reload();
} 