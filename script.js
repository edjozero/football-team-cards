const footballTeam = {
    team: "Manchester United",
    year: 2010,
    headCoach: "Sir Alex Ferguson",
    players: [
        {name: "Edwin van der Sar", position: "goalkeeper"},
        {name: "Rio Ferdinand", position: "defender"},
        {name: "Nemanja Vidić", position: "defender", isCaptain: true},
        {name: "Patrice Evra", position: "defender"},
        {name: "John O'Shea", position: "defender"},
        {name: "Rafael", position: "defender"},
        {name: "Fabio", position: "defender"},
        {name: "Jonny Evans", position: "defender"},
        {name: "Chris Smalling", position: "defender"},
        {name: "Wes Brown", position: "defender"},
        {name: "Ritchie De Laet", position: "defender"},
        {name: "Ryan Giggs", position: "midfielder"},
        {name: "Paul Scholes", position: "midfielder"},
        {name: "Nani", position: "midfielder"},
        {name: "Michael Carrick", position: "midfielder"},
        {name: "Darren Fletcher", position: "midfielder"},
        {name: "Antonio Valencia", position: "midfielder"},
        {name: "Anderson", position: "midfielder"},
        {name: "Park Ji-sung", position: "midfielder"},
        {name: "Darron Gibson", position: "midfielder"},
        {name: "Owen Hargreaves", position: "midfielder"},
        {name: "Wayne Rooney", position: "forward"},
        {name: "Dimitar Berbatov", position: "forward"},
        {name: "Javier Hernández", position: "forward"},
        {name: "Michael Owen", position: "forward"},
        {name: "Federico Macheda", position: "forward"},
        {name: "Gabriel Obertan", position: "forward"}
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

    if (player.isCaptain) {
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

            if (player.isCaptain) {
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

                if (player.isCaptain) {
                    playerName.textContent = "(Captain) " + playerName.textContent;
                }

                playersList.appendChild(playerCard);
            });
    }   
});