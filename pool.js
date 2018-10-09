const allPlayers = document.querySelector('#allplayers');
const gamePlay = document.querySelector('#game-play');
const gameOption1 = document.querySelector("#game2");
const form = document.querySelector('#new-player');
var firstPlayer = document.querySelector('#playgame');


var player1 = "";
var player1name = [{
    name: "",
    wins: 0
}];

var player2name = [{
    name: "",
    wins: 0
}];

var mockScoreData = [
    {
        playerName: "Jim",
        wins: 14
    },
    {
        playerName: "Hank",
        wins: 19
    },
    {
        playerName: "Fred",
        wins: 1
    },
    {
        playerName: "Mike",
        wins: 10
    }
]

var winner = "bunny";

console.log(winner);


  
  // sort by value
  mockScoreData.sort(function (a, b) {
    return b.wins - a.wins;

  });

  var firstPlace = mockScoreData[0];
  var firstPlaceScore = mockScoreData[0];

  var secondPlace = mockScoreData[1];
  var secondPlaceScore = mockScoreData[1];

  var thirdPlace = mockScoreData[2];
  var thirdPlaceScore = mockScoreData[2];

  $("#firstplace").text(firstPlace.playerName);
  $("#firstplace-score").text(firstPlace.wins);

  $("#secondplace").text(secondPlace.playerName);
  $("#secondplace-score").text(secondPlace.wins);

  $("#thirdplace").text(thirdPlace.playerName);
  $("#thirdplace-score").text(thirdPlace.wins);


    console.log(mockScoreData[0]);
    console.log(firstPlace.playerName);


function renderPlayers(doc) {

    let button = document.createElement('button');
    let name = document.createElement('span');
    let wins = document.createElement('span');

    button.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    wins.textContent = doc.data().wins;

   button.appendChild(name).setAttribute("class", "select");


    button.addEventListener('click', function() {
    event.stopPropagation();
    let player1name = doc.data().name;
    $("#playplay1").text(player1name);

    let player2name = doc.data().name;
    $("#playplay2").text(player2name);

   });

   allPlayers.appendChild(button);

   }

db.collection('players').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderPlayers(doc);
        console.log(doc.data())
    })    
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('players').add({
        name: form.name.value,
    });
        form.name.value = '';
});






