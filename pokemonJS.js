let currPoke = null;
const URL = "https://pokeapi.co/api/v2/pokemon/";

function fetchPokemon() {

    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const display = document.getElementById("pokemonDisplay");
    const moves = document.getElementById("moveSelectors");

    display.innerHTML = "";

    fetch(URL + input)
        .then(response => {
            return response.json();
        })
        .then(data => {

            currPoke = data;

	    populateMoves(data.moves);

            const image = document.createElement("img");
            image.src = data.sprites.front_default;
            image.alt = data.name;

            const cryButton = document.createElement("button");
            cryButton.textContent = "Play Sound";

            cryButton.addEventListener("click", function () {
                if (data.cries && data.cries.latest) {
                    const audio = new Audio(data.cries.latest);
                    audio.play();
                }
            });

            display.appendChild(image);
            display.appendChild(document.createElement("br"));
            display.appendChild(cryButton);
        })
}


function populateMoves(moves) {
    
    const selectOpt = [document.getElementById("move1"), document.getElementById("move2"), document.getElementById("move3"), document.getElementById("move4")];
    
    selectOpt.forEach(select => {
        select.innerHTML = "";
        
        moves.forEach(moveObj => {
            const option = document.createElement("option");
            option.value = moveObj.move.name;
            option.textContent = moveObj.move.name;
            select.appendChild(option);
        });
        
    });
    
    
    
}


function addToTeam() {
    if (!currPoke) {
        return;
    }
    
    const teamCont = document.getElementById("teamContainer");
    
    const member = document.createElement("section");
    member.className = "members";
    
    const image = document.createElement("img");
    image.src = currPoke.sprites.front_default;
    
    const title = document.createElement("h3");
    title.textContent = currPoke.name.toUpperCase();
    
    const moveList = document.createElement("ul");
    
    const move = [document.getElementById("move1").value, document.getElementById("move2").value, document.getElementById("move3").value, document.getElementById("move4").value];

    move.forEach(mv => {
	const li = document.createElement("li");
        li.textContent = mv;
        moveList.appendChild(li);
    });
    
    member.appendChild(image);
    member.appendChild(title);
    member.appendChild(moveList);
    
    teamCont.appendChild(member);
    
    
}

