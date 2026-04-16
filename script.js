const footballTeam = {
    team: "Manchester United",
    year: 2010,
    headCoach: "Sir Alex Ferguson",
    players: [
        {name: "Edwin van der Sar", position: "goalkeeper", isCaptain: false},
        {name: "Rio Ferdinand", position: "defender", isCaptain: false},
        {name: "Nemanja Vidić", position: "defender", isCaptain: true},
        {name: "Patrice Evra", position: "defender", isCaptain: false},
        {name: "John O'Shea", position: "defender", isCaptain: false},
        {name: "Rafael", position: "defender", isCaptain: false},
        {name: "Fabio", position: "defender", isCaptain: false},
        {name: "Jonny Evans", position: "defender", isCaptain: false},
        {name: "Chris Smalling", position: "defender", isCaptain: false},
        {name: "Wes Brown", position: "defender", isCaptain: false},
        {name: "Ritchie De Laet", position: "defender", isCaptain: false},
        {name: "Ryan Giggs", position: "midfielder", isCaptain: false},
        {name: "Paul Scholes", position: "midfielder", isCaptain: false},
        {name: "Nani", position: "midfielder", isCaptain: false},
        {name: "Michael Carrick", position: "midfielder", isCaptain: false},
        {name: "Darren Fletcher", position: "midfielder", isCaptain: false},
        {name: "Antonio Valencia", position: "midfielder", isCaptain: false},
        {name: "Anderson", position: "midfielder", isCaptain: false},
        {name: "Park Ji-sung", position: "midfielder", isCaptain: false},
        {name: "Darron Gibson", position: "midfielder", isCaptain: false},
        {name: "Owen Hargreaves", position: "midfielder", isCaptain: false},
        {name: "Wayne Rooney", position: "forward", isCaptain: false},
        {name: "Dimitar Berbatov", position: "forward", isCaptain: false},
        {name: "Javier Hernández", position: "forward", isCaptain: false},
        {name: "Michael Owen", position: "forward", isCaptain: false},
        {name: "Federico Macheda", position: "forward", isCaptain: false},
        {name: "Gabriel Obertan", position: "forward", isCaptain: false}
    ]
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playersList = document.getElementById("player-cards");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

footballTeam.players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.textContent = player.name;
    playerCard.appendChild(playerName);

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;
    playerCard.appendChild(playerPosition);

    if (player.isCaptain === true) {
        playerName.textContent = "(Captain) " + playerName.textContent;
    }

    playersList.appendChild(playerCard);
});


players.addEventListener("change", (event) => {
    if (event.target.value === "all") {
        playersList.innerHTML = "";
        footballTeam.players.forEach(player => {
            const playerCard = document.createElement("div");
            playerCard.classList.add("player-card");

            const playerName = document.createElement("h2");
            playerName.textContent = player.name;
            playerCard.appendChild(playerName);

            const playerPosition = document.createElement("p");
            playerPosition.textContent = `Position: ${player.position}`;
            playerCard.appendChild(playerPosition);

            if (player.isCaptain === true) {
                playerName.textContent = "(Captain) " + playerName.textContent;
            }

            playersList.appendChild(playerCard);
        });
    } else {
        playersList.innerHTML = "";
        footballTeam.players
            .filter(player => player.position === event.target.value)
            .forEach(player => {
                const playerCard = document.createElement("div");
                playerCard.classList.add("player-card");

                const playerName = document.createElement("h2");
                playerName.textContent = player.name;
                playerCard.appendChild(playerName);

                const playerPosition = document.createElement("p");
                playerPosition.textContent = `Position: ${player.position}`;
                playerCard.appendChild(playerPosition);

                if (player.isCaptain === true) {
                    playerName.textContent = "(Captain) " + playerName.textContent;
                }

                playersList.appendChild(playerCard);
            });
    }   
});