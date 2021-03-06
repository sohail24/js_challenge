//challenge 1
function getAge(){
    var birthYear = prompt("Enter Your BirthYear");
    console.log(birthYear + " enterd");
    var ageInDays = (2020 - birthYear)*365
    console.log(ageInDays);

    var h2 = document.createElement('h2');      //dom - document object model
    var ansAgeInDays = document.createTextNode('Your Age In Days for birthyear '+ birthYear + ' is '+ ageInDays);
    h2.setAttribute('id','ansAgeInDays');
    h2.appendChild(ansAgeInDays);
    document.getElementById('container-1-flexbox-ans').appendChild(h2);
}

function removeAge(){
    document.getElementById('ansAgeInDays').remove();           //removing the text that have been added
}

//challenge 2

// https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small   link to get cat image every time the broweser is refreshed

function generateCatImg(){
    var img = document.createElement("img");
    img.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    document.getElementById("CatContainerIMG").appendChild(img);
}

//challenge 3

// ROCK : https://banner2.cleanpng.com/20180419/roq/kisspng-graphic-design-rock-vector-5ad83eca9b17d6.0384887915241212906353.jpg
// PAPER: https://png.pngtree.com/element_our/20190531/ourmid/pngtree-a-notebook-paper-image_1297634.jpg
// SCISSOR : https://www.vhv.rs/dpng/d/111-1119623_textile-arts-notions-embroidery-sewing-scissors-clipart-hd.png


function rpsGame(yourChoice){
    // console.log(yourChoice);             //returnig the image whole syntax as this is used
    // console.log(yourChoice.id)              // returning the id associated with the clicked image
    var humanChoice = yourChoice.id;
    var botChoice = ['rock', 'paper', 'scissor'][Math.floor(Math.random()*3)];
    console.log("your choice : " + humanChoice);
    console.log("bot choice : " + botChoice);

    var resultDetail = getWinner(humanChoice,botChoice);      // you lost / you win /  tie 
    console.log(resultDetail);

    frontEndRPS(humanChoice,botChoice,resultDetail);

}

function getWinner(humanChoice,botChoice){
    var dbScores = {
        'rock' :{ 'scissor':1, 'rock' : 0.5, 'paper':0},
        'paper' :{ 'rock':1, 'paper' : 0.5, 'scissor':0},
        'scissor' :{ 'paper':1, 'scissor' : 0.5, 'rock':0}
    }
    
    var humanScore = dbScores[humanChoice][botChoice];
    var botScore = dbScores[botChoice][humanChoice];

    if(humanScore > botScore){
        return {result:"You WIN!!", color:"green"};
    }
    else if(humanScore === botScore){
        return {result:"It's a TIE!..", color:"yellow"};
    }
    else{
        return {result:"You LOST..", color:"red"};
    }
}

function frontEndRPS(humanChoice,botChoice,resultDetail){
    var imgDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src,
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    var humanDiv = document.createElement("div");   
    var botDiv = document.createElement("div");   
    var messageDiv = document.createElement("div"); 
    
    humanDiv.innerHTML = "<img src='"+imgDatabase[humanChoice] + "'height='150px' width='150px' style='box-shadow: 0px 10px 50px rgba(37,50,223,1)'>";
    botDiv.innerHTML = "<img src='"+imgDatabase[botChoice] + "'height='150px' width='150px' style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    messageDiv.innerHTML = "<h1 style='font-size:60px; padding:50px; color:"+resultDetail['color']+"' >"+resultDetail['result']+"</h1>";

    document.getElementById("idC3").appendChild(humanDiv);
    document.getElementById("idC3").appendChild(messageDiv);
    document.getElementById("idC3").appendChild(botDiv);
    
    var resetDiv = document.createElement("div");

    humanDiv.id = "humanIMGDiv";
    messageDiv.id = "messageIMGDiv";
    botDiv.id = "botIMGDiv";
    resetDiv.id = "resetDiv";


    resetDiv.innerHTML =  "<button class = 'btn btn-primary' id = 'replayBtn' onclick='replayRPS()' >Replay</button>"
    document.getElementById("idC3_1").appendChild(resetDiv);


}

