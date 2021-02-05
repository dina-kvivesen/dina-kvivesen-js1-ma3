// Question 2

const cors_url = "https://noroffcors.herokuapp.com/";
const api_url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const url = cors_url + api_url;

const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);

        const arrayOfObjects = await response.json();

        const games = arrayOfObjects.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i <= games.length; i++) {
            console.log(games[i].name);
            console.log(games[i].rating);
            console.log(games[i].tags.length);

            if (i === 8) {
                break;
            }
        resultsContainer.innerHTML += `<div class="result"> <li>Name: ${games[i].name}</li> <li>Rating: ${games[i].rating}</li> <li>Number of tags: ${games[i].tags.length}</li></div>`;

        }
    } catch (error) {
        console.log("error occurred", error);
        resultsContainer.innerHTML = "An error occurred, please try again later.";
    }
}
getGames();
