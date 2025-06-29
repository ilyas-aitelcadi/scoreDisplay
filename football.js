let scoreTeamA = 0;
let scoreTeamB = 0;
let teamAName = "Team A";
let teamBName = "Team B";

// Initialize team name inputs
document.getElementById('team1-name-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        teamAName = this.value || "Team A";
        document.getElementById('team1-name').textContent = teamAName;
        this.style.display = 'none';
        mettreAJourLeader();
    }
});

document.getElementById('team2-name-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        teamBName = this.value || "Team B";
        document.getElementById('team2-name').textContent = teamBName;
        this.style.display = 'none';
        mettreAJourLeader();
    }
});

function ajouterPoints(team, points) {
    if (team === 'A') {
        scoreTeamA += points;
        document.getElementById("scoreA").textContent = scoreTeamA;
    } else if (team === 'B') {
        scoreTeamB += points;
        document.getElementById("scoreB").textContent = scoreTeamB;
    }
    mettreAJourLeader();
}

function mettreAJourLeader() {
    let leader = document.getElementById("leader");
    
    if (scoreTeamA === 0 && scoreTeamB === 0) {
        leader.textContent = "Let the game begin!";
        leader.className = "leader";
    } else if (scoreTeamA > scoreTeamB) {
        leader.textContent = `${teamAName} leads by ${scoreTeamA - scoreTeamB} points`;
        leader.className = "leader team1-win";
    } else if (scoreTeamB > scoreTeamA) {
        leader.textContent = `${teamBName} leads by ${scoreTeamB - scoreTeamA} points`;
        leader.className = "leader team2-win";
    } else {
        leader.textContent = `Tie game, ${scoreTeamA} all`;
        leader.className = "leader tie";
    }
}

function resetScores() {
    scoreTeamA = 0;
    scoreTeamB = 0;
    document.getElementById("scoreA").textContent = "0";
    document.getElementById("scoreB").textContent = "0";
    mettreAJourLeader();
}