function replayRPS(){
    document.getElementById("humanIMGDiv").remove();
    document.getElementById("botIMGDiv").remove();
    document.getElementById("messageIMGDiv").remove();
    document.getElementById("resetDiv").remove();
    document.getElementById("idC3").remove();
    document.getElementById("idC3_1").remove();

    var divOriginal = document.createElement("div");
    divOriginal.className = "container-3-flexbox";
    divOriginal.id = "idC3";
    divOriginal.innerHTML = '<img id = "rock" src="https://clipartstation.com/wp-content/uploads/2017/11/batu-clipart-4.png" height="150px" width="150px" onclick="rpsGame(this)"><img id = "paper" src="https://clipartstation.com/wp-content/uploads/2018/10/piece-of-paper-clipart-3.jpg" height="150px" width="150px" onclick="rpsGame(this)">  <img id = "scissor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUP9FGIeCG3DOWDlAJYnRwUqro4AU__ZsfLA&usqp=CAU" height="150px" width="150px" onclick="rpsGame(this)">'
    document.getElementById("1").appendChild(divOriginal);

    var divOriginal_2 = document.createElement("div");
    divOriginal_2.className ="container-3-flexbox";
    divOriginal_2.id = "idC3_1";
    document.getElementById("1").appendChild(divOriginal_2);


    // var resetDiv = document.createElement("div");
    // resetDiv.innerHTML =  "<button class = 'btn btn-primary' id = 'replayBtn' style = 'width:100%; height:100%' onclick='replayRPS()' >Replay</button>"
    // document.getElementById("1").appendChild(resetDiv);

    // var rockIMG = document.createElement("img");
    // rockIMG.id = "rock";
    // rockIMG.src = "https://clipartstation.com/wp-content/uploads/2017/11/batu-clipart-4.png";
    // rockIMG.style.height="150px"; rockIMG.style.width = "150px";
    // // rockIMG.onclick=function(){rpsGame(this);};
    // document.getElementById("idC3").appendChild(rockIMG);

    // var paperIMG = document.createElement("img");
    // paperIMG.id = "paper";
    // paperIMG.src = "https://clipartstation.com/wp-content/uploads/2018/10/piece-of-paper-clipart-3.jpg";
    // paperIMG.style.height="150px"; paperIMG.style.width = "150px";
    // // paperIMG.onclick=rpsGame(this);
    // document.getElementById("idC3").appendChild(paperIMG);

    // var scissorIMG = document.createElement("img");
    // scissorIMG.id = "rock";
    // scissorIMG.src = "https://lh3.googleusercontent.com/proxy/-OdRoihFkUGz6EtR-m4__yc3nvhyQc8vXv8UaUc98MeEAo5IxnOp1R5E2SRcsKZnue_UXmjyvoQGY-IPhRdCRmaj_dfuCTICgh4A3JQ_1yFMo0HDEpj-XOASa20edg";
    // scissorIMG.style.height="150px"; scissorIMG.style.width = "150px";
    // // button_element.setAttribute('onclick','rpsGame(this);'); // for FF
    // // scissorIMG.onclick=function(){rpsGame(this);};
    // document.getElementById("idC3").appendChild(scissorIMG);
}

//challenge 4

var all_buttons = document.getElementsByTagName('button');
//  console.log(all_buttons);
// console.log(all_buttons[0].classList);
var button_colors  = [];

for( let i = 0; i<all_buttons.length; i++){
    button_colors.push(all_buttons[i].classList[1]);
}

// console.log(button_colors);

function colorChange(colorThingy){

    //  console.log(colorThingy.value);

    if(colorThingy.value == "red"){
        colorRed(all_buttons);
    }
    else if(colorThingy.value == "green"){
        colorGreen(all_buttons);
    }
    else if(colorThingy.value == "reset"){
        colorReset(all_buttons,button_colors);
    }
    else{
        colorRandom(all_buttons);
    }
    
}

function colorRed(all_buttons){
    // console.log(all_buttons);
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function colorGreen(all_buttons){
    // console.log(all_buttons);
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function colorReset(all_buttons,button_colors){
    // console.log(all_buttons);
    // console.log(button_colors);
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(button_colors[i]);
    }
}

function colorRandom(all_buttons){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(button_colors[randomSequence(all_buttons.length)]);
    }
}

function randomSequence(range){
    return Math.floor(Math.random()*range)
}


//challenge 5

