var  teamAScore = 0;var  teamBScore = 0;

var  teamAScoreValue = document.getElementById("teamAScore");
var  teamBScoreValue = document.getElementById("teamBScore");


var incrementScore = (team) => {
    if (team === "teamA"){
    teamAScore++;
    teamAScoreValue.textContent = teamAScore;
    }else if (team ==="teamB"){
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
};
var decrementScore = (team) => {
    if (team === "teamA" && teamAScore > 0){
    teamAScore--;
    teamAScoreValue.textContent = teamAScore;
    }else if (team ==="teamB" && teamBScore > 0){
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }
};
var resetScore  = () => {
    teamAScore = 0;
    teamBScore= 0;
    teamAScoreValue.textContent = teamAScore;
    teamBScoreValue.textContent =teamBScore;

}













