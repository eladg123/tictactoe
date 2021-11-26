var playerTurn = "x";
var storage= window.localStorage;
var cell1 = document.getElementById("cell1Pic");
var cell2 = document.getElementById("cell2Pic");
var cell3 = document.getElementById("cell3Pic");
var cell4 = document.getElementById("cell4Pic");
var cell5 = document.getElementById("cell5Pic");
var cell6 = document.getElementById("cell6Pic");
var cell7 = document.getElementById("cell7Pic");
var cell8 = document.getElementById("cell8Pic");
var cell9 = document.getElementById("cell9Pic");
var counter = 0;


function switchPlayer(){
        if(playerTurn== "x"){
                playerTurn= "o";
        }
        else{
                playerTurn= "x";
        }
        return playerTurn;

}

var steps = []
function cellClick(location){
     
    switch (location){
        case 1: if(cell1.src == ""){
                if(switchPlayer() == "x"){
                cell1.src = "x.png"; }
                 else {cell1.src="o.png"};}
                 winGame();
                 steps.push(1);
                 counter ++;
                break;
        case 2:if(cell2.src == ""){
                if(switchPlayer() == "x"){
                cell1.src = "x.png";
                }
                else {cell2.src="o.png"}; } 
                winGame();
                counter ++;
                steps.push(2);
                break;
        case 3: if(cell3.src == ""){
                if(switchPlayer() == "x"){
                cell3.src = "x.png";
        }
                else {cell3.src="o.png"};}
                winGame();
                counter ++;
                steps.push(3);
                
                break;     
        case 4: if(cell4.src == ""){
                if(switchPlayer() == "x"){
                cell4.src = "x.png";
        }
                else {cell4.src="o.png"};
        }        winGame();
                 steps.push(4);
                 counter ++;
                 break;
        case 5: if(cell5.src == ""){
                if( switchPlayer() == "x"){
                cell5.src = "x.png";
        }
                else {cell5.src="o.png"};
                steps.push(5);
                winGame();
                counter ++;
}               break;
        case 6: if(cell6.src == ""){
                if( switchPlayer() == "x"){
                cell6.src = "x.png";
        }
                else {cell6.src="o.png"};
                steps.push(6);
                winGame();
                counter ++;
  }              break;
        case 7: if(cell7.src == ""){
                if( switchPlayer() == "x"){
                        cell7.src = "x.png";
                }
                else {cell7.src="o.png"};}
                steps.push(7);
                counter ++;
                winGame();
                 break;
        case 8: if(cell8.src == ""){
                if( switchPlayer() == "x"){
                cell8.src = "x.png";}
                else {cell8.src="o.png"}}
                steps.push(8);
                winGame();
                counter ++;
                break;

        case 9: if(cell9.src == ""){ 
                 if (switchPlayer() == "x"){
                cell9.src = "x.png";   }
                else {cell9.src="o.png"};}
                steps.push(9);
                winGame();
                counter ++;
                 break;     
            
            }
            
        }

        
        function winGame(){
        if((cell1.src == cell2.src && cell1.src == cell3.src && cell1.src != "" && cell2.src != "" && cell3.src != "")||
        (cell1.src == cell4.src && cell1.src == cell7.src && cell7.src != "" && cell1.src != "" && cell4.src != "")||
        (cell1.src == cell5.src && cell1.src == cell9.src && cell9.src != "" && cell1.src != "" && cell5.src != "")||
        (cell4.src == cell5.src && cell4.src == cell6.src && cell6.src != "" && cell4.src != "" && cell5.src != "")||
        (cell7.src == cell8.src && cell7.src == cell9.src && cell9.src != "" && cell7.src != "" && cell8.src != "")||
        (cell2.src == cell5.src && cell8.src == cell5.src && cell5.src != "" && cell8.src != "" && cell2.src != "")||
        (cell9.src == cell3.src && cell6.src == cell3.src && cell3.src != "" && cell6.src != "" && cell9.src != "")||
        (cell3.src == cell5.src && cell3.src == cell7.src && cell7.src != "" && cell3.src != "" && cell5.src != "")){
                alert (playerTurn+" is the winner!!!")
                recordGame();
       
                 }}
        function newGame(){
                alert ("New game beginning, Have fun");
                cell1.src="";
                cell2.src="";
                cell3.src="";
                cell4.src="";
                cell5.src="";
                cell6.src="";
                cell7.src="";
                cell8.src="";
                cell9.src="";
        }         

        
        function stepBack(){
                var stepBackCellNum = steps.pop();
                counter --;
                switch (stepBackCellNum){
                        case 1: cell1.src="";
                                break;
                        case 2: cell2.src="";
                                break;
                        case 3: cell3.src="";
                                break;   
                        case 4: cell4.src="";
                                break;   
                        case 5: cell5.src="";
                                break;    
                        case 6: cell6.src="";
                                break;     
                        case 7: cell7.src="";
                                break;         
                        case 8: cell8.src="";
                                break;          
                        case 9: cell9.src="";
                                break;                         
                }
        }

        function recordGame(){
                if(counter<storage.getItem("record")){
                        storage.setItem("record",counter);
                }
        }

        function getBestWinner(){
                if("record" in storage){
                        alert(`the best winner is ${storage.getItem("record")} times`);
                }
                else alert(`dont have winner yet`);
        }

        