let blackJackGameDetails  =  {
    "You" : {"div" : "#your-box-card-holder", "score" : 0, "score-span": "your-result"},
    "Dealer" : {"div": "#dealer-box-card-holder", "score" : 0 , "score-span": "dealer-result"},
    "Cards" : ['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    "CardsMap": {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10, 'A': [1,10]} ,
    "wins": 0,
    "losses": 0,
    "draws": 0,
}

const you = blackJackGameDetails["You"];
const dealer = blackJackGameDetails["Dealer"];
const cards = blackJackGameDetails["Cards"];

const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lossSound = new Audio("static/sounds/aww.mp3");

document.querySelector("#hit").addEventListener('click', blackJackGame);
document.querySelector("#deal").addEventListener('click', clearCards)
document.querySelector("#stand").addEventListener('click',dealerLogic);


function blackJackGame(){
    let card = randomCard();
    // console.log(card);
    addCards(card,you);
    addScores(card,you);
    // console.log(you["score"]);
    showScores(you);
    
}

function addCards(card,player){
    if(player["score"] <= 21){
        let cardImage = document.createElement("img");
        cardImage.src = 'static/images/'+card+'.png';
        cardImage.style.height = "150px";
        cardImage.style.width = "90x";
        document.querySelector(player["div"]).appendChild(cardImage);
        hitSound.play();
    }
}

function randomCard(){
    return cards[Math.floor(Math.random()*13)];
}

function clearCards(){

    let yourCards = document.querySelector("#your-box-card-holder").querySelectorAll("img");
    let dealerCards = document.querySelector("#dealer-box-card-holder").querySelectorAll("img");
    
    for(let i=0; i<yourCards.length; i++){
        yourCards[i].remove();
    }

    for(let i=0; i<dealerCards.length; i++){
        dealerCards[i].remove();
    }
    
    you["score"] = 0;
    dealer["score"] = 0;
    document.getElementById(you["score-span"]).textContent  = 0;
    document.getElementById(you["score-span"]).style.color  = "black";

    document.getElementById(dealer["score-span"]).textContent  = 0;
    document.getElementById(dealer["score-span"]).style.color  = "black";

    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "black";

}

function addScores(card,player){
    if(player["score"] <= 21){
        if(card === 'A')
        {
            // console.log(blackJackGameDetails["CardsMap"][card][1]);
            if(player["score"] + 10 > 21)    
                player["score"] += blackJackGameDetails["CardsMap"][card][0];
            else   
            player["score"] += blackJackGameDetails["CardsMap"][card][1];
        }
        else{
            player["score"] += blackJackGameDetails["CardsMap"][card];
        }
        console.log(player["score"]);
    
    }
}

function showScores(player){
    // console.log(player["score"]);
    // console.log(player["score-span"]);
     if(player["score"] > 21){
        document.getElementById(player["score-span"]).textContent  = "Busted";
        document.getElementById(player["score-span"]).style.color  = "red";
        // document.getElementById(dealer["score-span"]).textContent  = "";
    }

    else{
        document.getElementById(player["score-span"]).textContent = player["score"];
    }
}

function dealerLogic(){
    let card = randomCard();
    addCards(card,dealer);
    addScores(card,dealer); 
    showScores(dealer);

    let winner = computeWinner();
    showResult(winner);
}

function computeWinner(){

    let winner;
    let yourScore = you["score"];
    let dealerScore = dealer["score"];
   
    if(yourScore <=21){
        //conditon: higher score than dealer or when dealer busts you are winner
        if(yourScore > dealerScore || dealerScore > 21){
            console.log("You Won!!!");
            winner = you;
            blackJackGameDetails["wins"]++;
        }

        else if(yourScore < dealerScore){
            console.log("You Lost!!");
            winner = dealer;
            blackJackGameDetails["losses"]++;
        }

        else if (yourScore === dealerScore){
            console.log("It's a Draw!!");
            blackJackGameDetails["draws"]++;
        }
    }
    
    //condition: when user busts but dealer doesnt bust
    else if (yourScore > 21 && dealerScore <= 21){
        console.log("You Lost!!");
        winner = dealer;
        blackJackGameDetails["losses"]++;
    }

    //condition: when you and the dealer busts
    else if( yourScore > 21 && dealerScore > 21){
        console.log("It's a Draw!!");
        blackJackGameDetails["draws"]++;
    }
    
    return winner;
}

function showResult(winner){
    let message, messageColor;
    document.querySelector("#wins").textContent = blackJackGameDetails["wins"];
    document.querySelector("#losses").textContent = blackJackGameDetails["losses"];
    document.querySelector("#draws").textContent = blackJackGameDetails["draws"];
    
    if(winner === you){
        message = "You Won!!";
        messageColor = "green";
        winSound.play();
    }

    else if (winner == dealer){
        message = "You Lost!!";
        messageColor = "red";
        lossSound.play();    
    }

    else{
        message = "It's a Draw";
        messageColor  = "black";
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
}
